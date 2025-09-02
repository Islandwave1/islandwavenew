import Layout from '../components/Layout'
export default function Plans(){
  const tiers=[
    {id:'basic', name:'Island Basic', speed:'100 Mbps', price:49, link:'YOUR_STRIPE_PAYMENT_LINK_BASIC'},
    {id:'plus', name:'Island Plus', speed:'300 Mbps', price:69, link:'YOUR_STRIPE_PAYMENT_LINK_PLUS'},
    {id:'pro', name:'Island Pro', speed:'1 Gbps', price:99, link:'YOUR_STRIPE_PAYMENT_LINK_PRO'},
  ]
  return (<Layout>
    <h1 className="text-3xl font-bold mb-4">Plans & Pricing</h1>
    <div className="grid md:grid-cols-3 gap-4">
      {tiers.map(t=>(<div key={t.id} className="card">
        <div className="font-bold text-xl">{t.name}</div>
        <div className="text-slate-700">{t.speed}</div>
        <div className="text-3xl font-extrabold mt-2">${t.price}<span className="text-base text-slate-600">/mo</span></div>
        <a href={t.link} target="_blank" rel="noopener" className="mt-3 inline-block btn btn-primary">Sign Up</a>
      </div>))}
    </div>
  </Layout>)
}

