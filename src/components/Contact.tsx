import "../styles/section.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      <div className="contact-container">

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Let’s work together</h3>
          <p>
            Have a project, idea, or opportunity?  
            Feel free to reach out.
          </p>

          <div className="contact-item">
            <span>Email</span>
            <a href="mailto:rishik@email.com">rishik@email.com</a>
          </div>

          <div className="contact-item">
            <span>Location</span>
            <p>India</p>
          </div>

          <div className="contact-socials">
            <a href="#" target="_blank">GitHub</a>
            <a href="#" target="_blank">LinkedIn</a>
            <a href="#" target="_blank">Twitter</a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}
