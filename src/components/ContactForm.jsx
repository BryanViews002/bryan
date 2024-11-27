import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields");
      setSuccessMessage(""); // Reset success message if there's an error
      return;
    }

    setError(""); // Clear any previous error
    setLoading(true); // Show loading state

    try {
      // Send form data to Formspree
      const response = await fetch("https://formspree.io/f/xpwzylpr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSuccessMessage(
          "Thank you for your message! I'll get back to you soon."
        );
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
      </form>
    </section>
  );
}

export default ContactForm;
