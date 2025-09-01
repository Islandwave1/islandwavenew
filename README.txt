IslandWave — GoDaddy Static Site (with PHP mailer)

Pages:
- /index.html (home with YouTube live)
- /live.html
- /plans.html (Stripe Payment Links placeholders)
- /beat-your-bill.html (uploads to upload_bill.php)
- /community.html (localStorage micro-feed)
- /marketplace.html (localStorage micro-marketplace)
- /legal.html
- /assets/logo.png (replace with your actual logo)
- /assets/favicon.ico (optional placeholder)
- /upload_bill.php (PHP mail with attachment to josh@islandwave.ca)

Payment:
- Create three Stripe Payment Links
- Paste URLs into /plans.html replacing:
  YOUR_STRIPE_PAYMENT_LINK_BASIC
  YOUR_STRIPE_PAYMENT_LINK_PLUS
  YOUR_STRIPE_PAYMENT_LINK_PRO

GoDaddy upload:
1) Zip folder contents, upload to cPanel File Manager -> public_html, Extract.
2) Ensure index.html is in public_html.
3) Test https://yourdomain/
4) If PHP mail() doesn't send, consider SMTP with PHPMailer.
