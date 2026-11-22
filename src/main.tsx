import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  MoveUpRight,
  Play,
  Quote,
  X,
} from 'lucide-react'
import './styles.css'

const focusAreas = [
  { number: '01', title: 'Community & wellbeing', copy: 'Editable focus area placeholder — confirm the Foundation’s programme focus and language.', accent: 'green' },
  { number: '02', title: 'Learning & opportunity', copy: 'Editable focus area placeholder — add the confirmed workstream, audience and location here.', accent: 'yellow' },
  { number: '03', title: 'Culture & identity', copy: 'Editable focus area placeholder — describe the cultural work only once it is confirmed.', accent: 'red' },
  { number: '04', title: 'Sustainable futures', copy: 'Editable focus area placeholder — replace with verified environmental or development priorities.', accent: 'black' },
]

const projects = [
  { tag: 'Project placeholder', title: 'A place for the work to take shape', copy: 'A flexible project card ready for a confirmed initiative, story and call to action.', image: '/images/farming.jpg' },
  { tag: 'Project placeholder', title: 'Rooted in people, open to possibility', copy: 'Use this space for a verified project description, location and the people it serves.', image: '/images/professionals.jpg' },
  { tag: 'Project placeholder', title: 'Learning from the living landscape', copy: 'Add a confirmed project here with a clear, honest invitation to learn more.', image: '/images/farm.jpg' },
]

