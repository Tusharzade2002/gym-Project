import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, ChevronLeft, ChevronRight, Dumbbell,
  Expand, Instagram, Menu, Play, Plus, ShieldCheck, Sparkles, Timer, Trophy, X, Zap
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const programs = [
  { number: '01', title: 'Strength & conditioning', detail: 'Build real-world strength with smart, progressive programming.', tag: 'GET STRONG', image: 'photo-1583454110551-21f2fa2afe61' },
  { number: '02', title: 'Personal training', detail: 'A coach in your corner. A plan built around your goals.', tag: 'YOUR PLAN', image: 'photo-1534438327276-14e5300c3a48' },
  { number: '03', title: 'Athletic performance', detail: 'Move faster, recover better, and perform at your peak.', tag: 'LEVEL UP', image: 'photo-1517836357463-d25dfeac3438' },
]

const plans = [
  { name: 'STARTER', price: '₹1,499', period: '/ month', description: 'Your first step toward a stronger you.', features: ['Full gym access', 'Personal fitness assessment', 'Locker room access'], featured: false },
  { name: 'UNLIMITED', price: '₹2,499', period: '/ month', description: 'For people who are all in.', features: ['Everything in Starter', 'Unlimited group classes', 'Monthly coach check-in', 'Guest pass every month'], featured: true },
  { name: 'ELITE', price: '₹4,999', period: '/ month', description: 'The complete high-performance experience.', features: ['Everything in Unlimited', '2 personal training sessions', 'Nutrition guidance', 'Priority class booking'], featured: false },
]

