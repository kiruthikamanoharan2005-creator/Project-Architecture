import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import "./contact.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";

export default function Contact() {
  const form = useRef();

  const [errors, setErrors] = useState({
    email: "",
    mobile: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const validateFields = () => {
    const email = form.current.user_email.value.trim();
    const mobile = form.current.user_mobile.value.trim();

    let valid = true;
    let newErrors = { email: "", mobile: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateFields()) return;

    emailjs
      .sendForm(
        "service_dmeblp9",
        "template_dgkt9y5",
        form.current,
        "NhpImgNMcNKsJn8iI"
      )
      .then(() => {
        setShowPopup(true); // SHOW POPUP INSTEAD OF ALERT
        form.current.reset();
        setErrors({ email: "", mobile: "" });
      })
      .catch((error) => {
        alert("Failed to send message. Try again.");
        console.error(error);
      });
  };

  return (
    <>
      <section className="contact-section">
        <Header />
        <h2>Contact Us</h2>
        <p>We would love to hear from you! Fill out the form below.</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />

          <input
            type="tel"
            name="user_mobile"
            placeholder="Your Mobile Number"
            maxLength="10"
            required
          />
          {errors.mobile && <p className="error-text">{errors.mobile}</p>}

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <input type="text" name="subject" placeholder="Subject" required />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </section>

      {/* Popup Box */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Message Sent!</h3>
            <p>Your message has been delivered successfully.</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