const gallery = [
  { src: '/images/community.jpg', alt: 'Community members gathered together', size: 'wide' },
  { src: '/images/culture.jpg', alt: 'People wearing colourful African clothing', size: 'tall' },
  { src: '/images/landscape.jpg', alt: 'African landscape at golden hour', size: 'standard' },
  { src: '/images/farming.jpg', alt: 'A person working in a cultivated field', size: 'standard' },
  { src: '/images/community-portrait.jpg', alt: 'Community members sharing a moment', size: 'wide' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="topline"><span>Think Africa.</span><span>Feel Africa.</span><span>Know Africa.</span></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Da Kraal Foundation home" onClick={closeMenu}>
          <img src="/images/da-kraal-logo.jpeg" alt="Da Kraal Foundation logo" />
          <span className="brand-name">Da Kraal<br /><em>Foundation</em></span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}<span className="sr-only">Toggle navigation</span>
        </button>
        <nav id="primary-nav" className={menuOpen ? 'primary-nav open' : 'primary-nav'} aria-label="Primary navigation">
          <a href="#top" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#work" onClick={closeMenu}>Our Work</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#involved" onClick={closeMenu}>Get Involved</a>
          <a href="#contact" onClick={closeMenu}>Contact Us</a>
          <a className="button button-red nav-donate" href="#donate" onClick={closeMenu}>Donate <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> A foundation with an African point of view</p>
            <h1>Building a Better Future, <span>Rooted in African Values.</span></h1>
            <p className="hero-intro">Da Kraal Foundation is a space for purposeful work, shared knowledge and the people who make a more hopeful future possible.</p>
            <div className="hero-actions"><a className="button button-green" href="#about">Discover Our Mission <ArrowUpRight size={17} /></a><a className="text-link" href="#involved">Get involved <MoveUpRight size={17} /></a></div>
            <div className="hero-note"><span className="dot-pulse" /> <strong>Placeholder-led by design.</strong> Confirmed programme details will live here as the Foundation grows its story.</div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap"><img src="/images/community.jpg" alt="African community members gathered together" /><div className="hero-image-shade" /></div>
            <div className="hero-badge"><span>01</span><span>People<br />first</span></div>
            <div className="hero-stamp"><span>DK</span><small>AFRICA<br />IN MOTION</small></div>
          </div>
        </section>

        <section className="marquee-band" aria-label="Foundation tagline"><div className="marquee-track"><span>Think Africa</span><b>✦</b><span>Feel Africa</span><b>✦</b><span>Know Africa</span><b>✦</b><span>Think Africa</span><b>✦</b><span>Feel Africa</span><b>✦</b><span>Know Africa</span></div></section>

        <section className="about section-pad" id="about">
          <div className="section-kicker"><span>01 / The foundation</span><span className="kicker-rule" /></div>
          <div className="about-grid">
            <div className="about-heading"><p className="eyebrow">A wider view. A deeper connection.</p><h2>Where African values become <em>forward motion.</em></h2></div>
            <div className="about-copy"><p className="lead">Da Kraal Foundation creates room for meaningful work that is connected to people, place and possibility.</p><p className="muted">This introduction is editable placeholder copy. Replace it with the Foundation’s approved description, history and the communities or contexts it serves when those details are confirmed.</p><a className="text-link dark" href="#work">Read about our approach <MoveUpRight size={17} /></a></div>
          </div>
          <div className="about-feature"><div className="about-image"><img src="/images/culture.jpg" alt="A vibrant African cultural gathering" /><div className="image-caption">Culture is not a backdrop.<br /><strong>It is the starting point.</strong></div></div><div className="principles"><article><div className="principle-icon green-icon"><Check size={20} /></div><h3>Our mission</h3><p>Editable placeholder — add the Foundation’s approved mission statement here.</p></article><article><div className="principle-icon yellow-icon"><ChevronDown size={20} /></div><h3>Our vision</h3><p>Editable placeholder — add the Foundation’s approved vision statement here.</p></article><div className="principles-foot"><span>Built with care</span><span>Designed for impact</span></div></div></div>
        </section>

        <section className="focus section-pad" id="work">
          <div className="section-kicker light"><span>02 / Our work</span><span className="kicker-rule" /></div>
          <div className="focus-heading"><div><p className="eyebrow light-text">The work is the invitation</p><h2>Four ways to <em>make space</em> for a better future.</h2></div><p className="focus-summary">Focus areas are shown as editable placeholders until the Foundation confirms its programmes. The structure is ready for honest, specific stories.</p></div>
          <div className="focus-grid">{focusAreas.map((area) => <article className={`focus-card ${area.accent}`} key={area.number}><span className="card-number">{area.number}</span><div className="focus-card-bottom"><h3>{area.title}</h3><p>{area.copy}</p><a href="#contact" aria-label={`Confirm details for ${area.title}`}>Shape this story <MoveUpRight size={16} /></a></div></article>)}</div>
        </section>

        <section className="impact section-pad"><div className="impact-visual"><img src="/images/landscape.jpg" alt="Sunset across an African landscape" /><div className="impact-quote"><Quote size={30} /><p>Impact is not only a number. It is a new possibility someone can feel.</p></div></div><div className="impact-copy"><div className="section-kicker"><span>03 / Our impact</span><span className="kicker-rule" /></div><p className="eyebrow">Measure what matters</p><h2>Tell the story. <em>Leave room for truth.</em></h2><p className="muted">The impact story belongs to the people, places and partnerships behind the work. This section intentionally avoids invented statistics or achievements and is ready for verified outcomes, voices and evidence.</p><div className="impact-points"><div><strong>01</strong><span>Listen first</span></div><div><strong>02</strong><span>Act with care</span></div><div><strong>03</strong><span>Learn in public</span></div></div><a className="button button-black" href="#projects">Explore the work <ArrowUpRight size={17} /></a></div></section>

        <section className="projects section-pad" id="projects"><div className="section-kicker"><span>04 / Featured projects</span><span className="kicker-rule" /></div><div className="projects-head"><h2>Stories waiting<br /><em>to be told.</em></h2><p>Three editable project spaces for the Foundation’s confirmed initiatives. Give every story a clear purpose, a human voice and a next step.</p></div><div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><div className="project-image"><img src={project.image} alt="" /><span>0{index + 1}</span></div><div className="project-content"><p className="card-label">{project.tag}</p><h3>{project.title}</h3><p>{project.copy}</p><a href="#contact" className="text-link dark">Learn more <MoveUpRight size={16} /></a></div></article>)}</div></section>

        <section className="involved section-pad" id="involved"><div className="involved-intro"><div className="section-kicker light"><span>05 / Get involved</span><span className="kicker-rule" /></div><p className="eyebrow light-text">There is a place for you here</p><h2>Bring your <em>energy</em><br />to the work.</h2><p>Whether you give time, ideas, resources or a listening ear, meaningful change begins with showing up.</p></div><div className="involved-options"><a href="#contact" className="involved-option"><span>01</span><div><h3>Volunteer</h3><p>Add the confirmed volunteer pathway here.</p></div><ArrowUpRight /></a><a href="#contact" className="involved-option"><span>02</span><div><h3>Partner</h3><p>Add the confirmed partnership pathway here.</p></div><ArrowUpRight /></a><a href="#donate" className="involved-option"><span>03</span><div><h3>Donate</h3><p>Add the confirmed donation pathway here.</p></div><ArrowUpRight /></a></div></section>

        <section className="gallery section-pad"><div className="gallery-head"><div><div className="section-kicker"><span>06 / The gallery</span><span className="kicker-rule" /></div><h2>Africa, <em>in full colour.</em></h2></div><p>Photography is used here to set a tone and celebrate people, culture and place. It does not imply Foundation ownership or project attribution.</p></div><div className="gallery-grid">{gallery.map((item, index) => <figure className={`gallery-item ${item.size}`} key={item.src}><img src={item.src} alt={item.alt} loading="lazy" /><figcaption>0{index + 1}</figcaption></figure>)}</div></section>

        <section className="partnership section-pad" id="donate"><div className="partnership-pattern" /><div className="partnership-copy"><p className="eyebrow">For people, teams and organisations</p><h2>Let’s build the next chapter <em>together.</em></h2><p>Partnership details are currently a placeholder. Use this space for a clear, confirmed invitation to collaborate, fund or support the Foundation’s work.</p><div className="hero-actions"><a className="button button-red" href="#contact">Start a conversation <ArrowUpRight size={17} /></a><a className="text-link dark" href="#contact">Contact the Foundation <MoveUpRight size={17} /></a></div></div><div className="partnership-mark"><span>DK</span><small>WITH<br />PURPOSE</small></div></section>
      </main>

      <footer className="site-footer" id="contact"><div className="footer-main"><div className="footer-brand"><a className="brand" href="#top"><img src="/images/da-kraal-logo.jpeg" alt="Da Kraal Foundation logo" /><span className="brand-name">Da Kraal<br /><em>Foundation</em></span></a><p>Think Africa. Feel Africa. Know Africa.</p></div><div className="footer-col"><h3>Explore</h3><a href="#about">About Us</a><a href="#work">Our Work</a><a href="#projects">Projects</a><a href="#involved">Get Involved</a></div><div className="footer-col"><h3>Connect</h3><a href="#contact">Contact Us</a><a href="#donate">Donate</a><span className="placeholder">[Email placeholder]</span><span className="placeholder">[Location placeholder]</span></div><div className="footer-social"><h3>Follow along</h3><div className="socials"><a href="#contact" aria-label="Facebook placeholder"><span className="social-letter">f</span></a><a href="#contact" aria-label="Instagram placeholder"><span className="social-letter">◎</span></a><a href="#contact" aria-label="LinkedIn placeholder"><span className="social-letter">in</span></a></div><span className="placeholder">Social links to be confirmed</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Da Kraal Foundation</span><span>Website content placeholders are marked for confirmation.</span><a href="#top">Back to top ↑</a></div></footer>
    </div>
  )
}

export default App
