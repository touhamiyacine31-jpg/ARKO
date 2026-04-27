const { useState, useEffect, useRef } = React;

// ─── Data ───────────────────────────────────────────────────────────────────
const PACKAGES = [
  {
    id: 'spark', tier: 'Spark', price: '$149', raw: 149,
    target: 'Trades, solopreneurs',
    desc: '5-page glass-UI site built in 5 days. Everything you need to go live.',
    features: ['5-page website', 'Mobile-first design', '2 years hosting included', 'SSL certificate', 'Contact form', '5-day delivery'],
  },
  {
    id: 'pro', tier: 'Pro', price: '$299', raw: 299,
    target: 'SMBs, restaurants, clinics',
    desc: 'Full custom site with CMS so you can update content yourself.',
    features: ['Up to 10 pages', 'Custom design system', 'CMS integration', 'SEO setup', 'Advanced animations', '1 year support'],
    featured: true,
  },
  {
    id: 'premium', tier: 'Premium', price: '$800', raw: 800,
    target: 'Boutique brands, real estate',
    desc: 'Full brand identity + motion design + integrations.',
    features: ['Full brand identity', 'Custom illustrations', 'Advanced motion', 'Booking / payments / CRM', '6-month optimization', 'Priority support'],
  },
  {
    id: 'ai', tier: 'AI Automation Lab', price: 'From $2,000', raw: 2000,
    target: 'Businesses ready to automate',
    desc: 'Custom AI agents, outreach pipelines, chatbots & workflow automation.',
    features: ['Custom AI agents', 'Automated outreach pipelines', 'Chatbots & assistants', 'Content generation systems', 'Workflow automation', 'Dedicated AI engineer'],
    ai: true,
  },
];

const FAQS = [
  { q: 'How does the 1-hour website work?', a: 'After you submit your project brief and payment, our team immediately begins work using your brand inputs. We deliver a ready-to-launch website in under 60 minutes — no back-and-forth, no waiting days for drafts.' },
  { q: 'What payment methods do you accept?', a: 'We accept Stripe (all major cards), Reedot, and Swift bank transfer for UAE-based clients. All transactions are fully secure and you receive a receipt immediately.' },
  { q: 'Can I request revisions after delivery?', a: 'Yes. Every package includes at least one round of revisions within 48 hours of delivery. Pro and Premium packages include unlimited revisions during the support period.' },
  { q: 'Do you work with international clients?', a: 'Absolutely. While we\'re headquartered in UAE and Algeria, our team operates across timezones and serves clients worldwide — from Europe to Southeast Asia.' },
  { q: 'What do I need to provide to get started?', a: 'Just your business name, logo (or we\'ll create a placeholder), brand colors, the pages you need, and a short description of your business. We handle the rest.' },
  { q: 'What happens after my website is launched?', a: 'We handle hosting, SSL, and maintenance. You get a CMS dashboard to update content. Our team is available for ongoing support, SEO, and future feature additions.' },
];

// ─── Nav ────────────────────────────────────────────────────────────────────
function Nav({ onOrder }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav style={{ background: scrolled ? 'rgba(3,4,15,0.92)' : 'rgba(3,4,15,0.7)' }}>
      <a href="#" className="nav-logo">Arko<span>.</span>Digital</a>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#how">How it works</a></li>
        <li><a href="#order">Pricing</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <div className="nav-cta">
        <a href="#order" className="btn-ghost" style={{ padding: '9px 20px', fontSize: '14px' }}>View Packages</a>
        <button className="btn-primary" style={{ padding: '9px 22px', fontSize: '14px' }} onClick={onOrder}>Start Project →</button>
      </div>
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero({ onOrder }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-orbit"></div>
      <div className="hero-orbit hero-orbit-2"></div>
      <div className="hero-badge">
        <span className="tag"><span className="glow-dot"></span> UAE &amp; Algeria · Worldwide</span>
      </div>
      <h1 className="hero-title">
        Your Digital Presence,<br />
        <span className="grad-text">Built in 1 Hour.</span>
      </h1>
      <p className="hero-sub">
        World-class websites, apps &amp; AI automations — engineered by Arko Digital Labs. Submit your brief, choose your package, and go live before your next meeting.
      </p>
      <div className="hero-ctas">
        <button className="btn-primary" onClick={onOrder} style={{ fontSize: '16px', padding: '16px 38px' }}>
          Start Your Project →
        </button>
        <a href="#how" className="btn-ghost" style={{ fontSize: '16px' }}>See how it works</a>
      </div>
      <div className="hero-stats">
        {[['150+', 'Projects Delivered'], ['1 hr', 'Average Launch Time'], ['4', 'Service Tiers'], ['2', 'Global HQs']].map(([v, l]) => (
          <div key={l} style={{ textAlign: 'center' }}>
            <div className="hero-stat-val grad-text">{v}</div>
            <div className="hero-stat-label">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Marquee ─────────────────────────────────────────────────────────────────
function Marquee() {
  const items = ['Websites', '✦', 'Mobile Apps', '✦', 'AI Automation', '✦', 'Brand Identity', '✦', 'CMS Integration', '✦', 'SEO Optimization', '✦', 'UI/UX Design', '✦', '1-Hour Delivery', '✦'];
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrap">
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i} className={item === '✦' ? 'accent' : ''}>{item}</span>
        ))}
      </div>
    </div>
  );
}

