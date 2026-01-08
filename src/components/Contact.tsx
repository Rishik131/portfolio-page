// import "../styles/section.css";

// export default function Contact() {
//   return (
//     <section id="contact" className="section">
//       <h2>Contact</h2>

//       <div className="contact-container">

//         {/* Contact Info */}
//         <div className="contact-info">
//           <h3>Let’s work together</h3>
//           <p>
//             Have a project, idea, or opportunity?  
//             Feel free to reach out.
//           </p>

//           <div className="contact-item">
//             <span>📞 Phone</span>
//             <a href="tel:+918303386877">+91-8303386877</a>
//             <span>📧 Email</span>
//             <a href="mailto:rishik.k2002@gmail.com">rishik@email.com</a>
//           </div>

//           <div className="contact-item">
//             <span>📍Location</span>
//             <p>Hyderabad, India</p>
//           </div>

//           <div className="contact-socials">
//             <a href="https://www.linkedin.com/in/rishik-kumar/" target="_blank">LinkedIn</a>
//             <a href="https://x.com/RishikHere" target="_blank">Twitter</a>
//             <a href="https://github.com/Rishik131" target="_blank">GitHub</a>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <form className="contact-form">
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Your Email" required />
//           <textarea placeholder="Your Message" rows="5" required />
//           <button type="submit">Send Message</button>
//         </form>

//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import "../styles/section.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e:  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    const mailtoLink = `mailto:rishik.k2002@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

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
             <span>📞 Phone</span>
             <a href="tel:+918303386877">+91-8303386877</a>
             <span>📧 Email</span>
             <a href="mailto:rishik.k2002@gmail.com">rishik@email.com</a>
           </div>
           <div className="contact-item">
             <span>📍Location</span>
             <p>Hyderabad, India</p>
           </div>

          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/rishik-kumar/" target="_blank">LinkedIn</a>
            <a href="https://x.com/RishikHere" target="_blank">Twitter</a>
            <a href="https://github.com/Rishik131" target="_blank">GitHub</a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}
