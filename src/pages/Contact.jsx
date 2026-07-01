import "../styles/Contact.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">

      <section className="contact-hero">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >
          Contact <span>Us</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
        >
          We'd love to hear from you. Send us your questions,
          suggestions or business inquiries.
        </motion.p>

      </section>

      <section className="contact-wrapper">

        <div className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
          ></textarea>

          <button>
            Send Message
          </button>

        </div>

        <div className="contact-info">

          <div className="info-card">
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <p>gulammustafa544128@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt />
            <div>
              <h3>Phone</h3>
              <p>+92 XXX XXXXXXX</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h3>Location</h3>
              <p>Pakistan</p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;