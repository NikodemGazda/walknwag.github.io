import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <div className="header-left">
            <img src="/imgs/logo.jpg" alt="Walk 'N' Wag Logo"/>
          </div>
          <div className="header-right">
            <h1>Walk 'N' Wag</h1>
            <h2 className="header-right-subtitle">with Klara</h2>
            <div className="header-email">
              <span>klarabudny45@email.com</span>
            </div>
          </div>
          <div className="header-nav">
            <button 
              className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => setCurrentPage('home')}
            >
              Home
            </button>
            <button 
              className={`nav-button ${currentPage === 'services' ? 'active' : ''}`}
              onClick={() => setCurrentPage('services')}
            >
              Services
            </button>
            <button 
              className={`nav-button ${currentPage === 'contact' ? 'active' : ''}`}
              onClick={() => setCurrentPage('contact')}
            >
              Contact Us
            </button>
            <button 
              className={`nav-button ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => setCurrentPage('about')}
            >
              About Us
            </button>
          </div>
        </div>
      </header>
      
      <main className="main-content">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}

// Home/Welcome Page Component
function HomePage() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Walk 'N' Wag</h1>
          <h3 className="hero-subheader">with Klara 🐕</h3>
          <p className="hero-subtitle">Dog care right around the corner</p>
          <p className="hero-description">
            We provide loving care for your furry family members while you're away, making sure they get the exercise and attention they deserve.
          </p>
          <div className="hero-image-container">
            <img src="/imgs/image.png" alt="Happy dogs" className="hero-image" />
            <button className="cta-button" onClick={() => window.scrollTo(0, document.querySelector('.services-preview').offsetTop)}>
              Explore Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Where We Walk Section */}
      <section className="walk-locations">
        <div className="container">
          <h2>Where We Walk</h2>
          <div className="locations-grid">
            <div className="location-card">
              <h3>🌳 Local Parks</h3>
              <p>Beautiful neighborhood parks with plenty of space to roam</p>
            </div>
            <div className="location-card">
              <h3>🐕‍🦺 Dog Parks</h3>
              <p>Fun, play-time, tail wags, and smiles included!</p>
            </div>
            <div className="location-card">
              <h3>🏘️ Neighborhoods</h3>
              <p>Safe, familiar streets around your home area</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview">
        <div className="container">
          <h2>What We Offer</h2>
          <p className="services-intro">
            Does your dog spend too much time alone? Are you worried they're not getting enough exercise? 
            Looking for someone you can trust with your beloved pet?
          </p>
          <div className="services-grid">
            <div className="service-card">
              <h3>🐩 Dog Walking</h3>
              <p>Regular walks tailored to your dog's needs and energy level</p>
            </div>
            <div className="service-card">
              <h3>🏠 Pet Sitting</h3>
              <p>In-home care when you're away</p>
            </div>
            <div className="service-card">
              <h3>🎾 Playtime</h3>
              <p>Interactive play sessions to keep your dog happy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources">
        <div className="container">
          <h2>Pet Care Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>🦴 Feeding and nutrition</h3>
              <p>Dog feeding schedules depend on age, breed, and activity level.</p>
              <ul>
                <li>Puppies need more frequent, smaller meals to support their rapid growth.</li>
                <li>Most adult dogs can be fed twice a day, with a focus on proper portion control to maintain a healthy weight.</li>
                <li>Read more <a href="https://www.akc.org/expert-advice/nutrition/how-often-should-dogs-eat/" target="_blank" rel="noopener noreferrer">here</a> for more info!</li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>🐾 Exercise Needs</h3>
              <p>Keeping your pup active is key to their happiness!</p>
              <ul>
                <li>Adults: 30–60 minutes of fun daily</li>
                <li>Puppies: 5 minutes per month of age</li>
                <li>Watch for signs of tiredness</li>
                <li>Tailor activities to their energy level</li>
                <li>Learn more <a href="https://www.dogster.com/ask-the-vet/how-much-exercise-does-a-puppy-need/" target="_blank" rel="noopener noreferrer">here</a>.</li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>🛁 Grooming Tips</h3>
              <p>Keep your pup looking and feeling their best with regular grooming by coat type!</p>
              <ul>
                <li>Short: Groom every 6–8 weeks, brush weekly</li>
                <li>Long: Groom every 4–6 weeks, brush daily</li>
                <li>Curly: Groom every 4–6 weeks, brush 2–3x/week</li>
                <li>Double: Groom every 6–12 weeks, brush 2–3x/week</li>
                <li>Read more <a href="https://www.protectivity.com/knowledge-centre/how-to-groom-different-dog-breeds/" target="_blank" rel="noopener noreferrer">here</a>!</li>

              </ul>
            </div>
            <div className="resource-card">
              <h3>🚨 Emergency Contacts</h3>
              <p>Got an emergency? Red Bank Veterinary Hospital are open 24/7, have AMAZING reviews, and they will take care of your furry friend right away!!!</p>
              <a href="https://www.redbankvet.com/?y_source=1_MjkzNDQyOTMtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D" target="_blank" rel="noopener noreferrer" aria-label="Redbank Veterinary Hospital website">
                <img src="/imgs/redlogo.png" alt="Redbank Vet Logo" className="contact-logo" />
              </a>
            </div>
            <div className="resource-card">
              <h3>🚨 Emergency Contacts</h3>
              <p> At Urgent Paws Veterinary Clinic, they take care of your dog really well and treat your pets not like pets but like family!!!</p>
              <a href="https://urgentpawsnj.com/" target="_blank" rel="noopener noreferrer" aria-label="Urgent Paws website">
                <img src="/imgs/urgntpws.png" alt="Urgent Paws Logo" className="contact-logo" />
              </a>
            </div>
            <div className="resource-card">
              <h3>🚨 Emergency Contacts</h3>
              <p>Or, if you see a struggling furry friend out on its own, contact animal rescue!</p>
              <a href="https://www.homefreeanimalrescue.com/" target="_blank" rel="noopener noreferrer" aria-label="Urgent Paws website">
                <img src="/imgs/homefree.jpeg" alt="Urgent Paws Logo" className="contact-logo" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Klara is amazing! My dog Max looks forward to his walks every day. I can tell he's happy and well-cared for."</p>
              <span className="reviewer">- Sarah M.</span>
            </div>
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Professional, reliable, and genuinely cares about animals. I wouldn't trust anyone else with my furry family!"</p>
              <span className="reviewer">- Mike D.</span>
            </div>
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"The peace of mind knowing my dog is in good hands is priceless. Thank you for your wonderful service!"</p>
              <span className="reviewer">- Jennifer L.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Services Page Component
function ServicesPage() {
  return (
    <div className="page">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive care for your beloved pets</p>
        </div>
      </section>

      <section className="services-detailed">
        <div className="container">
          <div className="service-detail-card">
            <h2>🚶‍♀️ Dog Walking Services</h2>
            <p>Professional dog walking tailored to your pet's needs</p>
            <div className="service-options">
              <div className="option">
                <h3>30-Minute Walk</h3>
                <p>Perfect for smaller dogs or senior pets</p>
                <span className="price">$25</span>
              </div>
              <div className="option">
                <h3>60-Minute Walk</h3>
                <p>Ideal for high-energy dogs</p>
                <span className="price">$40</span>
              </div>
            </div>
          </div>

          <div className="service-detail-card">
            <h2>🛁 Pet Bathing & Grooming</h2>
            <p>Keep your pet clean and comfortable</p>
            <div className="service-options">
              <div className="option">
                <h3>Basic Bath</h3>
                <p>Shampoo, rinse, and dry</p>
                <span className="price">$35</span>
              </div>
              <div className="option">
                <h3>Full Grooming</h3>
                <p>Bath, nail trim, ear cleaning</p>
                <span className="price">$60</span>
              </div>
            </div>
          </div>

          <div className="service-detail-card">
            <h2>🏠 Pet Sitting</h2>
            <p>In-home care when you're away</p>
            <div className="service-options">
              <div className="option">
                <h3>Daily Visits</h3>
                <p>30-minute check-ins</p>
                <span className="price">$30/visit</span>
              </div>
              <div className="option">
                <h3>Overnight Care</h3>
                <p>Full overnight supervision</p>
                <span className="price">$80/night</span>
              </div>
            </div>
          </div>

          <div className="surcharge-info">
            <h3>Additional Information</h3>
            <ul>
              <li>Weekend services: +$5 surcharge</li>
              <li>Holiday services: +$10 surcharge</li>
              <li>Multiple pets: 50% off each additional pet</li>
              <li>Emergency same-day service: +$15 surcharge</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}

// Contact Page Component
function ContactPage() {
  return (
    <div className="page">
      <section className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Ready to give your dog the care they deserve?</p>
        </div>
      </section>
      <ContactForm />
    </div>
  );
}

// About Page Component
function AboutPage() {
  return (
    <div className="page">
      <section className="about-hero">
        <div className="container">
          <h1>About Me & Ania</h1>
          <div className="about-content">
            <div className="about-text">
              <h2>Meet Klara</h2>
              <p>
                Hi there! I'm Klara, and I absolutely love spending time with dogs. Growing up, I always had furry companions, 
                and I understand the special bond between pets and their families. I started Walk 'N' Wag because I wanted to 
                help busy pet parents ensure their dogs get the love, exercise, and attention they need.
              </p>
              <p>
                With [X years] of experience in pet care, I'm committed to treating every dog as if they were my own. 
                I'm certified in pet first aid and fully insured for your peace of mind.
              </p>
              
              <h2>Meet Ania</h2>
              <p>
                Ania is my trusted partner in providing exceptional pet care. Together, we make sure your pets receive 
                the highest quality attention and care. Ania brings [her background/experience] to our team, and she 
                shares my passion for keeping pets happy and healthy.
              </p>
              
              <h2>Why Choose Us?</h2>
              <ul>
                <li>✅ Fully licensed and insured</li>
                <li>✅ Pet first aid certified</li>
                <li>✅ Flexible scheduling</li>
                <li>✅ Regular updates and photos</li>
                <li>✅ Emergency contact available</li>
                <li>✅ Customized care for each pet</li>
              </ul>
            </div>
            <div className="about-image">
              <img src="/imgs/logo.jpg" alt="Klara and Ania with dogs" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      petName: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="petName">Pet's Name</label>
            <input
              type="text"
              id="petName"
              name="petName"
              value={formData.petName}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="service">Service Interested In</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select a service</option>
              <option value="dog-walking">Dog Walking</option>
              <option value="pet-bathing">Pet Bathing</option>
              <option value="pet-sitting">Pet Sitting</option>
              <option value="playtime">Playtime</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              placeholder="Tell us about your pet and what services you're interested in..."
            ></textarea>
          </div>
          
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Information</h3>
            <p>📧 walkandwag@email.com</p>
            <p>📞 (555) 123-4567</p>
            <p>📍 Your City, State</p>
          </div>
          
          <div className="footer-section">
            <h3>General Hours</h3>
            <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
            <p>Saturday: 8:00 AM - 6:00 PM</p>
            <p>Sunday: 9:00 AM - 5:00 PM</p>
            <p><em>Emergency services available</em></p>
          </div>
          
          <div className="footer-section">
            <h3>Follow Us</h3>
            <p>🐕 Instagram: @walkandwag</p>
            <p>📘 Facebook: Walk 'N' Wag</p>
            <p>🐦 Twitter: @walkandwag</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Walk 'N' Wag. All rights reserved. Made with ❤️ for dogs and their families.</p>
        </div>
      </div>
    </footer>
  );
}

export default App;
