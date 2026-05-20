import type { ReactNode } from 'react'

export default function Page() {
  return (
    <main id="top" className="mx-auto max-w-content px-6 py-20 md:py-28">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="mb-20 md:mb-28">
        <h1 className="text-2xl font-semibold mb-3 tracking-tight">
          Taynam Alzamel
        </h1>
        <p className="text-muted mb-7 leading-relaxed">
          Designer and engineer working in Riyadh, on systems that route around
          the constraints they were meant to solve for.
        </p>
        <p className="text-base">
          I&rsquo;m a software engineering graduate from Prince Sultan University,
          currently doing co-op product and AI work at Sarj AI in Riyadh. I work
          across research, system design, and AI prototyping &mdash; most often on
          problems where the existing solutions don&rsquo;t fit the environment
          they&rsquo;re meant to serve. I founded Ruwad earlier this year to help
          Syrian students compete in global engineering competitions. Its first
          team, EcoShaheen, is qualified for Shell Eco-marathon Doha.
        </p>
      </section>

      {/* ─── SELECTED WORK ───────────────────────────────────── */}
      <section className="mb-20 md:mb-28">
        <div className="mb-16">
          <h2 className="text-lg font-semibold">Selected work</h2>
          <p className="text-sm text-muted mt-1">Four projects, in order of recency.</p>
        </div>

        <div className="space-y-20 md:space-y-28">

          <CaseStudy
            slug="SARJ AI"
            title="Designing trust into Arabic voice agents"
            meta="7-month co-op · Quality, Product, AI Engineering · Tools shipped to internal teams and client-facing platform · 2024–2025"
          >
            {/* ── PASTE SARJ CASE STUDY HERE ── */}
            {/* H4 for internal section headings:
                "The company"
                "My role and the QA gap I designed around"
                "The headline project: redefining what counts as a 'failed' call"
                "Why I think this work mattered"
                "The other work"
                "What I'm taking from Sarj"
            */}
            <p>[Sarj case study content goes here]</p>
          </CaseStudy>

          <CaseStudy
            slug="RASD"
            title="Designing road-safety detection for the country it actually drives in"
            meta="Senior project · Prince Sultan University · Partners: CEER Motors, Riyadh Municipality · Now: incorporated as a startup · 2025"
          >
            {/* ── PASTE RASD CASE STUDY HERE ── */}
            <p>[RASD case study content goes here]</p>
          </CaseStudy>

          <CaseStudy
            slug="RUWAD & ECOSHAHEEN"
            title="Building a pathway that didn't exist"
            meta="Founded solo · Formal partnership with Damascus University · First flagship: EcoShaheen, qualified for Shell Eco-marathon Doha · 2025–present"
          >
            {/* ── PASTE RUWAD / ECOSHAHEEN CASE STUDY HERE ── */}
            <p>[Ruwad &amp; EcoShaheen case study content goes here]</p>
          </CaseStudy>

          <CaseStudy
            slug="ETMA'EN"
            title="Medication safety for a healthcare system that can't share data"
            meta="PSU AI Hackathon · 1st place under the Ministry of Health · Team of 4 · 4 interviews, 71 survey responses · 2024"
          >
            {/* ── PASTE ETMA'EN CASE STUDY HERE ── */}
            <p>[Etma&rsquo;en case study content goes here]</p>
          </CaseStudy>

        </div>
      </section>

      {/* ─── NOTES ───────────────────────────────────────────── */}
      <section className="mb-20 md:mb-28">
        <div className="mb-10">
          <h2 className="text-lg font-semibold">Notes</h2>
          <p className="text-sm text-muted mt-1">A piece of writing about how I think about my work.</p>
        </div>
        <h3 className="text-xl font-semibold mb-6 tracking-tight">
          On designing around constraints
        </h3>
        {/* ── PASTE REFLECTION ESSAY HERE ── */}
        <div className="space-y-5 text-base">
          <p>[Reflection essay content goes here]</p>
        </div>
      </section>

      {/* ─── ABOUT / CV ──────────────────────────────────────── */}
      <section className="mb-20 md:mb-28">
        <h2 className="text-lg font-semibold mb-8">About</h2>
        <div className="space-y-5">
          <p className="text-base">
            I&rsquo;m based in Riyadh. I studied Software Engineering at Prince Sultan
            University, with a track in AI and Data Science. Before that, I grew up in
            Syria. The two contexts &mdash; what I had access to in Riyadh and what
            students with my background in Damascus don&rsquo;t &mdash; shape most of
            the work I do.
          </p>
          <p className="text-base">
            The work that doesn&rsquo;t appear above includes the Saudi Space Agency
            case study competition (Best Solution, 2025), Industry 4.0 Lab where I&rsquo;ve
            been Programming Head since 2022, the Sahem Social Entrepreneurship Hackathon
            (1st place, King Khalid Foundation), VEX Robotics and Sumo Robot competitions
            at Saudi Robotics Federation and PSU, and the Shell Eco-marathon Autonomous
            entry I&rsquo;m currently leading as perception and software lead for
            PSU ECO TEAM III.
          </p>
          <p className="text-sm text-muted">
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              Download CV (PDF) &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* ─── CONTACT ─────────────────────────────────────────── */}
      <section className="mb-16">
        <h2 className="text-lg font-semibold mb-8">Contact</h2>
        <div className="space-y-2 text-base mb-6">
          <p>
            The best way to reach me is by email:{' '}
            <a href="mailto:taynamghz@gmail.com">taynamghz@gmail.com</a>
          </p>
          <p>
            <a
              href="https://linkedin.com/in/taynam-alzamel"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            {/* TODO: confirm LinkedIn URL slug */}
          </p>
        </div>
        <p className="text-base">
          I&rsquo;m in Riyadh and open to conversations about innovation work,
          AI product design, and regional engineering initiatives &mdash; particularly
          anything intersecting Vision 2030 with the design questions I&rsquo;m
          interested in.
        </p>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────── */}
      <footer className="pt-8 border-t border-gray-200 flex items-center justify-between text-sm text-muted">
        <span>
          &copy; 2026 Taynam Alzamel &middot;{' '}
          <a
            href="https://claude.ai/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted"
          >
            Built with Claude Code
          </a>
        </span>
        <a href="#top" className="text-muted">Back to top &uarr;</a>
      </footer>

    </main>
  )
}

/* ─── CaseStudy component ─────────────────────────────────── */

type CaseStudyProps = {
  slug: string
  title: string
  meta: string
  children: ReactNode
}

function CaseStudy({ slug, title, meta, children }: CaseStudyProps) {
  return (
    <article>
      <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-2">
        {slug}
      </p>
      <h3 className="text-xl font-semibold mb-1 tracking-tight">{title}</h3>
      <p className="text-sm text-muted italic mb-6">{meta}</p>
      <div className="case-body space-y-5 text-base">{children}</div>
    </article>
  )
}