// ─── 1-Hour Bar ──────────────────────────────────────────────────────────────
function OneHourBar() {
  return (
    <div className="one-hour-bar reveal">
      <span className="glow-dot"></span>
      <span style={{ fontFamily: 'var(--font-d)', fontWeight: 700, fontSize: '15px', letterSpacing: '-0.01em' }}>
        The <span className="grad-text">1-Hour Website</span> — Submit your brief, we build it live.
      </span>
      <span style={{ fontSize: '13px', color: 'var(--text-dim)' }}>No waiting days. No endless revisions. Just results.</span>
    </div>
  );
}

// ─── Pricing ─────────────────────────────────────────────────────────────────
function Pricing({ onSelectPackage }) {
  return (
    <section id="services">
      <div className="section-header reveal">
        <span className="tag">Packages</span>
        <h2 className="section-title">Choose Your Tier</h2>
        <div className="section-divider"></div>
      </div>
      <div className="pricing-grid">
        {PACKAGES.map((pkg, i) => (
          <div
            key={pkg.id}
            className={`glass pricing-card reveal reveal-delay-${i + 1} ${pkg.featured ? 'featured' : ''} ${pkg.ai ? 'ai-card' : ''}`}
          >
            <div className="pricing-tier" style={pkg.ai ? { color: '#ff8c30' } : {}}>
              {pkg.tier}
            </div>
            <div className="pricing-price" style={pkg.ai ? {} : {}}>
              {pkg.ai
                ? <><span className="from">from </span>$2,000</>
                : <><sup>$</sup>{pkg.price.replace('$', '')}</>
              }
            </div>
            <p className="pricing-desc">{pkg.desc}</p>
            <ul className="pricing-features">
              {pkg.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <div className="pricing-card-footer">
              <button
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '8px',
                  ...(pkg.ai ? { background: 'linear-gradient(135deg, #ff8c30, #ff3c78)' } : {}) }}
                onClick={() => onSelectPackage(pkg)}
              >
                Select {pkg.tier} →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── How it Works ────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { n: '01', title: 'Fill the Brief', desc: 'Tell us your business name, what you do, your colors, and the pages you need. Takes 2 minutes.' },
    { n: '02', title: 'Choose & Pay', desc: 'Pick a package that fits your budget. Pay securely via Stripe, Reedot, or bank transfer.' },
    { n: '03', title: 'We Build Live', desc: 'Our team starts immediately. You receive a fully functional website within 60 minutes, ready to launch.' },
    { n: '04', title: 'Launch & Grow', desc: 'Go live with hosting, SSL, and CMS included. We\'re here for support, updates and scaling.' },
  ];
  return (
    <section id="how" style={{ background: 'linear-gradient(180deg, transparent, rgba(80,120,255,0.03), transparent)' }}>
      <div className="section-header reveal">
        <span className="tag">Process</span>
        <h2 className="section-title">From Brief to Live in 60 Minutes</h2>
        <div className="section-divider"></div>
      </div>
      <div className="hiw-steps">
        {steps.map((s, i) => (
          <div key={s.n} className={`glass hiw-step reveal reveal-delay-${i + 1}`}>
            <div className="hiw-num">{s.n}</div>
            <div className="hiw-title">{s.title}</div>
            <p className="hiw-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Order Form ──────────────────────────────────────────────────────────────
function OrderForm({ preselectedPkg, onPayment }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', business: '', industry: '',
    pages: '', colors: '', brief: '', pkg: preselectedPkg?.id || 'pro',
  });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1); // 1 = details, 2 = confirm

  useEffect(() => {
    if (preselectedPkg) setForm(f => ({ ...f, pkg: preselectedPkg.id }));
  }, [preselectedPkg]);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.business.trim()) e.business = 'Required';
    if (!form.brief.trim()) e.brief = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (validate()) setStep(2);
  };

  const selectedPkg = PACKAGES.find(p => p.id === form.pkg);

  if (step === 2) {
    return (
      <div className="order-form-wrap" id="order">
        <div className="glass form-card reveal">
          <div style={{ marginBottom: '28px' }}>
            <div className="tag" style={{ marginBottom: '12px' }}>Review Your Order</div>
            <h3 style={{ fontFamily: 'var(--font-d)', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.01em' }}>
              Looks great, {form.name.split(' ')[0]}!
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-dim)', marginTop: '6px' }}>
              Here's what you've selected. Choose a payment method to proceed.
            </p>
          </div>

          {/* Summary */}
          <div style={{ background: 'rgba(80,120,255,0.06)', border: '1px solid rgba(80,120,255,0.14)', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '14px', color: 'var(--text-dim)' }}>Package</span>
              <span style={{ fontWeight: 600, fontFamily: 'var(--font-d)' }}>{selectedPkg?.tier}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '14px', color: 'var(--text-dim)' }}>Business</span>
              <span style={{ fontWeight: 600 }}>{form.business}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(80,120,255,0.12)', paddingTop: '12px', marginTop: '4px' }}>
              <span style={{ fontSize: '15px', fontWeight: 600 }}>Total</span>
              <span style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'var(--font-d)', color: 'var(--accent)' }}>{selectedPkg?.price}</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn-ghost" style={{ flex: 1, justifyContent: 'center' }} onClick={() => setStep(1)}>← Back</button>
            <button className="btn-primary" style={{ flex: 2, justifyContent: 'center' }} onClick={() => onPayment(form, selectedPkg)}>
              Proceed to Payment →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="order-form-wrap" id="order">
      <div className="glass form-card reveal">
        <div style={{ marginBottom: '28px' }}>
          <div className="tag" style={{ marginBottom: '12px' }}>Start Your Project</div>
          <h3 style={{ fontFamily: 'var(--font-d)', fontSize: '26px', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Get Your Website in <span className="grad-text">1 Hour</span>
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--text-dim)', marginTop: '6px' }}>
            Fill in the brief below — takes 2 minutes. We'll build while you get on with your day.
          </p>
        </div>

        {/* Package selector */}
        <div style={{ marginBottom: '20px' }}>
          <label>Select Package</label>
          <div className="pkg-select-grid">
            {PACKAGES.map(pkg => (
              <div
                key={pkg.id}
                className={`pkg-radio ${form.pkg === pkg.id ? 'selected' : ''}`}
                onClick={() => set('pkg', pkg.id)}
              >
                <div className="pkg-radio-name">{pkg.tier}</div>
                <div className="pkg-radio-price">{pkg.price}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Full Name *</label>
            <input value={form.name} onChange={e => set('name', e.target.value)}
              placeholder="John Smith" style={errors.name ? { borderColor: '#ff5580' } : {}} />
            {errors.name && <span style={{ fontSize: '12px', color: '#ff5580', marginTop: '4px' }}>{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>Email Address *</label>
            <input type="email" value={form.email} onChange={e => set('email', e.target.value)}
              placeholder="you@company.com" style={errors.email ? { borderColor: '#ff5580' } : {}} />
            {errors.email && <span style={{ fontSize: '12px', color: '#ff5580', marginTop: '4px' }}>{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Phone / WhatsApp</label>
            <input value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+971 50 000 0000" />
          </div>
          <div className="form-group">
            <label>Business Name *</label>
            <input value={form.business} onChange={e => set('business', e.target.value)}
              placeholder="Your business name" style={errors.business ? { borderColor: '#ff5580' } : {}} />
            {errors.business && <span style={{ fontSize: '12px', color: '#ff5580', marginTop: '4px' }}>{errors.business}</span>}
          </div>
          <div className="form-group">
            <label>Industry</label>
            <select value={form.industry} onChange={e => set('industry', e.target.value)}>
              <option value="">Select industry</option>
              {['Real Estate', 'Hospitality', 'Healthcare', 'Retail / E-commerce', 'Finance', 'Technology', 'Construction', 'Education', 'Legal', 'Other'].map(o => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Pages Needed</label>
            <input value={form.pages} onChange={e => set('pages', e.target.value)} placeholder="Home, About, Services, Contact…" />
          </div>
          <div className="form-group">
            <label>Brand Colors</label>
            <input value={form.colors} onChange={e => set('colors', e.target.value)} placeholder="e.g. #1A1A2E, Gold, Navy" />
          </div>
          <div className="form-group full">
            <label>Project Brief *</label>
            <textarea value={form.brief} onChange={e => set('brief', e.target.value)}
              placeholder="Describe your business, goals, style preferences, and anything specific you want on the site…"
              style={errors.brief ? { borderColor: '#ff5580' } : {}} />
            {errors.brief && <span style={{ fontSize: '12px', color: '#ff5580', marginTop: '4px' }}>{errors.brief}</span>}
          </div>
        </div>

        <button className="btn-primary" style={{ marginTop: '24px', width: '100%', justifyContent: 'center', fontSize: '16px', padding: '16px' }} onClick={handleNext}>
          Review Order →
        </button>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '12px' }}>
          🔒 Your information is secure. Payment is processed on the next step.
        </p>
      </div>
    </div>
  );
}

// ─── Payment Modal ────────────────────────────────────────────────────────────
function PaymentModal({ form, pkg, onClose, onSuccess }) {
  const [method, setMethod] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [showSwift, setShowSwift] = useState(false);

  const handlePay = () => {
    if (!method) return;
    if (method === 'swift') { setShowSwift(true); return; }
    setProcessing(true);
    setTimeout(() => { setProcessing(false); onSuccess(); }, 2200);
  };

  const methods = [
    { id: 'stripe', name: 'Pay with Stripe', desc: 'Visa, Mastercard, Amex — all major cards', badge: 'Instant' },
    { id: 'reedot', name: 'Pay with Reedot', desc: 'Regional payment gateway — fast & secure', badge: 'Instant' },
    { id: 'swift', name: 'Swift Bank Transfer', desc: 'UAE bank transfer — best for large orders', badge: 'UAE' },
  ];

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-card">
        <button className="modal-close" onClick={onClose}>×</button>
        <div style={{ marginBottom: '24px' }}>
          <div className="tag" style={{ marginBottom: '10px' }}>Secure Checkout</div>
          <h3 style={{ fontFamily: 'var(--font-d)', fontSize: '22px', fontWeight: 700 }}>Complete Payment</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-dim)', marginTop: '6px' }}>
            {pkg?.tier} — <strong style={{ color: 'var(--accent)' }}>{pkg?.price}</strong>
          </p>
        </div>

        {!showSwift ? (
          <>
            <div style={{ marginBottom: '20px' }}>
              {methods.map(m => (
                <div key={m.id} className={`pay-method ${method === m.id ? 'selected' : ''}`} onClick={() => setMethod(m.id)}>
                  <div>
                    <div className="pay-method-name">{m.name}</div>
                    <div className="pay-method-desc">{m.desc}</div>
                  </div>
                  <span className="pay-badge">{m.badge}</span>
                </div>
              ))}
            </div>

            <button
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', opacity: method ? 1 : 0.5, fontSize: '15px', padding: '14px' }}
              onClick={handlePay}
              disabled={processing}
            >
              {processing ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: 'spin-slow 0.8s linear infinite' }}>
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  </svg>
                  Processing…
                </span>
              ) : (
                `Pay ${pkg?.price} →`
              )}
            </button>
          </>
        ) : (
          <>
            <p style={{ fontSize: '14px', color: 'var(--text-dim)', marginBottom: '14px' }}>
              Transfer exactly <strong style={{ color: 'var(--text)' }}>{pkg?.price}</strong> to the account below, then email us your receipt to confirm your order.
            </p>
            <div className="swift-details">
              {[
                ['Bank', 'Emirates NBD'],
                ['Account Name', 'Arko Digital Labs FZE'],
                ['IBAN', 'AE07 0260 0015 0908 8530 001'],
                ['SWIFT', 'EBILAEAD'],
                ['Reference', form?.email?.split('@')[0]?.toUpperCase() + '-' + pkg?.id?.toUpperCase()],
              ].map(([k, v]) => (
                <div key={k} className="swift-row">
                  <span className="swift-key">{k}</span>
                  <span className="swift-val">{v}</span>
                </div>
              ))}
            </div>
            <button
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '16px', background: 'linear-gradient(135deg, #40c87a, #20a060)' }}
              onClick={onSuccess}
            >
              I've Made the Transfer ✓
            </button>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '10px' }}>
              Your project starts as soon as we verify your transfer.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq">
      <div className="section-header reveal">
        <span className="tag">FAQ</span>
        <h2 className="section-title">Common Questions</h2>
        <div className="section-divider"></div>
      </div>
      <div className="faq-list">
        {FAQS.map((item, i) => (
          <div key={i} className={`faq-item reveal ${open === i ? 'open' : ''}`}>
            <div className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
              <span>{item.q}</span>
              <span className="faq-arrow">{open === i ? '−' : '+'}</span>
            </div>
            <div className={`faq-a ${open === i ? 'open' : ''}`}>{item.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand-name">Arko<span>.</span>Digital Labs</div>
          <p className="footer-tagline">World-class websites, apps and AI automations — built from UAE and Algeria for a global audience.</p>
          <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
            {['Dubai, UAE', 'Algiers, Algeria'].map(loc => (
              <span key={loc} style={{ fontSize: '12px', padding: '4px 12px', borderRadius: '999px', border: '1px solid var(--glass-border)', color: 'var(--text-dim)' }}>{loc}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            {['Websites', 'Mobile Apps', 'AI Automation', 'Brand Identity', 'SEO & Growth'].map(s => (
              <li key={s}><a href="#services">{s}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            {['About Us', 'How It Works', 'Pricing', 'FAQ', 'Contact'].map(s => (
              <li key={s}><a href={s === 'FAQ' ? '#faq' : s === 'How It Works' ? '#how' : '#'}>{s}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Arko Digital Labs. All rights reserved.</p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span className="glow-dot" style={{ width: '6px', height: '6px' }}></span>
          Available 24/7 — worldwide
        </p>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
function App() {
  const [showPayment, setShowPayment] = useState(false);
  const [paymentData, setPaymentData] = useState(null);
  const [success, setSuccess] = useState(false);
  const [preselected, setPreselected] = useState(null);
  const orderRef = useRef(null);

  const scrollToOrder = () => {
    const el = document.getElementById('order');
    if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: 'smooth' });
  };

  const handleSelectPackage = (pkg) => {
    setPreselected(pkg);
    setTimeout(scrollToOrder, 50);
  };

  const handlePayment = (form, pkg) => {
    setPaymentData({ form, pkg });
    setShowPayment(true);
  };

  const handleSuccess = () => {
    setShowPayment(false);
    setSuccess(true);
    window.scrollTo({ top: document.getElementById('order').offsetTop - 90, behavior: 'smooth' });
  };

  return (
    <>
      <Nav onOrder={scrollToOrder} />
      <Hero onOrder={scrollToOrder} />
      <Marquee />
      <OneHourBar />
      <Pricing onSelectPackage={handleSelectPackage} />
      <HowItWorks />

      <section>
        <div className="section-header reveal">
          <span className="tag">Order Now</span>
          <h2 className="section-title">Launch Your Project</h2>
          <div className="section-divider"></div>
        </div>
        {success ? (
          <div className="order-form-wrap">
            <div className="success-card reveal">
              <div className="success-icon">✓</div>
              <div className="success-title">You're in the queue!</div>
              <p className="success-sub">
                Your order is confirmed. Our team has been notified and will start building immediately.<br /><br />
                <strong>Expect delivery within 60 minutes.</strong><br />
                We'll send a link to your website directly to your email.
              </p>
              <button className="btn-primary" style={{ margin: '24px auto 0', display: 'flex' }} onClick={() => setSuccess(false)}>
                Start Another Project
              </button>
            </div>
          </div>
        ) : (
          <OrderForm preselectedPkg={preselected} onPayment={handlePayment} />
        )}
      </section>

      <FAQ />
      <Footer />

      {showPayment && paymentData && (
        <PaymentModal
          form={paymentData.form}
          pkg={paymentData.pkg}
          onClose={() => setShowPayment(false)}
          onSuccess={handleSuccess}
        />
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
