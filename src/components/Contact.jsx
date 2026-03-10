import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_f35ohks",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          alert("Thank you! Your message has been sent.");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("Oops! Something went wrong, please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact">
      <div className="section-container">
        <div className="contact-container">

          <div className="section-header" data-aos="fade-up">
            <h2>Get In Touch</h2>
            <p>Let's work together on your next project</p>
          </div>

          <form
            className="contact-form"
            ref={formRef}
            onSubmit={handleSubmit}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="form-group" data-aos="fade-up" data-aos-delay="100">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="user_name" required />
            </div>

            <div className="form-group" data-aos="fade-up" data-aos-delay="200">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="user_email" required />
            </div>

            <div className="form-group" data-aos="fade-up" data-aos-delay="300">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group" data-aos="fade-up" data-aos-delay="300">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>

            <button
              type="submit"
              className="btn-primary"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;