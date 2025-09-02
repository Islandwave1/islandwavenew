import Layout from '../components/Layout'
export default function Legal(){ return (<Layout>
  <h1 className="text-3xl font-bold mb-4">Legal (Canada)</h1>
  <h2 id="terms" className="text-xl font-semibold mt-4">Terms of Service</h2>
  <p>These terms apply across Canada. Service availability may vary by location. Billing disputes must be raised within 30 days. Late payments may incur fees. Installation and equipment charges may apply.</p>
  <h2 id="privacy" className="text-xl font-semibold mt-4">Privacy (PIPEDA)</h2>
  <p>IslandWave complies with PIPEDA. We collect only what is necessary to provide and support services. You can request access or corrections to your personal information by contacting support.</p>
  <h2 id="aup" className="text-xl font-semibold mt-4">Acceptable Use Policy</h2>
  <ul className="list-disc pl-5">
    <li>No unlawful activity or infringement of rights.</li>
    <li>No spam, malware, or network abuse.</li>
    <li>Residential plans are for personal, non‑commercial use.</li>
    <li>We may manage network traffic during congestion to ensure fair use.</li>
  </ul>
</Layout>) }

