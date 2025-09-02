import nodemailer from 'nodemailer'
import formidable from 'formidable'
import fs from 'fs'
export const config = { api: { bodyParser: false } }
export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })
  const form = new formidable.IncomingForm()
  form.maxFileSize = 6 * 1024 * 1024
  form.parse(req, async (err, fields, files) => {
    if(err) return res.status(400).json({ message: 'Upload error' })
    try {
      const to = process.env.EMAIL_TO || 'josh@islandwave.ca'
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.example.com',
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: { user: process.env.SMTP_USER || '', pass: process.env.SMTP_PASS || '' }
      })
      let attachments = []
      if(files.billfile && files.billfile.filepath){
        attachments.push({ filename: files.billfile.originalFilename || 'bill', path: files.billfile.filepath })
      }
      await transporter.sendMail({
        from: `${fields.name} <${fields.email}>`,
        to,
        subject: `Beat Your Bill from ${fields.name}`,
        text: `Name: ${fields.name}\nEmail: ${fields.email}\nProvider: ${fields.provider}\nPrice: ${fields.price}`,
        attachments
      })
      attachments.forEach(a => { try{ fs.unlinkSync(a.path) } catch(e){} })
      res.status(200).json({ message: 'Thanks! Your bill was sent.' })
    } catch(e){
      console.error(e)
      res.status(500).json({ message: 'Failed to send email' })
    }
  })
}

