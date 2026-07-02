import { Helmet } from 'react-helmet-async'
import {
  ArrowRight,
  Camera,
  Check,
  CheckCircle2,
  Eye,
  Globe,
  Heart,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Monitor,
  PenTool,
  Phone,
  Scissors,
  Search,
  Sparkles,
  Star,
  TrendingUp,
  Video,
  MessageCircle,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import heroImg from './assets/moon.png.png'

function InstagramIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const navItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact']

const services = [
  {
    title: 'Social Media Marketing',
    description: 'Create campaigns that build loyalty and move your audience through every stage of the funnel.',
    icon: Megaphone,
  },
  {
    title: 'Website Development',
    description: 'Launch polished, high-performing websites that feel premium and convert visitors into leads.',
    icon: Monitor,
  },
  {
    title: 'SEO',
    description: 'Turn search intent into qualified opportunities with strategy that compounds over time.',
    icon: Search,
  },
  {
    title: 'Google Ads',
    description: 'Drive measurable growth with paid search designed around your pipeline and revenue goals.',
    icon: Search,
  },
  {
    title: 'Meta Ads',
    description: 'Capture attention quickly with creative paid social campaigns tailored to your audience.',
    icon: Megaphone,
  },
  {
    title: 'Branding',
    description: 'Shape a memorable brand experience that feels consistent, confident, and modern.',
    icon: PenTool,
  },
  {
    title: 'Content Creation',
    description: 'Produce scroll-stopping photos, graphics, and copy that keep your brand consistently visible.',
    icon: Camera,
  },
  {
    title: 'AI Automation',
    description: 'Streamline lead capture, follow-ups, and reporting with smart automation built around your funnel.',
    icon: Sparkles,
  },
  {
    title: 'Video Production',
    description: 'Plan, shoot, and produce brand films, ads, and reels that hold attention and drive action.',
    icon: Video,
  },
  {
    title: 'Editing',
    description: 'Sharp, high-retention edits for social, ads, and long-form content, delivered on your timeline.',
    icon: Scissors,
  },
]

const whyChoose = [
  'Trusted Team',
  'ROI Focused',
  'Creative Strategy',
  'Transparent Pricing',
  'Dedicated Support',
]

const industries = [
  { name: 'Real Estate', emoji: '🏢' },
  { name: 'Healthcare', emoji: '🏥' },
  { name: 'Restaurants & Cafés', emoji: '🍽️' },
  { name: 'Educational Institutes', emoji: '🎓' },
  { name: 'Retail Stores', emoji: '🛍️' },
  { name: 'Jewellery', emoji: '💎' },
  { name: 'Salons', emoji: '💇' },
  { name: 'Construction', emoji: '🏗️' },
  { name: 'Legal Services', emoji: '⚖️' },
  { name: 'Corporate Businesses', emoji: '🏬' },
  { name: 'E-Commerce', emoji: '🛒' },
  { name: 'Startups', emoji: '🚀' },
]

const outcomes = [
  { label: 'More Visibility', icon: Eye },
  { label: 'More Engagement', icon: Heart },
  { label: 'More Leads', icon: CheckCircle2 },
  { label: 'More Sales', icon: Megaphone },
  { label: 'More Growth', icon: TrendingUp },
]

const processSteps = ['Discovery', 'Strategy', 'Execution', 'Optimization', 'Growth']

const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/917985067854',
    icon: MessageCircle,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/vscmediaworks',
    icon: InstagramIcon,
  },
  {
    name: 'Email',
    href: 'mailto:vscmediaa@gmail.com',
    icon: Mail,
  },
]

const results = [
  { value: '100+', label: 'Clients' },
  { value: '300%', label: 'Average Growth' },
  { value: '50+', label: 'Websites' },
  { value: '1000+', label: 'Campaigns' },
]

