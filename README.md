# IslandWave — Full Next.js Project (Vercel + GitHub ready)

## Includes
- Pages: Home, Live, Plans, Beat Your Bill (upload -> email), Community, Marketplace, Legal, Login
- API routes: /api/upload (SMTP via Nodemailer + formidable), /api/ai, NextAuth placeholder
- Tailwind CSS styling, Navbar with logo, Footer, vercel.json

## Setup
1. npm install
2. Create .env.local with:
   SMTP_HOST=your_smtp_host
   SMTP_PORT=587
   SMTP_USER=your_smtp_user
   SMTP_PASS=your_smtp_pass
   EMAIL_TO=josh@islandwave.ca
   NEXTAUTH_SECRET=some-long-random-string
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
3. npm run dev
4. Push to GitHub, import to Vercel, add the same env vars and Deploy.

## Stripe
Replace payment links in pages/plans.js (YOUR_STRIPE_PAYMENT_LINK_*). For full Stripe Checkout later, I can add serverless functions.