const gallery = [
  { image: 'photo-1534438327276-14e5300c3a48', title: 'The main floor', category: 'FACILITY', size: 'wide' },
  { image: 'photo-1581009146145-b5ef050c2e1e', title: 'Heavy days', category: 'TRAINING', size: 'tall' },
  { image: 'photo-1540497077202-7c8a3999166f', title: 'Built for the work', category: 'FACILITY' },
  { image: 'photo-1571019613454-1cb2f99b2d8b', title: 'Strong, every rep', category: 'TRAINING' },
  { image: 'photo-1518611012118-696072aa579a', title: 'Group sessions', category: 'CLASSES', size: 'tall' },
  { image: 'photo-1526506118085-60ce8714f8c5', title: 'Free weights zone', category: 'FACILITY' },
  { image: 'photo-1599058917212-d750089bc07e', title: 'Conditioning', category: 'CLASSES', size: 'wide' },
  { image: 'photo-1517836357463-d25dfeac3438', title: 'Athletic performance', category: 'TRAINING' },
  { image: 'photo-1571902943202-507ec2618e8f', title: 'Equipment that delivers', category: 'FACILITY' },
  { image: 'photo-1583454110551-21f2fa2afe61', title: 'Coach in your corner', category: 'TRAINING', size: 'wide' },
]
const galleryFilters = ['ALL', 'FACILITY', 'TRAINING', 'CLASSES']
const unsplash = (id, w) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('UNLIMITED')
  const [submitted, setSubmitted] = useState(false)
  const [faqOpen, setFaqOpen] = useState(0)
  const [galleryFilter, setGalleryFilter] = useState('ALL')
  const [lightbox, setLightbox] = useState(-1)

  const galleryItems = galleryFilter === 'ALL' ? gallery : gallery.filter(g => g.category === galleryFilter)
  const stepLightbox = (dir) => setLightbox(i => (i + dir + galleryItems.length) % galleryItems.length)

  useEffect(() => {
    if (lightbox < 0) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(-1)
      if (e.key === 'ArrowRight') stepLightbox(1)
      if (e.key === 'ArrowLeft') stepLightbox(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, galleryItems.length])

  const openJoin = (plan = 'UNLIMITED') => {
    setSelectedPlan(plan)
    setSubmitted(false)
    setModalOpen(true)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="announcement-dot" />
        <span>YOUR NEXT CHAPTER STARTS HERE</span>
        <a href="#plans">Explore memberships <ArrowRight size={13} /></a>
      </div>

      <header className="header">
        <a className="brand" href="#home" aria-label="Ironforge home" onClick={closeMenu}>
          <span className="brand-mark"><Dumbbell size={21} strokeWidth={2.5} /></span>
          <span>IRON<span className="brand-light">FORGE</span><small>FITNESS CLUB</small></span>
        </a>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#programs" onClick={closeMenu}>Programs</a>
          <a href="#story" onClick={closeMenu}>Our mindset</a>
          <a href="#coaches" onClick={closeMenu}>Coaches</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#plans" onClick={closeMenu}>Membership</a>
          <button className="mobile-join" onClick={() => { closeMenu(); openJoin() }}>Start your journey <ArrowUpRight size={16}/></button>
        </nav>
        <button className="header-cta" onClick={() => openJoin()}>Join the club <ArrowUpRight size={16} /></button>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" />
          <div className="hero-vignette" />
          <div className="hero-grid" />
          <div className="hero-content">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="eyebrow"><span className="eyebrow-line" /> NO SHORTCUTS. JUST WORK.</motion.div>
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: .08 }}>
              BUILT<br />BY <span className="outline-text">DISCIPLINE.</span>
            </motion.h1>
            <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: .16 }} className="hero-copy">
              More than a gym. A place to get uncomfortable, find your edge, and become the strongest version of you.
            </motion.p>
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: .24 }} className="hero-actions">
              <button className="btn-primary" onClick={() => openJoin()}>Start your journey <ArrowUpRight size={18} /></button>
              <a href="#programs" className="btn-play"><span><Play size={15} fill="currentColor" /></span> Explore the gym</a>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: .32 }} className="hero-proof">
              <div className="avatar-stack">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377ade?w=80&h=80&fit=crop&crop=faces" alt="Member" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces" alt="Member" />
                <img src="https://images.unsplash.com/photo-1534522341539-4d4c6e3f7f3a?w=80&h=80&fit=crop&crop=faces" alt="" onError={(e) => { e.currentTarget.style.display='none' }} />
              </div>
              <div><strong>1,200+</strong><span>members showing up</span></div>
              <span className="proof-divider" />
              <div className="proof-rating"><span>★★★★★</span><small>4.9/5 member rating</small></div>
            </motion.div>
          </div>
          <div className="hero-side-note"><span>EST. 2018</span><i /> <span>BUILT DIFFERENT</span></div>
          <a className="scroll-cue" href="#story"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16} /></a>
          <div className="hero-index"><span>01</span><i /> 05</div>
        </section>

        <section className="ticker" aria-label="Gym values">
          <div className="ticker-track">
            {Array.from({ length: 2 }).map((_, idx) => <div className="ticker-set" key={idx}>
              <span>STRENGTH</span><Sparkles size={17}/><span>DISCIPLINE</span><Sparkles size={17}/><span>COMMUNITY</span><Sparkles size={17}/><span>PROGRESS</span><Sparkles size={17}/>
            </div>)}
          </div>
        </section>

        <section className="section intro-section" id="story">
          <div className="section-kicker"><span>01 / THE MINDSET</span><span>BUILT FOR THE LONG GAME</span></div>
          <div className="intro-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }} variants={fadeUp}>
              <h2>YOU DON'T NEED<br />MOTIVATION.<br /><span className="green-text">YOU NEED A STANDARD.</span></h2>
            </motion.div>
            <motion.div className="intro-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }} variants={fadeUp}>
              <p className="large-copy">The best version of you isn't found. It's built — one rep, one choice, one day at a time.</p>
              <p>At IRONFORGE, we believe fitness should make your whole life stronger. No ego. No judgement. Just expert coaching, serious equipment, and a community that keeps you accountable.</p>
              <a className="text-link" href="#programs">Discover our approach <ArrowUpRight size={17}/></a>
            </motion.div>
          </div>
          <div className="stats-row">
            <div className="stat"><strong>1,200<span>+</span></strong><small>ACTIVE MEMBERS</small></div>
            <div className="stat"><strong>24<span>/7</span></strong><small>COMMITMENT MINDSET</small></div>
            <div className="stat"><strong>18</strong><small>EXPERT COACHES</small></div>
            <div className="stat"><strong>4.9<span>/5</span></strong><small>MEMBER RATING</small></div>
          </div>
        </section>

        <section className="section programs-section" id="programs">
          <div className="section-heading">
            <div><div className="section-kicker"><span>02 / FIND YOUR FOCUS</span></div><h2>TRAIN WITH<br /><span className="green-text">INTENTION.</span></h2></div>
            <p>Different goals. One standard. Find the training style that gets you moving — and keeps you coming back.</p>
          </div>
          <div className="program-grid">
            {programs.map((p, i) => <motion.article className="program-card" key={p.number} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={fadeUp} transition={{ delay: i * .1 }}>
              <div className="program-photo" style={{ backgroundImage: `url(https://images.unsplash.com/${p.image}?auto=format&fit=crop&w=900&q=85)` }} />
              <div className="program-shade" />
              <div className="program-top"><span>{p.number} / PROGRAM</span><ArrowUpRight size={19}/></div>
              <div className="program-bottom"><span className="program-tag">{p.tag}</span><h3>{p.title}</h3><p>{p.detail}</p><a href="#plans">Explore program <ArrowRight size={15}/></a></div>
            </motion.article>)}
          </div>
        </section>

        <section className="feature-band" id="coaches">
          <div className="feature-image" />
          <div className="feature-content">
            <div className="section-kicker"><span>03 / YOUR PEOPLE</span></div>
            <h2>GOOD COACHES.<br /><span className="green-text">GREAT ENERGY.</span></h2>
            <p>Our coaches don't just count reps. They help you move better, build confidence, and create habits that stick long after your workout ends.</p>
            <div className="feature-points">
              <div><span className="feature-icon"><ShieldCheck size={19}/></span><div><strong>Coaching that gets you</strong><small>Personal attention, zero intimidation.</small></div></div>
              <div><span className="feature-icon"><Trophy size={19}/></span><div><strong>Progress you can measure</strong><small>Clear goals. Smart programming. Real results.</small></div></div>
              <div><span className="feature-icon"><Zap size={19}/></span><div><strong>Energy that pulls you in</strong><small>A community that celebrates every win.</small></div></div>
            </div>
            <button className="btn-primary" onClick={() => openJoin()}>Meet your new crew <ArrowUpRight size={18}/></button>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="section-heading">
            <div><div className="section-kicker"><span>04 / INSIDE THE FORGE</span></div><h2>SEE WHERE<br /><span className="green-text">THE WORK HAPPENS.</span></h2></div>
            <p>Serious equipment, open space, and people who show up. Take a look around before your first visit.</p>
          </div>
          <div className="gallery-filters" role="tablist" aria-label="Filter gallery">
            {galleryFilters.map(f => <button key={f} role="tab" aria-selected={galleryFilter === f} className={galleryFilter === f ? 'filter-active' : ''} onClick={() => setGalleryFilter(f)}>{f}</button>)}
          </div>
          <div className="gallery-grid">
            {galleryItems.map((g, i) => <motion.button layout key={g.image} className={`gallery-item ${g.size ? `gallery-${g.size}` : ''}`} onClick={() => setLightbox(i)} aria-label={`Open image: ${g.title}`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} variants={fadeUp}>
              <img src={unsplash(g.image, 900)} alt={g.title} loading="lazy" />
              <span className="gallery-shade" />
              <span className="gallery-caption"><small>{g.category}</small><strong>{g.title}</strong></span>
              <span className="gallery-zoom"><Expand size={16} /></span>
            </motion.button>)}
          </div>
        </section>

        <section className="section plans-section" id="plans">
          <div className="section-heading">
            <div><div className="section-kicker"><span>05 / MAKE IT OFFICIAL</span></div><h2>INVEST IN<br /><span className="green-text">YOURSELF.</span></h2></div>
            <p>No confusing contracts. No pressure. Just a membership that meets you where you are — and helps you go further.</p>
          </div>
          <div className="plans-grid">
            {plans.map((plan, i) => <motion.article key={plan.name} className={`plan-card ${plan.featured ? 'plan-featured' : ''}`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={fadeUp} transition={{ delay: i * .08 }}>
              {plan.featured && <div className="popular-label"><Sparkles size={13}/> MOST POPULAR</div>}
              <div className="plan-name">{plan.name}</div><p className="plan-desc">{plan.description}</p>
              <div className="plan-price">{plan.price}<span>{plan.period}</span></div>
              <div className="plan-rule" />
              <ul>{plan.features.map(f => <li key={f}><Check size={16}/>{f}</li>)}</ul>
              <button className={plan.featured ? 'btn-primary plan-btn' : 'btn-outline plan-btn'} onClick={() => openJoin(plan.name)}>Choose {plan.name.toLowerCase()} <ArrowUpRight size={16}/></button>
            </motion.article>)}
          </div>
          <p className="plan-note"><ShieldCheck size={15}/> No joining fee this month. Cancel anytime with 30 days' notice.</p>
        </section>

        <section className="quote-section">
          <div className="quote-mark">“</div>
          <motion.blockquote initial="hidden" whileInView="visible" viewport={{ once: true, amount: .4 }} variants={fadeUp}>
            I came here to get stronger.<br />I stayed because <span className="green-text">I found my people.</span>
          </motion.blockquote>
          <div className="quote-author"><div className="quote-avatar">AM</div><div><strong>Alex M.</strong><small>IRONFORGE MEMBER · 2 YEARS</small></div><div className="quote-stars">★★★★★</div></div>
        </section>

        <section className="faq-section section">
          <div className="faq-intro"><div className="section-kicker"><span>GOOD TO KNOW</span></div><h2>QUESTIONS?<br /><span className="green-text">WE GOT YOU.</span></h2><p>First gym? First time in a while? You're in the right place.</p><a className="text-link" href="mailto:hello@ironforge.example">Talk to our team <ArrowUpRight size={17}/></a></div>
          <div className="faq-list">
            {[
              ['I am a beginner. Is this gym for me?', 'Absolutely. We meet you where you are. Your first visit includes an introduction to the space and equipment, and our coaches can help you create a comfortable starting plan.'],
              ['Can I try the gym before joining?', 'Yes! Book a free introductory visit and we will show you around, learn about your goals, and help you choose the right membership.'],
              ['What should I bring for my first workout?', 'Comfortable workout clothes, training shoes, a water bottle, and a little curiosity. We will take care of the rest.'],
              ['Are personal training sessions available?', 'Yes. Our coaches offer one-to-one sessions and can help with strength, conditioning, movement, and accountability.']
            ].map(([q, a], i) => <div className={`faq-item ${faqOpen === i ? 'faq-active' : ''}`} key={q}>
              <button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} aria-expanded={faqOpen === i}><span>{q}</span><Plus size={18}/></button>
              {faqOpen === i && <p>{a}</p>}
            </div>)}
          </div>
        </section>

        <section className="final-cta">
          <div className="final-cta-bg" />
          <div className="final-cta-content"><div className="section-kicker"><span>YOUR MOVE</span></div><h2>YOUR EXCUSES<br />CAN'T LIFT <span className="green-text">FOR YOU.</span></h2><p>The hardest part is walking through the door. We'll take it from there.</p><button className="btn-primary" onClick={() => openJoin()}>Let's get to work <ArrowUpRight size={18}/></button></div>
          <div className="cta-stamp"><Dumbbell size={26}/><span>SHOW UP.<br/>GET STRONGER.</span></div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <a className="brand" href="#home"><span className="brand-mark"><Dumbbell size={21} strokeWidth={2.5}/></span><span>IRON<span className="brand-light">FORGE</span><small>FITNESS CLUB</small></span></a>
          <p>Built by discipline.<br/>Made stronger together.</p>
          <div className="footer-links"><a href="#programs">Programs</a><a href="#plans">Membership</a><a href="#coaches">Coaches</a><a href="#gallery">Gallery</a><a href="mailto:hello@ironforge.example">Contact</a></div>
          <a className="social-link" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18}/></a>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} IRONFORGE FITNESS CLUB</span><span>MADE FOR THE WORK.</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>

      {lightbox >= 0 && galleryItems[lightbox] && <div className="lightbox" role="dialog" aria-modal="true" aria-label={galleryItems[lightbox].title} onMouseDown={(e) => { if (e.target === e.currentTarget) setLightbox(-1) }}>
        <button className="lightbox-close" aria-label="Close gallery" onClick={() => setLightbox(-1)}><X size={20}/></button>
        <button className="lightbox-nav lightbox-prev" aria-label="Previous image" onClick={() => stepLightbox(-1)}><ChevronLeft size={22}/></button>
        <motion.figure key={galleryItems[lightbox].image} initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }}>
          <img src={unsplash(galleryItems[lightbox].image, 1800)} alt={galleryItems[lightbox].title} />
          <figcaption><span><small>{galleryItems[lightbox].category}</small><strong>{galleryItems[lightbox].title}</strong></span><span className="lightbox-count">{String(lightbox + 1).padStart(2, '0')} / {String(galleryItems.length).padStart(2, '0')}</span></figcaption>
        </motion.figure>
        <button className="lightbox-nav lightbox-next" aria-label="Next image" onClick={() => stepLightbox(1)}><ChevronRight size={22}/></button>
      </div>}

      {modalOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setModalOpen(false) }}>
        <motion.div className="join-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" initial={{ opacity: 0, y: 18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }}>
          <button className="modal-close" aria-label="Close dialog" onClick={() => setModalOpen(false)}><X size={20}/></button>
          {!submitted ? <>
            <div className="section-kicker"><span>TAKE THE FIRST STEP</span></div>
            <h2 id="modal-title">LET'S GET<br/><span className="green-text">STRONGER.</span></h2>
            <p className="modal-intro">Tell us a little about yourself. Our team will reach out to arrange your free intro visit.</p>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
              <label>YOUR NAME<input required name="name" placeholder="e.g. Rahul Sharma" /></label>
              <label>EMAIL ADDRESS<input required name="email" type="email" placeholder="you@example.com" /></label>
              <label>PHONE NUMBER<input required name="phone" type="tel" placeholder="+91 98765 43210" /></label>
              <label>MEMBERSHIP INTEREST<select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}>{plans.map(p => <option key={p.name} value={p.name}>{p.name} — {p.price}/month</option>)}</select><ChevronDown className="select-chevron" size={16}/></label>
              <button className="btn-primary modal-submit" type="submit">Request a free visit <ArrowUpRight size={17}/></button>
              <small className="form-privacy">Demo form only — connect it to your backend or form service to receive enquiries.</small>
            </form>
          </> : <div className="success-state"><div className="success-icon"><Check size={28}/></div><h2>YOU'RE<br/><span className="green-text">IN MOTION.</span></h2><p>Thanks for your interest in IRONFORGE! This demo form doesn't send data yet, but your UI flow is working perfectly.</p><button className="btn-primary" onClick={() => setModalOpen(false)}>Back to the grind <ArrowRight size={17}/></button></div>}
        </motion.div>
      </div>}
    </div>
  )
}

export default App
