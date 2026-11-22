
import { useState } from "react";

import {
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
} from "lucide-react";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const form = event.target;
    const formData = new FormData(form);

    formData.append("_subject", "New ZAVORA Project Enquiry");

    try {
      const response = await fetch(
        "https://formspree.io/f/maeoppgy",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Your enquiry has been sent successfully. We will get back to you soon.",
        });

        form.reset();
      } else {
        setStatus({
          type: "error",
          message: result.errors
            ? result.errors.map((error) => error.message).join(", ")
            : "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Unable to send your enquiry. Check your internet connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="contact-page">
      <section className="page-hero">
        <span className="eyebrow">CONTACT US</span>

        <h1>
          Let's build something
          <span> meaningful.</span>
        </h1>

        <p>
          Have a project in mind? Tell us what you need.
          We'd be glad to discuss your ideas and explore
          how we can help.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <span className="eyebrow">GET IN TOUCH</span>

          <h2>Let's start a conversation.</h2>

          <p>
            Whether you need a business website or a custom
            web application, we're interested in hearing
            about your project.
          </p>

          <div className="contact-item">
            <div className="contact-icon"><Mail /></div>
            <div>
              <h3>Email</h3>
              <p>muloshimartin75@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon"><MapPin /></div>
            <div>
              <h3>Location</h3>
              <p>Zambia</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon"><Clock /></div>
            <div>
              <h3>Availability</h3>
              <p>Contact us to discuss your project.</p>
            </div>
          </div>

          <div className="contact-note">
            <MessageCircle size={22} />
            <p>
              Every successful project starts with a conversation.
            </p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send us an enquiry</h2>

          <p>
            Complete the form below with a few details about your project.
          </p>

          <form
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">
                What service do you need?
              </label>

              <select
                id="service"
                name="service"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Website Development</option>
                <option>Business Website</option>
                <option>Web Application Development</option>
                <option>Website Maintenance</option>
                <option>Other Enquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Project Details</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="button-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Enquiry"}
              <Send size={18} />
            </button>

            <p
              role="status"
              aria-live="polite"
              className={`form-status ${status.type}`}
            >
              {status.message}
            </p>

            <small>
              Your enquiry will be submitted securely through our
              form service.
            </small>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
