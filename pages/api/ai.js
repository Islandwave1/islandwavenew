export default function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'Use POST'})
  const q=String(req.body?.prompt||'').toLowerCase()
  let a='Ask about plans, billing, or our marketplace.'
  if(q.includes('plan')) a='Plans: Basic 100Mbps $49, Plus 300Mbps $69, Pro 1Gbps $99 (CAD).'
  else if(q.includes('beat')) a='Use Beat Your Bill page and upload your bill.'
  res.json({answer:a})
}

