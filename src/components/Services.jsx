const Services = () => {
  return (
    <section id="services">
      <div className="section-container">
        <div className="section-header" data-aos="fade-up">
          <h2>SERVICES</h2>
          <p>What I offer to help bring your ideas to life</p>
        </div>

        <div className="services-grid">
          {[
            { icon: "fa-code", title: "Web Development", desc: "Building responsive and performant websites using modern frameworks. Clean code, best practices, and attention to detail in every project." },
            { icon: "fa-palette", title: "UI/UX Design", desc: "Creating intuitive interfaces that users love. Every design decision is made with user experience and accessibility in mind." },
            { icon: "fa-mobile-alt", title: "Mobile Development", desc: "Cross-platform mobile applications that deliver seamless experiences across all devices with native performance." },
            { icon: "fa-search", title: "SEO Optimization", desc: "Improving your website's visibility in search engines through technical optimization and best practices." },
            { icon: "fa-chart-line", title: "Performance Optimization", desc: "Making your applications faster and more efficient through code optimization and modern techniques." },
            { icon: "fa-headset", title: "Consultation", desc: "Expert advice on technology choices, architecture decisions, and best practices for your projects." }
          ].map((service, index) => (
            <div
              className="service-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <i className={`fas ${service.icon} service-icon`}></i>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;