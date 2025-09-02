export default function Footer(){ return (
  <footer className="mt-10 border-t border-slate-200 bg-white/60">
    <div className="container py-6 grid md:grid-cols-3 gap-6">
      <div>
        <div className="text-lg font-bold">IslandWave</div>
        <div className="text-slate-600">Canada-wide service • Vancouver Island roots</div>
      </div>
      <div>
        <div className="font-semibold mb-1">Legal</div>
        <div className="text-slate-700 space-y-1">
          <a href="/legal#terms">Terms</a><br/>
          <a href="/legal#privacy">Privacy</a><br/>
          <a href="/legal#aup">AUP</a>
        </div>
      </div>
      <div>
        <div className="font-semibold mb-1">Explore</div>
        <div className="text-slate-700 space-y-1">
          <a href="/plans">Plans</a><br/>
          <a href="/marketplace">Marketplace</a><br/>
          <a href="/community">Community</a>
        </div>
      </div>
    </div>
    <div className="container pb-6 text-slate-600">© 2025 IslandWave</div>
  </footer>
) }

