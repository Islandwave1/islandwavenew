import { useState } from 'react'
import Layout from '../components/Layout'
export default function BeatYourBill(){
  const [f,setF]=useState({name:'',email:'',provider:'',price:''})
  const [status,setStatus]=useState('')
  async function submit(e){
    e.preventDefault()
    const form = new FormData()
    form.append('name', f.name)
    form.append('email', f.email)
    form.append('provider', f.provider)
    form.append('price', f.price)
    const file = document.getElementById('billfile')?.files?.[0]
    if(file) form.append('billfile', file)
    setStatus('Sending...')
    const res = await fetch('/api/upload', { method:'POST', body: form })
    const data = await res.json()
    setStatus(data?.message || 'Done')
  }
  return (<Layout>
    <h1 className="text-3xl font-bold mb-4">Beat Your Bill</h1>
    <form className="grid md:grid-cols-2 gap-3 card" onSubmit={submit}>
      <div><label className="text-sm">Name</label><input className="input" required value={f.name} onChange={e=>setF({...f,name:e.target.value})}/></div>
      <div><label className="text-sm">Email</label><input className="input" type="email" required value={f.email} onChange={e=>setF({...f,email:e.target.value})}/></div>
      <div><label className="text-sm">Current Provider</label><input className="input" value={f.provider} onChange={e=>setF({...f,provider:e.target.value})}/></div>
      <div><label className="text-sm">Monthly Price (CAD)</label><input className="input" value={f.price} onChange={e=>setF({...f,price:e.target.value})}/></div>
      <div className="md:col-span-2"><label className="text-sm">Attach bill (PDF or image)</label><input id="billfile" className="input" type="file" name="billfile"/></div>
      <div className="md:col-span-2"><button className="btn btn-primary">Send</button></div>
      <div className="md:col-span-2 text-slate-700">{status}</div>
    </form>
  </Layout>)
}

