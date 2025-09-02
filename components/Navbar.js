import Link from 'next/link'
export default function Navbar(){
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container flex items-center gap-4 py-3">
        <Link href="/"><a className="flex items-center gap-2 font-extrabold text-lg"><img src="/logo.png" alt="IslandWave" className="h-9 w-9"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">IslandWave</span></a></Link>
        <div className="ml-auto flex gap-1">
          <Link href="/live"><a className="navlink">Live</a></Link>
          <Link href="/plans"><a className="navlink">Plans</a></Link>
          <Link href="/beat-your-bill"><a className="navlink">Beat Your Bill</a></Link>
          <Link href="/community"><a className="navlink">Community</a></Link>
          <Link href="/marketplace"><a className="navlink">Marketplace</a></Link>
          <Link href="/legal"><a className="navlink">Legal</a></Link>
          <Link href="/login"><a className="navlink">Login</a></Link>
        </div>
      </div>
    </nav>
  )
}

