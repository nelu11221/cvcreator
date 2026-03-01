import React, { useState, useRef } from 'react';
import './App.css';

// ─── Default CV Data ──────────────────────────────────────────────────────────
const defaultCV = {
  name: 'Alexandra Rivera',
  title: 'Senior Product Designer',
  email: 'alex.rivera@email.com',
  phone: '+1 555 234 7890',
  location: 'San Francisco, CA',
  website: 'alexrivera.design',
  summary:
    'Creative product designer with 7+ years crafting intuitive digital experiences. Passionate about human-centered design and bridging the gap between user needs and business goals.',
  experience: [
    { id: 1, role: 'Senior Product Designer', company: 'Stripe', period: '2021 – Present', desc: 'Led end-to-end design for Stripe Dashboard impacting 3M+ businesses. Established a design system adopted across 12 product teams.' },
    { id: 2, role: 'Product Designer', company: 'Figma', period: '2018 – 2021', desc: 'Designed core collaboration features used by 4M+ designers. Reduced onboarding drop-off by 32% through iterative UX research.' },
    { id: 3, role: 'UX Designer', company: 'IDEO', period: '2016 – 2018', desc: 'Consulted for Fortune 500 clients on digital transformation, delivering research-backed design recommendations.' },
  ],
  education: [
    { id: 1, degree: 'M.F.A. Interaction Design', school: 'California College of the Arts', year: '2016' },
    { id: 2, degree: 'B.A. Graphic Design', school: 'UCLA', year: '2014' },
  ],
  skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems', 'Framer', 'HTML/CSS', 'Accessibility', 'Storytelling'],
};

const TEMPLATES = [
  { id: 'classic',   name: 'Classic',   desc: 'Clean & professional' },
  { id: 'modern',    name: 'Modern',    desc: 'Bold sidebar layout'  },
  { id: 'minimal',   name: 'Minimal',   desc: 'Ultra-clean lines'   },
  { id: 'executive', name: 'Executive', desc: 'Refined & formal'    },
];

