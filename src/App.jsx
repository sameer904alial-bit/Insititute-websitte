import React, { useState } from "react";
import {
  ArrowRight, BookOpen, CheckCircle2, ChevronDown, Clock3, Code2,
  GraduationCap, Menu, Monitor, PlayCircle, Quote, Send, Sparkles,
  Star, Users, X, Zap
} from "lucide-react";

const courses = [
  { title: "Full Stack Web Development", tag: "Most Popular", icon: Code2, duration: "16 Weeks", students: "1,240+", level: "Beginner → Advanced", text: "Build modern websites and full-stack applications with practical projects." },
  { title: "UI/UX Design & Figma", tag: "Creative", icon: Monitor, duration: "10 Weeks", students: "680+", level: "Beginner", text: "Learn design systems, wireframes, prototypes and real-world product thinking." },
  { title: "Digital Marketing", tag: "Career", icon: Zap, duration: "8 Weeks", students: "920+", level: "Beginner", text: "Master SEO, social media, content strategy and performance marketing." },
];

const stats = [
  ["8,500+", "Students trained"],
  ["42", "Career-focused courses"],
  ["96%", "Completion rate"],
  ["4.9/5", "Student rating"],
];

function App() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="app">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Admissions open for Fall 2026</span>
          <span className="top-link" onClick={() => scrollTo("contact")}>Talk to an advisor <ArrowRight size={14}/></span>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-inner">
          <button className="brand" onClick={() => scrollTo("home")}>
            <span className="brand-mark"><GraduationCap size={22}/></span>
            <span>Bright<span>Path</span></span>
          </button>
          <nav className={open ? "nav-links mobile-open" : "nav-links"}>
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("courses")}>Programs</button>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("reviews")}>Reviews</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
            <button className="nav-cta" onClick={() => setModal(true)}>Enroll Now <ArrowRight size={16}/></button>
          </nav>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X/> : <Menu/>}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-shape shape-one"></div>
          <div className="hero-shape shape-two"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={15}/> Learn today. Lead tomorrow.</div>
              <h1>Skills that turn <span>ambition</span> into opportunity.</h1>
              <p>BrightPath Institute helps students build practical digital skills through expert-led classes, projects and career-focused learning.</p>
              <div className="hero-actions">
                <button className="primary-btn" onClick={() => scrollTo("courses")}>Explore Programs <ArrowRight size={18}/></button>
                <button className="play-btn" onClick={() => setModal(true)}><PlayCircle size={19}/> Watch overview</button>
              </div>
              <div className="trust">
                <div className="avatars"><span>SA</span><span>MK</span><span>AR</span><span>+</span></div>
                <div><strong>8,500+ learners</strong><small>already growing with us</small></div>
              </div>
            </div>
            <div className="hero-card-wrap">
              <div className="floating-note note-top"><CheckCircle2 size={18}/><div><b>Live Classes</b><small>Learn with mentors</small></div></div>
              <div className="hero-card">
                <div className="card-label">FEATURED PROGRAM</div>
                <div className="hero-course-icon"><Code2 size={28}/></div>
                <h3>Full Stack Web Development</h3>
                <p>From your first component to production-ready apps.</p>
                <div className="mini-progress"><span></span></div>
                <div className="progress-row"><span>16 week program</span><b>92% rated</b></div>
                <button onClick={() => setModal(true)}>View program <ArrowRight size={16}/></button>
              </div>
              <div className="floating-note note-bottom"><Star size={17} fill="currentColor"/><div><b>4.9 / 5</b><small>Student experience</small></div></div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container stats-grid">
            {stats.map(([n, l]) => <div className="stat" key={l}><strong>{n}</strong><span>{l}</span></div>)}
          </div>
        </section>

        <section id="courses" className="section">
          <div className="container">
            <div className="section-head">
              <div><span className="section-kicker">OUR PROGRAMS</span><h2>Learn skills employers <span>actually need.</span></h2></div>
              <p>Focused programs, supportive mentors and hands-on projects designed to move you from learning to earning.</p>
            </div>
            <div className="course-grid">
              {courses.map(({title, tag, icon: Icon, duration, students, level, text}) => (
                <article className="course-card" key={title}>
                  <div className="course-top"><span className="course-icon"><Icon size={22}/></span><span className="tag">{tag}</span></div>
                  <h3>{title}</h3><p>{text}</p>
                  <div className="course-meta"><span><Clock3 size={15}/> {duration}</span><span><Users size={15}/> {students}</span></div>
                  <div className="course-bottom"><span>{level}</span><button onClick={() => setModal(true)}>Details <ArrowRight size={15}/></button></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="visual-main"><div className="visual-badge"><GraduationCap size={18}/> Since 2019</div><div className="visual-copy"><span>LEARNING</span><b>WITH PURPOSE</b></div></div>
              <div className="visual-small"><BookOpen size={25}/><b>Project-based</b><span>learning</span></div>
            </div>
            <div className="about-copy">
              <span className="section-kicker">WHY BRIGHTPATH</span>
              <h2>Education should feel <span>practical.</span></h2>
              <p>We combine structured learning with real-world practice so students don't just collect certificates — they build confidence and portfolios.</p>
              <ul>
                <li><CheckCircle2/> Industry-aligned curriculum updated regularly</li>
                <li><CheckCircle2/> Mentors who teach from real project experience</li>
                <li><CheckCircle2/> Portfolio projects and career preparation</li>
                <li><CheckCircle2/> Flexible weekday and weekend batches</li>
              </ul>
              <button className="outline-btn" onClick={() => scrollTo("contact")}>Meet our team <ArrowRight size={17}/></button>
            </div>
          </div>
        </section>

        <section id="reviews" className="section testimonials">
          <div className="container">
            <div className="center-head"><span className="section-kicker">STUDENT STORIES</span><h2>Learners who <span>moved forward.</span></h2><p>Real growth starts with a decision to learn.</p></div>
            <div className="testimonial-grid">
              {[
                ["Ayesha Khan", "Frontend Developer", "“The projects changed everything for me. I finally understood how to build things instead of only watching tutorials.”"],
                ["Hamza Raza", "Digital Marketer", "“The mentors were patient and practical. I launched my first campaign before I even finished the program.”"],
                ["Maham Ali", "UI/UX Designer", "“BrightPath gave me the confidence and portfolio I needed to apply for design roles.”"]
              ].map(([name, role, quote]) => (
                <article className="testimonial" key={name}><Quote className="quote" size={28}/><p>{quote}</p><div className="person"><div>{name.split(" ").map(x=>x[0]).join("")}</div><span><b>{name}</b><small>{role}</small></span></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container cta-inner">
            <div><span className="section-kicker">YOUR NEXT STEP</span><h2>Ready to build your <span>future?</span></h2><p>Join a learning community that keeps you moving.</p></div>
            <button className="light-btn" onClick={() => setModal(true)}>Start your journey <ArrowRight size={18}/></button>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="container contact-grid">
            <div><span className="section-kicker">CONTACT US</span><h2>Let's talk about <span>your goals.</span></h2><p>Have a question about a program or batch? Send us a message and our admissions team will get back to you.</p></div>
            <form onSubmit={(e)=>{e.preventDefault(); alert("Thanks! Our admissions team will contact you soon.");}}>
              <div className="form-row"><input placeholder="Your name" required/><input type="email" placeholder="Email address" required/></div>
              <select defaultValue=""><option value="" disabled>Choose a program</option><option>Full Stack Web Development</option><option>UI/UX Design & Figma</option><option>Digital Marketing</option></select>
              <textarea placeholder="Tell us what you want to learn..." rows="4"></textarea>
              <button className="primary-btn" type="submit">Send message <Send size={17}/></button>
            </form>
          </div>
        </section>
      </main>

      <footer><div className="container footer-inner"><div className="brand footer-brand"><span className="brand-mark"><GraduationCap size={22}/></span><span>Bright<span>Path</span></span></div><p>Practical education for ambitious people.</p><span>© 2026 BrightPath Institute</span></div></footer>

      {modal && <div className="modal-backdrop" onClick={() => setModal(false)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setModal(false)}><X/></button><span className="section-kicker">START LEARNING</span><h2>Choose your <span>next step.</span></h2><p>Leave your details and our admissions team will contact you about the right program.</p><input placeholder="Full name"/><input placeholder="Phone / WhatsApp"/><button className="primary-btn" onClick={()=>{setModal(false); alert("Application received!");}}>Request a callback <ArrowRight size={17}/></button></div></div>}
    </div>
  );
}

export default App;