import ContactForm from '../components/ContactForm'
import SocialLinks from '../components/SocialLinks'
import ContactInfo from '../components/ContactInfo'

export default function ContactPage() {
  return (
    <main className="contact-page">
      <div className="contact-header">
        <h1>Let&apos;s Connect</h1>
        <p>Have a question or want to work together? I&apos;d love to hear from you.</p>
      </div>
      <div className="contact-container">
        <ContactInfo />
        <ContactForm />
      </div>
      <SocialLinks />
    </main>
  )
}