// ────────────────────────────────────────────────────────────────────────────
// TEMPLATE: CLASSIC
// ────────────────────────────────────────────────────────────────────────────
function TemplateClassic({ cv }) {
  return (
    <div className="tpl tpl-classic">
      <div className="tpl-classic__header">
        <h1 className="tpl-classic__name">{cv.name}</h1>
        <p className="tpl-classic__title">{cv.title}</p>
        <div className="tpl-classic__contact">
          {cv.email && <span>{cv.email}</span>}
          {cv.phone && <span>{cv.phone}</span>}
          {cv.location && <span>{cv.location}</span>}
          {cv.website && <span>{cv.website}</span>}
        </div>
      </div>
      {cv.summary && (
        <div className="tpl-classic__section">
          <h2 className="tpl-classic__section-title">Profile</h2>
          <p className="tpl-classic__body">{cv.summary}</p>
        </div>
      )}
      {cv.experience.length > 0 && (
        <div className="tpl-classic__section">
          <h2 className="tpl-classic__section-title">Experience</h2>
          {cv.experience.map(e => (
            <div className="tpl-classic__entry" key={e.id}>
              <div className="tpl-classic__row">
                <strong>{e.role}</strong>
                <span className="tpl-classic__period">{e.period}</span>
              </div>
              <p className="tpl-classic__company">{e.company}</p>
              <p className="tpl-classic__body">{e.desc}</p>
            </div>
          ))}
        </div>
      )}
      {cv.education.length > 0 && (
        <div className="tpl-classic__section">
          <h2 className="tpl-classic__section-title">Education</h2>
          {cv.education.map(e => (
            <div className="tpl-classic__entry" key={e.id}>
              <div className="tpl-classic__row">
                <strong>{e.degree}</strong>
                <span className="tpl-classic__period">{e.year}</span>
              </div>
              <p className="tpl-classic__company">{e.school}</p>
            </div>
          ))}
        </div>
      )}
      {cv.skills.length > 0 && (
        <div className="tpl-classic__section">
          <h2 className="tpl-classic__section-title">Skills</h2>
          <div className="tpl-classic__skills">
            {cv.skills.map(s => <span className="tpl-classic__skill" key={s}>{s}</span>)}
          </div>
        </div>
      )}
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// TEMPLATE: MODERN
// ────────────────────────────────────────────────────────────────────────────
function TemplateModern({ cv }) {
  return (
    <div className="tpl tpl-modern">
      <div className="tpl-modern__sidebar">
        <div className="tpl-modern__avatar">{cv.name ? cv.name.charAt(0) : 'A'}</div>
        <h1 className="tpl-modern__name">{cv.name}</h1>
        <p className="tpl-modern__title">{cv.title}</p>
        <div className="tpl-modern__sidebar-section">
          <h3 className="tpl-modern__sidebar-heading">Contact</h3>
          {cv.email    && <p className="tpl-modern__sidebar-item">{cv.email}</p>}
          {cv.phone    && <p className="tpl-modern__sidebar-item">{cv.phone}</p>}
          {cv.location && <p className="tpl-modern__sidebar-item">{cv.location}</p>}
          {cv.website  && <p className="tpl-modern__sidebar-item">{cv.website}</p>}
        </div>
        {cv.skills.length > 0 && (
          <div className="tpl-modern__sidebar-section">
            <h3 className="tpl-modern__sidebar-heading">Skills</h3>
            {cv.skills.map(s => (
              <div className="tpl-modern__skill-row" key={s}>
                <span className="tpl-modern__skill-dot" /><span>{s}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="tpl-modern__main">
        {cv.summary && (
          <div className="tpl-modern__section">
            <h2 className="tpl-modern__section-title">About Me</h2>
            <p className="tpl-modern__body">{cv.summary}</p>
          </div>
        )}
        {cv.experience.length > 0 && (
          <div className="tpl-modern__section">
            <h2 className="tpl-modern__section-title">Experience</h2>
            {cv.experience.map(e => (
              <div className="tpl-modern__entry" key={e.id}>
                <div className="tpl-modern__entry-header">
                  <strong>{e.role}</strong>
                  <span className="tpl-modern__period">{e.period}</span>
                </div>
                <p className="tpl-modern__company">{e.company}</p>
                <p className="tpl-modern__body">{e.desc}</p>
              </div>
            ))}
          </div>
        )}
        {cv.education.length > 0 && (
          <div className="tpl-modern__section">
            <h2 className="tpl-modern__section-title">Education</h2>
            {cv.education.map(e => (
              <div className="tpl-modern__entry" key={e.id}>
                <div className="tpl-modern__entry-header">
                  <strong>{e.degree}</strong>
                  <span className="tpl-modern__period">{e.year}</span>
                </div>
                <p className="tpl-modern__company">{e.school}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// TEMPLATE: MINIMAL
// ────────────────────────────────────────────────────────────────────────────
function TemplateMinimal({ cv }) {
  return (
    <div className="tpl tpl-minimal">
      <div className="tpl-minimal__header">
        <h1 className="tpl-minimal__name">{cv.name}</h1>
        <p className="tpl-minimal__title">{cv.title}</p>
      </div>
      <div className="tpl-minimal__contact-row">
        {[cv.email, cv.phone, cv.location, cv.website].filter(Boolean).map((v, i) => (
          <span key={i}>{v}</span>
        ))}
      </div>
      {cv.summary && (
        <div className="tpl-minimal__section">
          <p className="tpl-minimal__summary">{cv.summary}</p>
        </div>
      )}
      {cv.experience.length > 0 && (
        <div className="tpl-minimal__section">
          <h2 className="tpl-minimal__heading">Experience</h2>
          {cv.experience.map(e => (
            <div className="tpl-minimal__entry" key={e.id}>
              <div className="tpl-minimal__meta"><span className="tpl-minimal__period">{e.period}</span></div>
              <div className="tpl-minimal__content">
                <p className="tpl-minimal__role">{e.role} <span className="tpl-minimal__at">at</span> {e.company}</p>
                <p className="tpl-minimal__desc">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {cv.education.length > 0 && (
        <div className="tpl-minimal__section">
          <h2 className="tpl-minimal__heading">Education</h2>
          {cv.education.map(e => (
            <div className="tpl-minimal__entry" key={e.id}>
              <div className="tpl-minimal__meta"><span className="tpl-minimal__period">{e.year}</span></div>
              <div className="tpl-minimal__content">
                <p className="tpl-minimal__role">{e.degree} <span className="tpl-minimal__at">—</span> {e.school}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {cv.skills.length > 0 && (
        <div className="tpl-minimal__section">
          <h2 className="tpl-minimal__heading">Skills</h2>
          <p className="tpl-minimal__skills-inline">{cv.skills.join(' · ')}</p>
        </div>
      )}
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// TEMPLATE: EXECUTIVE
// ────────────────────────────────────────────────────────────────────────────
function TemplateExecutive({ cv }) {
  return (
    <div className="tpl tpl-executive">
      <div className="tpl-executive__top">
        <div className="tpl-executive__name-block">
          <h1 className="tpl-executive__name">{cv.name}</h1>
          <div className="tpl-executive__rule" />
          <p className="tpl-executive__title">{cv.title}</p>
        </div>
        <div className="tpl-executive__contact">
          {cv.email    && <div className="tpl-executive__contact-item"><span className="tpl-executive__label">Email</span><span>{cv.email}</span></div>}
          {cv.phone    && <div className="tpl-executive__contact-item"><span className="tpl-executive__label">Phone</span><span>{cv.phone}</span></div>}
          {cv.location && <div className="tpl-executive__contact-item"><span className="tpl-executive__label">Location</span><span>{cv.location}</span></div>}
          {cv.website  && <div className="tpl-executive__contact-item"><span className="tpl-executive__label">Web</span><span>{cv.website}</span></div>}
        </div>
      </div>
      {cv.summary && (
        <div className="tpl-executive__section">
          <h2 className="tpl-executive__section-title">Executive Summary</h2>
          <p className="tpl-executive__body tpl-executive__body--lead">{cv.summary}</p>
        </div>
      )}
      {cv.experience.length > 0 && (
        <div className="tpl-executive__section">
          <h2 className="tpl-executive__section-title">Professional Experience</h2>
          {cv.experience.map(e => (
            <div className="tpl-executive__entry" key={e.id}>
              <div className="tpl-executive__entry-left">
                <strong className="tpl-executive__role">{e.role}</strong>
                <span className="tpl-executive__company">{e.company}</span>
              </div>
              <div className="tpl-executive__entry-right">
                <span className="tpl-executive__period">{e.period}</span>
                <p className="tpl-executive__body">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {cv.education.length > 0 && (
        <div className="tpl-executive__section">
          <h2 className="tpl-executive__section-title">Education</h2>
          {cv.education.map(e => (
            <div className="tpl-executive__entry" key={e.id}>
              <div className="tpl-executive__entry-left">
                <strong className="tpl-executive__role">{e.degree}</strong>
                <span className="tpl-executive__company">{e.school}</span>
              </div>
              <div className="tpl-executive__entry-right">
                <span className="tpl-executive__period">{e.year}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      {cv.skills.length > 0 && (
        <div className="tpl-executive__section">
          <h2 className="tpl-executive__section-title">Core Competencies</h2>
          <div className="tpl-executive__skills">
            {cv.skills.map(s => <span className="tpl-executive__skill" key={s}>{s}</span>)}
          </div>
        </div>
      )}
    </div>
  );
}

const TEMPLATE_MAP = { classic: TemplateClassic, modern: TemplateModern, minimal: TemplateMinimal, executive: TemplateExecutive };



// ────────────────────────────────────────────────────────────────────────────
// LANDING PAGE  — v3  (bright, modern, clean)
// ────────────────────────────────────────────────────────────────────────────
function LandingPage({ onStart }) {
  return (
    <div className="landing">

      {/* Nav */}
      <nav className="l-nav">
        <div className="l-logo">
          <span className="l-logo__mark">CV</span>
          <span className="l-logo__text">creator</span>
        </div>
        <div className="l-nav__pills">
          <span className="l-pill">Free</span>
          <span className="l-pill">No signup</span>
          <span className="l-pill">PDF export</span>
        </div>
        <button className="l-nav__btn" onClick={onStart}>Get started</button>
      </nav>

      {/* Hero */}
      <section className="l-hero">
        <div className="l-hero__content">
          <div className="l-hero__badge">
            <span className="l-hero__badge-dot" />
            4 professional templates ready to use
          </div>
          <h1 className="l-hero__h1">
            Create your CV<br />
            <span className="l-hero__h1-highlight">in minutes.</span>
          </h1>
          <p className="l-hero__body">
            Fill in your details, pick a template, and download
            a polished PDF — no account, no subscription, just your CV.
          </p>
          <div className="l-hero__actions">
            <button className="l-btn-primary" onClick={onStart}>
              Build my CV
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <span className="l-hero__actions-note">Free · Takes about 5 minutes</span>
          </div>
          <div className="l-hero__trust">
            {['Classic', 'Modern', 'Minimal', 'Executive'].map(t => (
              <div className="l-trust-chip" key={t}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="l-hero__visual">
          <div className="l-cv-stack">
            {/* Back card — Modern */}
            <div className="l-cv-card l-cv-card--back">
              <div className="l-cv-card__sidebar">
                <div className="l-cv-avatar" />
                <div className="l-cv-bar l-cv-bar--sb-name" />
                <div className="l-cv-bar l-cv-bar--sb-title" />
                <div className="l-cv-bar l-cv-bar--sb-item" />
                <div className="l-cv-bar l-cv-bar--sb-item" />
                <div className="l-cv-bar l-cv-bar--sb-item" />
              </div>
              <div className="l-cv-card__body">
                <div className="l-cv-bar l-cv-bar--section-label" />
                <div className="l-cv-bar l-cv-bar--text" />
                <div className="l-cv-bar l-cv-bar--text-short" />
                <div className="l-cv-bar l-cv-bar--text" />
                <div className="l-cv-bar l-cv-bar--section-label" />
                <div className="l-cv-bar l-cv-bar--text" />
                <div className="l-cv-bar l-cv-bar--text-short" />
              </div>
            </div>
            {/* Main card — Executive */}
            <div className="l-cv-card l-cv-card--main">
              <div className="l-cv-card__header">
                <div>
                  <div className="l-cv-bar l-cv-bar--name" />
                  <div className="l-cv-rule" />
                  <div className="l-cv-bar l-cv-bar--title" />
                </div>
                <div className="l-cv-card__contact">
                  <div className="l-cv-bar l-cv-bar--contact" />
                  <div className="l-cv-bar l-cv-bar--contact" />
                  <div className="l-cv-bar l-cv-bar--contact" />
                </div>
              </div>
              <div className="l-cv-card__divider" />
              <div className="l-cv-section">
                <div className="l-cv-bar l-cv-bar--section-label" />
                <div className="l-cv-entry">
                  <div className="l-cv-entry__left">
                    <div className="l-cv-bar l-cv-bar--role" />
                    <div className="l-cv-bar l-cv-bar--company" />
                  </div>
                  <div className="l-cv-entry__right">
                    <div className="l-cv-bar l-cv-bar--period" />
                    <div className="l-cv-bar l-cv-bar--text" />
                    <div className="l-cv-bar l-cv-bar--text-short" />
                  </div>
                </div>
                <div className="l-cv-entry">
                  <div className="l-cv-entry__left">
                    <div className="l-cv-bar l-cv-bar--role" />
                    <div className="l-cv-bar l-cv-bar--company" />
                  </div>
                  <div className="l-cv-entry__right">
                    <div className="l-cv-bar l-cv-bar--period" />
                    <div className="l-cv-bar l-cv-bar--text" />
                  </div>
                </div>
              </div>
              <div className="l-cv-section">
                <div className="l-cv-bar l-cv-bar--section-label" />
                <div className="l-cv-chips">
                  {[80, 65, 90, 70, 55, 75].map((w, i) => (
                    <span className="l-cv-chip" key={i} style={{width: w + 'px'}} />
                  ))}
                </div>
              </div>
              <div className="l-cv-badge">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                PDF Ready
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="l-features">
        <p className="l-features__eyebrow">Why CVcreator</p>
        <div className="l-features__grid">
          {[
            {
              color: '#6366f1', bg: '#eef2ff', title: '4 Templates',
              desc: 'Classic, Modern, Minimal & Executive. Switch anytime with one click.',
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
            },
            {
              color: '#0ea5e9', bg: '#e0f2fe', title: 'Live Preview',
              desc: 'Your CV updates instantly as you type — no saving, no waiting.',
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            },
            {
              color: '#10b981', bg: '#dcfce7', title: 'PDF Export',
              desc: 'Download a crisp, print-ready A4 PDF straight to your device.',
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            },
            {
              color: '#f59e0b', bg: '#fef9c3', title: '100% Free',
              desc: 'No account, no payment, no watermarks. Completely free forever.',
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            },
          ].map(f => (
            <div className="l-feature" key={f.title}>
              <div className="l-feature__icon" style={{background: f.bg, color: f.color}}>{f.icon}</div>
              <h3 className="l-feature__title">{f.title}</h3>
              <p className="l-feature__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="l-cta">
        <div className="l-cta__inner">
          <h2 className="l-cta__title">Ready to land your next job?</h2>
          <p className="l-cta__sub">Build a professional CV in minutes — completely free.</p>
          <button className="l-btn-primary l-btn-primary--lg" onClick={onStart}>
            Start building now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="l-footer">
        <div className="l-logo">
          <span className="l-logo__mark">CV</span>
          <span className="l-logo__text">creator</span>
        </div>
        <span className="l-footer__copy">© 2025 CVcreator · Free forever</span>
      </footer>

    </div>
  );
}

// MAIN APP
// ────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState('landing'); // 'landing' | 'editor'
  const [cv, setCV]             = useState(defaultCV);
  const [activeTab, setActiveTab]   = useState('basics');
  const [template, setTemplate]     = useState('classic');
  const [newSkill, setNewSkill]     = useState('');
  const [exporting, setExporting]   = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const previewRef = useRef(null);

  const update    = (f, v)   => setCV(p => ({ ...p, [f]: v }));
  const updateExp = (id,f,v) => setCV(p => ({ ...p, experience: p.experience.map(e => e.id === id ? { ...e, [f]: v } : e) }));
  const updateEdu = (id,f,v) => setCV(p => ({ ...p, education:  p.education.map(e  => e.id === id ? { ...e, [f]: v } : e) }));
  const addExp    = ()       => setCV(p => ({ ...p, experience: [...p.experience, { id: Date.now(), role: '', company: '', period: '', desc: '' }] }));
  const addEdu    = ()       => setCV(p => ({ ...p, education:  [...p.education,  { id: Date.now(), degree: '', school: '', year: '' }] }));
  const addSkill  = ()       => { if (newSkill.trim()) { setCV(p => ({ ...p, skills: [...p.skills, newSkill.trim()] })); setNewSkill(''); } };
  const removeSkill = s  => setCV(p => ({ ...p, skills:     p.skills.filter(sk => sk !== s) }));
  const removeExp   = id => setCV(p => ({ ...p, experience: p.experience.filter(e => e.id !== id) }));
  const removeEdu   = id => setCV(p => ({ ...p, education:  p.education.filter(e => e.id !== id)  }));

  const exportPDF = async () => {
    setExporting(true);
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      const filename = (cv.name || 'CV').replace(/\s+/g, '_') + `_${template}_CV.pdf`;

      // Inject a temporary <style> that forces white on every element
      // inside .cv-paper during capture, then remove it afterwards
      const styleTag = document.createElement('style');
      styleTag.id = 'pdf-export-override';
      styleTag.innerHTML = `
        .cv-paper, .cv-paper * {
          background-color: #ffffff !important;
          opacity: 1 !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        .tpl-modern__sidebar,
        .tpl-modern__sidebar * {
          background-color: #1a1a2e !important;
        }
        .tpl-modern__avatar {
          background-color: #c8a96e !important;
        }
        .tpl-classic__skill,
        .tpl-executive__skill,
        .tpl-executive__skills * {
          background-color: #eeecea !important;
        }
        .tpl-executive__body--lead {
          background-color: #ffffff !important;
        }
      `;
      document.head.appendChild(styleTag);

      // Small delay to let styles apply before capture
      await new Promise(r => setTimeout(r, 100));

      await html2pdf()
        .set({
          margin: 0,
          filename,
          image:       { type: 'jpeg', quality: 1.0 },
          html2canvas: {
            scale: 3,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
            onclone: (clonedDoc) => {
              // In the cloned document, paint the body white too
              clonedDoc.body.style.background = '#ffffff';
              const paper = clonedDoc.querySelector('.cv-paper');
              if (paper) paper.style.background = '#ffffff';
            },
          },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        })
        .from(previewRef.current)
        .save();

      document.head.removeChild(styleTag);
    } catch (err) {
      console.error(err);
      // Clean up style tag if export failed
      const tag = document.getElementById('pdf-export-override');
      if (tag) document.head.removeChild(tag);
      alert('PDF export failed.\nMake sure to install: npm install html2pdf.js');
    }
    setExporting(false);
  };

  const tabs = ['basics', 'experience', 'education', 'skills'];
  const ActiveTemplate = TEMPLATE_MAP[template];

  if (page === 'landing') {
    return <LandingPage onStart={() => setPage('editor')} />;
  }

  return (
    <div className="app">

      {/* ── Header ───────────────────────────────────────────── */}
      <header className="header">
        <div className="header-left">
          <button className="btn-back" onClick={() => setPage('landing')}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          </button>
          <div className="logo">
            <span className="logo-mark">CV</span>
            <span className="logo-text">creator</span>
          </div>
          <span className="header-badge">
            {TEMPLATES.find(t => t.id === template)?.name}
          </span>
        </div>
        <div className="header-right">
          <button className="btn-templates" onClick={() => setShowTemplates(v => !v)}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            Templates
          </button>
          <button className={`btn-export ${exporting ? 'btn-export--loading' : ''}`} onClick={exportPDF} disabled={exporting}>
            {exporting ? (
              <><svg className="spin" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>Exporting…</>
            ) : (
              <><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Export PDF</>
            )}
          </button>
        </div>
      </header>

      {/* ── Template Picker ───────────────────────────────────── */}
      {showTemplates && (
        <div className="template-bar">
          <p className="template-bar__label">Choose a template</p>
          <div className="template-bar__grid">
            {TEMPLATES.map(t => (
              <button
                key={t.id}
                className={`template-card ${template === t.id ? 'template-card--active' : ''}`}
                onClick={() => { setTemplate(t.id); setShowTemplates(false); }}
              >
                <div className={`template-thumb template-thumb--${t.id}`}>
                  {t.id === 'modern' ? (
                    <div className="template-thumb__modern">
                      <div className="template-thumb__modern-side" />
                      <div className="template-thumb__modern-main">
                        <div className="template-thumb__line template-thumb__line--title" />
                        <div className="template-thumb__line" /><div className="template-thumb__line" />
                        <div className="template-thumb__line template-thumb__line--short" />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="template-thumb__line template-thumb__line--title" />
                      <div className="template-thumb__line template-thumb__line--sub" />
                      <div className="template-thumb__divider" />
                      <div className="template-thumb__line" /><div className="template-thumb__line" />
                      <div className="template-thumb__line template-thumb__line--short" />
                    </>
                  )}
                </div>
                <span className="template-card__name">{t.name}</span>
                <span className="template-card__desc">{t.desc}</span>
                {template === t.id && <span className="template-card__check">✓ Active</span>}
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="main">
        {/* ── Editor ───────────────────────────────────────────── */}
        <section className="editor">
          <div className="tabs">
            {tabs.map(t => (
              <button key={t} className={`tab ${activeTab === t ? 'tab--active' : ''}`} onClick={() => setActiveTab(t)}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          <div className="form-body">
            {/* Basics */}
            {activeTab === 'basics' && (
              <div className="form-section">
                <h3 className="form-heading">Personal Info</h3>
                {[['Full Name','name','text'],['Job Title','title','text'],['Email','email','email'],['Phone','phone','tel'],['Location','location','text'],['Website','website','text']].map(([label,field,type]) => (
                  <div className="field" key={field}>
                    <label className="label">{label}</label>
                    <input className="input" type={type} value={cv[field]||''} onChange={e=>update(field,e.target.value)} placeholder={label} />
                  </div>
                ))}
                <div className="field">
                  <label className="label">Summary</label>
                  <textarea className="input textarea" value={cv.summary} onChange={e=>update('summary',e.target.value)} rows={4} placeholder="Professional summary…" />
                </div>
              </div>
            )}

            {/* Experience */}
            {activeTab === 'experience' && (
              <div className="form-section">
                <h3 className="form-heading">Work Experience</h3>
                {cv.experience.map(exp => (
                  <div className="card" key={exp.id}>
                    <button className="card-remove" onClick={()=>removeExp(exp.id)}>✕</button>
                    {[['Role / Position','role'],['Company','company'],['Period','period']].map(([ph,f]) => (
                      <input key={f} className="input" placeholder={ph} value={exp[f]} onChange={e=>updateExp(exp.id,f,e.target.value)} />
                    ))}
                    <textarea className="input textarea" placeholder="Description" value={exp.desc} onChange={e=>updateExp(exp.id,'desc',e.target.value)} rows={3} />
                  </div>
                ))}
                <button className="btn-add" onClick={addExp}>+ Add Experience</button>
              </div>
            )}

            {/* Education */}
            {activeTab === 'education' && (
              <div className="form-section">
                <h3 className="form-heading">Education</h3>
                {cv.education.map(edu => (
                  <div className="card" key={edu.id}>
                    <button className="card-remove" onClick={()=>removeEdu(edu.id)}>✕</button>
                    {[['Degree / Qualification','degree'],['School / University','school'],['Year','year']].map(([ph,f]) => (
                      <input key={f} className="input" placeholder={ph} value={edu[f]} onChange={e=>updateEdu(edu.id,f,e.target.value)} />
                    ))}
                  </div>
                ))}
                <button className="btn-add" onClick={addEdu}>+ Add Education</button>
              </div>
            )}

            {/* Skills */}
            {activeTab === 'skills' && (
              <div className="form-section">
                <h3 className="form-heading">Skills</h3>
                <div className="skills-input-row">
                  <input className="input" placeholder="Add a skill…" value={newSkill} onChange={e=>setNewSkill(e.target.value)} onKeyDown={e=>e.key==='Enter'&&addSkill()} />
                  <button className="btn-add-skill" onClick={addSkill}>Add</button>
                </div>
                <div className="skills-list">
                  {cv.skills.map(s => (
                    <span className="skill-tag" key={s}>
                      {s}<button className="skill-remove" onClick={()=>removeSkill(s)}>✕</button>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── Preview ──────────────────────────────────────────── */}
        <section className="preview">
          <div className="preview-scroll">
            <div className="cv-paper" ref={previewRef}>
              <ActiveTemplate cv={cv} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}