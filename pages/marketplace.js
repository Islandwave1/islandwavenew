import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
export default function Marketplace(){
  const [items,setItems]=useState([])
  const [f,setF]=useState({title:'',price:'',desc:'',email:'',image:''})
  useEffect(()=>{ setItems(JSON.parse(localStorage.getItem('iw_market')||'[]')) },[])
  function toBase64(file){ return new Promise((res,rej)=>{ const r=new FileReader(); r.onload=()=>res(String(r.result)); r.onerror=rej; r.readAsDataURL(file) }) }
  async function addItem(){
    if(!f.title.trim()) return
    const it={id:Date.now(),...f}; const next=[it,...items]; setItems(next); localStorage.setItem('iw_market',JSON.stringify(next)); setF({title:'',price:'',desc:'',email:'',image:''})
  }
  return (<Layout>
    <h1 className="text-3xl font-bold mb-4">Marketplace</h1>
    <div className="card mb-4">
      <div className="grid md:grid-cols-2 gap-3">
        <input className="input" placeholder="Title" value={f.title} onChange={e=>setF({...f,title:e.target.value})}/>
        <input className="input" placeholder="Price (CAD)" value={f.price} onChange={e=>setF({...f,price:e.target.value})}/>
        <input className="input md:col-span-2" placeholder="Contact email" value={f.email} onChange={e=>setF({...f,email:e.target.value})}/>
        <textarea className="input md:col-span-2" rows="3" placeholder="Description" value={f.desc} onChange={e=>setF({...f,desc:e.target.value})}/>
        <input className="input md:col-span-2" type="file" accept="image/*" onChange={async (e)=>{ const file=e.target.files?.[0]; if(file){ const b64=await toBase64(file); setF({...f,image:b64}) } }}/>
      </div>
      <button className="btn btn-primary mt-3" onClick={addItem}>Post Listing</button>
    </div>
    <div className="grid md:grid-cols-3 gap-4">
      {items.map(it=>(<div key={it.id} className="card">
        {it.image && <img src={it.image} alt={it.title} className="w-full h-40 object-cover rounded-xl mb-2"/>}
        <div className="font-bold text-lg">{it.title}</div>
        <div className="text-slate-700">${it.price}</div>
        <div className="text-slate-700 text-sm mt-1">{it.desc}</div>
        {it.email && <a className="btn mt-2" href={`mailto:${it.email}?subject=Marketplace: ${encodeURIComponent(it.title)}`}>Contact Seller</a>}
      </div>))}
    </div>
  </Layout>)
}

