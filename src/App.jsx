import React, { useEffect, useState, Suspense } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";
import LazyLoad from "react-lazyload";
import Footer from "./components/Footer";

import ContactForm from "./components/ContactForm";

// Import images for gallery and portfolio
import niyi from "./assets/images/niyi.jpg";
import niyi2 from "./assets/images/niyi2.jpg";
import bryan from "./assets/images/bryan.jpg";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const galleryImages = [bryan, niyi, niyi2];

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Trigger animation once
    });
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields");
    } else {
      setError("");
      alert("Form submitted!");
    }
  };

  // Slick carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="app-container">
      {/* SEO with Helmet */}
      <Helmet>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="Bryan Joe's creative portfolio showcasing photography and video editing."
        />
        <meta
          name="keywords"
          content="portfolio, photography, video editing, creative work, Bryan Joe"
        />
        <meta property="og:title" content="Bryan Joe - Portfolio" />
        <meta
          property="og:description"
          content="Bryan Joe's creative portfolio showcasing photography and video editing."
        />
        <meta property="og:image" content={niyi2} />
        <meta property="og:url" content="https://www.bryanjoeportfolio.com" />
      </Helmet>

      {/* Header */}
      <header className="header">
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li>
              <Link to="intro" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="gallery" smooth={true} duration={500}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} duration={500}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Intro Section */}
      <section
        className="intro"
        id="intro"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2>Welcome to My Creative Portfolio</h2>
        <p>
          I'm a passionate photographer and video editor dedicated to capturing
          the beauty in every moment.
        </p>
        <p>
          My journey started with an interest in visual storytelling, and I’ve
          honed my skills over the years to bring your ideas to life through
          high-quality images and videos.
        </p>
        <p>
          Whether it’s for personal projects, events, or corporate needs, I’m
          here to make sure your story is told in the most compelling way
          possible.
        </p>
        <p>
          Feel free to browse through my portfolio, and don't hesitate to
          contact me if you'd like to collaborate or learn more about my
          creative process.
        </p>
        <p>
          I’m always open to new projects and creative challenges, so let's make
          something amazing together!
        </p>
      </section>

      {/* Gallery Section */}
      <section className="gallery" id="gallery" data-aos="fade-up">
        <h2>Gallery</h2>
        <div className="gallery-items">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <LazyLoad height={200} offset={100}>
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  onClick={() => {
                    setIsOpen(true);
                    setPhotoIndex(index);
                  }}
                />
              </LazyLoad>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio" data-aos="fade-up">
        <h2>Portfolio</h2>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Slider {...carouselSettings}>
            <div>
              <LazyLoad height={200} offset={100}>
                <img src={niyi} alt="Portfolio 1" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad height={200} offset={100}>
                <img src={niyi2} alt="Portfolio 2" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad height={200} offset={100}>
                <img src={bryan} alt="Portfolio 3" />
              </LazyLoad>
            </div>
          </Slider>
        </Suspense>
      </section>

      {/* Contact Section */}
      {/* <section className="contact" id="contact" data-aos="fade-up">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
          <button type="submit">Submit</button>
          {error && <p className="error">{error}</p>}
        </form>
      </section> */}

      <ContactForm />


      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