const testimonials = [
  {
    name: 'Ava Patel',
    business: 'Luxe Studio',
    quote: 'The team brought structure, strategy, and creative clarity to a brand that needed to feel more premium.',
  },
  {
    name: 'Daniel Brooks',
    business: 'North Peak Co.',
    quote: 'Our funnel finally feels intentional. The launch campaign delivered leads within the first week.',
  },
  {
    name: 'Sofia Cruz',
    business: 'Harbor & Oak',
    quote: 'Every touchpoint feels refined, from the website to the launch assets. It has elevated the entire business.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showFloating, setShowFloating] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowFloating(!entry.isIntersecting),
      { threshold: 0.2 },
    )

    const target = document.getElementById('hero')
    if (target) observer.observe(target)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white text-text">
      <Helmet>
        <title>VSC Media Works | Premium Marketing Agency</title>
        <meta name="description" content="VSC Media Works creates premium digital marketing, branding, and web experiences that help ambitious brands grow." />
        <meta property="og:title" content="VSC Media Works | Premium Marketing Agency" />
        <meta property="og:description" content="VSC Media Works creates premium digital marketing, branding, and web experiences that help ambitious brands grow." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VSC Media Works | Premium Marketing Agency" />
        <meta name="twitter:description" content="VSC Media Works creates premium digital marketing, branding, and web experiences that help ambitious brands grow." />
        <link rel="canonical" href="https://vscmediaworks.com/" />
      </Helmet>

      <header className="sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-xl font-semibold tracking-tight text-dark" aria-label="VSC Media Works home">
            VSC<span className="text-brand">.</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-brand">
                {item}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#e04f1d] md:inline-flex">
            Book a Free Consultation
          </a>
          <button className="rounded-full border border-border p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu">
            <Menu size={18} />
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-border bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium text-muted">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section id="hero" className="relative mx-auto grid max-w-7xl gap-12 overflow-hidden px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 z-0 h-[42rem] w-[42rem] select-none opacity-[0.06] mix-blend-luminosity"
          />
          <div className="relative z-10 flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-sm text-muted">
              <span className="h-2.5 w-2.5 rounded-full bg-brand" /> Premium digital growth for ambitious brands
            </div>
            <h1 className="max-w-3xl font-heading text-5xl font-bold leading-[0.95] tracking-[-0.03em] text-dark sm:text-6xl lg:text-7xl">
              Marketing That Moves Brands.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
              We blend strategy, design, and performance to create campaigns that stand out and drive measurable growth.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#e04f1d]">
                Let&apos;s Talk <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3.5 font-semibold text-dark transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:text-brand">
                View Services
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted">
              <div className="flex items-center gap-2"><Check size={16} className="text-brand" /> Strategy-led execution</div>
              <div className="flex items-center gap-2"><Check size={16} className="text-brand" /> Full-funnel marketing</div>
              <div className="flex items-center gap-2"><Check size={16} className="text-brand" /> Premium creative support</div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
              <div className="rounded-[1.5rem] border border-border bg-white p-6">
                <div className="aspect-[4/5] rounded-[1.25rem] bg-[radial-gradient(circle_at_top_left,_#ff9b74,_#ffffff_60%)] p-6">
                  <div className="flex h-full flex-col justify-between rounded-[1rem] border border-border bg-white/80 p-5 shadow-sm">
                    <div>
                      <div className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-sm font-medium text-brand">Growth Studio</div>
                      <h2 className="mt-4 font-heading text-3xl font-bold text-dark">Built for bold, modern brands.</h2>
                      <p className="mt-3 text-sm text-muted">From launch campaigns to long-term growth, we turn attention into momentum.</p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-border bg-surface p-4">
                        <p className="text-2xl font-semibold text-dark">500+</p>
                        <p className="text-sm text-muted">Campaigns</p>
                      </div>
                      <div className="rounded-2xl border border-border bg-surface p-4">
                        <p className="text-2xl font-semibold text-dark">200+</p>
                        <p className="text-sm text-muted">Happy Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
              <img src={heroImg} alt="Moon illustration" className="h-full w-full rounded-[1.5rem] object-cover border border-border" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">About VSC</p>
              <h2 className="mt-4 font-heading text-3xl font-bold text-dark sm:text-4xl">Who we are</h2>
              <p className="mt-5 text-lg text-muted">We are a boutique agency helping founders and brands sharpen their story, expand their reach, and generate measurable results through thoughtful digital marketing.</p>
              <p className="mt-6 rounded-3xl border border-border bg-white px-6 py-5 text-base font-semibold text-dark shadow-sm">
                "<strong>At VSC, we believe every brand deserves a story that makes people smile, trust, and choose you first.</strong>" — Vishisht Singh Chauhan
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {['Mission', 'Vision', 'Growth'].map((item) => (
                  <div key={item} className="rounded-2xl border border-border bg-white p-4 shadow-sm">
                    <p className="font-semibold text-dark">{item}</p>
                    <p className="mt-2 text-sm text-muted">Modern positioning with lasting impact.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Services</p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-dark sm:text-4xl">Solutions tailored to your next chapter.</h2>
            <p className="mt-4 text-lg text-muted">Every engagement is structured around performance, clarity, and premium execution.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.title} className="group rounded-[1.5rem] border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-dark">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center text-sm font-semibold text-brand transition hover:gap-2">
                    Learn More <ArrowRight className="ml-1" size={16} />
                  </a>
                </article>
              )
            })}
          </div>
        </section>

        <section id="whychoose" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-border bg-surface p-8 sm:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Why Choose Us</p>
              <h2 className="mt-4 font-heading text-3xl font-bold text-dark sm:text-4xl">A calm, strategic partner for ambitious growth.</h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {whyChoose.map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-3 h-10 w-10 rounded-full bg-brand/10" />
                  <h3 className="font-semibold text-dark">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="outcome" className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">The Outcome</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-bold text-dark sm:text-4xl">
            Marketing That Delivers More Than Likes.
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {outcomes.map((outcome) => {
              const Icon = outcome.icon
              return (
                <div
                  key={outcome.label}
                  className="flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <Icon size={18} className="text-brand" />
                  <span className="font-semibold text-dark">{outcome.label}</span>
                </div>
              )
            })}
          </div>
        </section>

        <section id="portfolio" className="bg-[#FCE8DB] py-20">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Who We Work With</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-bold text-dark sm:text-4xl">
              Helping Every Industry Grow Digitally
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="text-lg leading-none">{industry.emoji}</span>
                  <span className="font-semibold text-dark">{industry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-border bg-white p-8 shadow-soft sm:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Work Process</p>
              <h2 className="mt-4 font-heading text-3xl font-bold text-dark sm:text-4xl">A clear path from insight to impact.</h2>
            </div>
            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              {processSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-4 md:flex-col md:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-semibold text-white">{index + 1}</div>
                  <div className="text-dark">{step}</div>
                  {index < processSteps.length - 1 && <ArrowRight className="hidden text-brand md:block" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-border bg-dark px-8 py-12 text-white sm:px-10">
            <div className="grid gap-8 md:grid-cols-4">
              {results.map((result) => (
                <div key={result.label} className="text-center">
                  <p className="font-heading text-4xl font-bold text-brand">{result.value}</p>
                  <p className="mt-2 text-sm text-gray-300">{result.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Testimonials</p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-dark sm:text-4xl">What clients say about working with us.</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-[1.5rem] border border-border bg-white p-7 shadow-sm">
                <div className="flex gap-1 text-brand">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-muted">"{item.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 font-semibold text-brand">
                    {item.name.split(' ').map((part) => part[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-dark">{item.name}</p>
                    <p className="text-sm text-muted">{item.business}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] bg-brand px-8 py-14 text-white sm:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">CTA</p>
                <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">Ready to grow your brand?</h2>
                <p className="mt-4 text-lg text-white/80">Let&apos;s build a smarter, more premium digital presence together.</p>
              </div>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 font-semibold text-brand transition hover:-translate-y-1">
                Book Consultation <ArrowRight className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col items-center gap-6 rounded-[2rem] border border-border bg-surface px-8 py-12 text-center sm:px-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
              <MessageCircle size={28} />
            </div>
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">For Freelancers</p>
              <h2 className="mt-4 font-heading text-3xl font-bold text-dark sm:text-4xl">Join our WhatsApp channel for freelancers.</h2>
              <p className="mt-4 text-lg text-muted">Get project leads, collaboration opportunities, and updates from VSC Media Works straight to your phone.</p>
            </div>
            <a
              href="https://whatsapp.com/channel/0029VbCzJzPBqbr1jHpmi60j"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
            >
              Join the Channel <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-border bg-surface p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Contact</p>
              <h2 className="mt-4 font-heading text-3xl font-bold text-dark sm:text-4xl">Let&apos;s talk about your next move.</h2>
              <div className="mt-8 space-y-4 text-muted">
                <div className="flex items-center gap-3"><MapPin size={18} className="text-brand" /> 125, Prime Plaza, Munshi Pulia, Lucknow, Uttar Pradesh</div>
                <div className="flex items-center gap-3"><Phone size={18} className="text-brand" /> <a href="tel:+917985067854" className="transition hover:text-brand">+91 79850 67854</a></div>
                <div className="flex items-center gap-3"><Mail size={18} className="text-brand" /> <a href="mailto:vscmediaa@gmail.com" className="transition hover:text-brand">vscmediaa@gmail.com</a></div>
                <div className="flex items-center gap-3"><Globe size={18} className="text-brand" /> <a href="https://www.vscmediaworks.com" target="_blank" rel="noreferrer" className="transition hover:text-brand">www.vscmediaworks.com</a></div>
              </div>
              <div className="mt-8 h-48 overflow-hidden rounded-[1.25rem] border border-border">
                <img
                  src={heroImg}
                  alt="Moon illustration"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 rounded-[2rem] border border-border bg-surface p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Reach Out Directly</p>
              <div className="flex items-center gap-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className="group flex h-16 w-16 items-center justify-center rounded-full border border-border bg-white text-brand shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-white hover:shadow-soft"
                    >
                      <Icon size={26} />
                    </a>
                  )
                })}
              </div>
              <p className="text-sm text-muted">Tap an icon to WhatsApp, DM, or email us — whichever's easiest.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <a href="#home" className="text-xl font-semibold tracking-tight text-dark">VSC<span className="text-brand">.</span></a>
            <p className="mt-2 text-sm text-muted">Premium marketing, strategic design, and growth support.</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-muted">
            <a href="#services" className="transition hover:text-brand">Services</a>
            <a href="#contact" className="transition hover:text-brand">Contact</a>
            <a href="https://whatsapp.com/channel/0029VbCzJzPBqbr1jHpmi60j" target="_blank" rel="noreferrer" className="transition hover:text-brand">Freelancer Channel</a>
          </div>
          <div className="flex gap-3 text-muted">
            <a href="#" aria-label="Instagram" className="rounded-full border border-border p-2 transition hover:border-brand hover:text-brand"><Globe size={16} /></a>
            <a href="#" aria-label="LinkedIn" className="rounded-full border border-border p-2 transition hover:border-brand hover:text-brand"><Globe size={16} /></a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-border p-2 transition hover:border-brand hover:text-brand"><Globe size={16} /></a>
          </div>
        </div>
      </footer>

      <div className={`fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 transition-all duration-300 ${showFloating ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 pointer-events-none'}`}>
        <a
          href="https://instagram.com/vscmediaworks"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-brand shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:text-white"
        >
          <InstagramIcon size={20} />
        </a>
        <a
          href="tel:+917985067854"
          aria-label="Call us"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-brand shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:text-white"
        >
          <Phone size={20} />
        </a>
        <a
          href="mailto:vscmediaa@gmail.com"
          aria-label="Email us"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-brand shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:text-white"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://wa.me/917985067854"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-all duration-300 hover:-translate-y-1"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
          <MessageCircle size={28} className="relative" />
        </a>
      </div>
    </div>
  )
}

export default App