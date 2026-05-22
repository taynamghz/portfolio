import type { ReactNode } from 'react'
import SideNav from './components/SideNav'
import BackToTop from './components/BackToTop'

export default function Page() {
  return (
    <>
      <SideNav />

      <main id="top" className="mx-auto max-w-content px-6 py-20 md:py-28">

        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="mb-0">
          <div className="flex items-start justify-between gap-6 mb-7">
            <div>
              <h1 className="text-2xl font-semibold mb-3 tracking-tight">
                Taynam Alzamel
              </h1>
              <p className="text-muted leading-relaxed">
                Designer and engineer working in Riyadh, on systems that route around
                the constraints they were meant to solve for.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/me/about-taynam.jpg"
              alt="Taynam Alzamel"
              className="hidden md:block flex-shrink-0"
              style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 4 }}
            />
          </div>
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

        {/* ─── EPIGRAPH ─────────────────────────────────────────── */}
        <div className="flex justify-center" style={{ padding: '100px 0' }}>
          <p
            className="italic text-ink text-center"
            style={{
              fontSize: '1.4rem',
              letterSpacing: '0.02em',
              lineHeight: 1.4,
              maxWidth: 560,
            }}
          >
            The most useful thing I&rsquo;ve learned about design is that constraints
            aren&rsquo;t problems to remove. They&rsquo;re the shape of the answer.
          </p>
        </div>

        {/* ─── SELECTED WORK ───────────────────────────────────── */}
        <section className="mb-20 md:mb-28">
          <div>
            <h2 className="text-lg font-semibold">Selected work</h2>
            <p className="text-sm text-muted mt-1">Four projects, in order of recency.</p>
          </div>

          {/* ── Index ─────────────────────────────────────────── */}
          <div className="mt-20 mb-20">
            <ol className="space-y-3 pl-1">
              {[
                { id: 'sarj-ai', slug: 'Sarj AI', title: 'Designing trust into Arabic voice agents' },
                { id: 'rasd', slug: 'RASD', title: 'Designing road-safety detection for the country it actually drives in' },
                { id: 'etmaen', slug: 'Etma’en', title: "Medication safety for a healthcare system that can’t share data" },
                { id: 'ruwad', slug: 'Ruwad & EcoShaheen', title: "Building a pathway that didn’t exist" },
              ].map((item, i) => (
                <li key={item.id} className="flex gap-4 items-baseline pl-2">
                  <span className="text-muted text-sm tabular-nums flex-shrink-0 w-4">{i + 1}.</span>
                  <a href={`#${item.id}`} className="text-sm text-ink leading-relaxed">
                    {item.slug} &mdash; {item.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* ── Case Studies ──────────────────────────────────── */}
          <div>

            {/* ─ PROJECT 01: SARJ AI ──────────────────────────── */}
            <CaseStudy
              id="sarj-ai"
              slug="SARJ AI"
              title="Designing trust into Arabic voice agents"
              meta="7-month co-op · Quality, Product, AI Engineering · Tools shipped to internal teams and client-facing platform · 2024–2025"
              readTime="6 min read"
            >
              <h3>The company</h3>
              <p>
                Sarj is a Saudi AI startup building voice agents for GCC enterprise customers. The product is
                engineered around one specific bet: the agent should sound human enough that callers
                don&rsquo;t realize they aren&rsquo;t talking to one &mdash; and in dialect-level Saudi
                Arabic, with multi-dialect range plus English and Urdu. International voice AI doesn&rsquo;t
                reach that naturalness. A &ldquo;good enough&rdquo; Arabic agent isn&rsquo;t good enough; if
                the caller hears the wrong stress on a word, the illusion collapses, the trust collapses, and
                the client&rsquo;s brand takes the hit. Sarj is built around that gap.
              </p>
              <p>
                I joined as a co-op in QA and worked across the seven months into product and AI engineering.
                The work I&rsquo;ll describe here is the work I&rsquo;m proudest of &mdash; not the broadest,
                the most defining.
              </p>

              <h3>My role and the QA gap I designed around</h3>
              <p>
                When I arrived, the team didn&rsquo;t have a structured release process. New features &mdash;
                including client-facing ones &mdash; were being pushed straight to production. For a startup
                serving enterprise clients in real time, that pattern carried real risk. A broken integration
                didn&rsquo;t break a demo; it broke a client&rsquo;s live customer service operations.
              </p>
              <p>
                I designed and proposed a release process the team adopted: features get tested in a separate
                environment, against documented test cases with evidence captured, signed off by engineering
                before going to production. Beyond reducing incidents, the documentation doubles as onboarding
                material for new hires &mdash; which, at a 17-person company growing fast, matters more than
                it sounds.
              </p>
              <p>
                This is the kind of work that doesn&rsquo;t have a glamorous name, but it&rsquo;s the
                foundation everything else sits on. Service design at the team-operations level: identifying
                how a team actually works, where the gaps are, and redesigning the workflow so the gaps stop
                costing the business.
              </p>

              <CaseImage
                src="/images/sarj/sarj-roadmap.png"
                alt="Sarj QA roadmap diagram"
                caption="Roadmap for evolving Sarj's QA function from process foundation to continuous improvement."
                maxWidth={480}
                border
              />

              <h3>The headline project: redefining what counts as a &ldquo;failed&rdquo; call</h3>
              <p>
                The work I want to walk through in detail is the sentiment-aware call analysis system, because
                it&rsquo;s the clearest example of the kind of product thinking I want to keep doing.
              </p>
              <p>
                When I started, every call our voice agents handled was labeled binary: success or failure.
                The label fed directly into the KPI reports our clients saw. The problem with the labeling
                &mdash; which I noticed gradually across the QA work &mdash; is that it was structurally
                misleading. The agent could perform exactly as designed and still get marked as failure,
                because the caller was out of scope. Someone calling our client&rsquo;s customer service line
                for a question the agent wasn&rsquo;t built to handle would end the call unsatisfied; the
                label said the agent failed; the report said your AI is underperforming; the client thought
                they&rsquo;d bought a worse system than they had.
              </p>
              <p>
                The fix wasn&rsquo;t a better failure detector. It was a different question entirely: was
                this caller someone the agent was supposed to help in the first place?
              </p>
              <p>
                I proposed the reframe to my manager early. It wasn&rsquo;t prioritized &mdash; fair enough,
                in a small startup with a thousand things competing for attention. Then clients started
                complaining about their KPIs. My manager pulled the earlier proposal back to the top of the
                list and asked me to ship it.
              </p>
              <p>What I designed and built:</p>
              <ul>
                <li>
                  A sentiment analysis layer that runs across each call, using a classical sentiment model,
                  surfacing user state across the conversation (frustrated, satisfied, neutral, abandoning).
                </li>
                <li>
                  A scope-classification layer that reads the user&rsquo;s actual ask against what the agent
                  was built to handle, and identifies out-of-scope callers as a distinct category rather than
                  collapsing them into &ldquo;agent failure.&rdquo;
                </li>
                <li>
                  Automated reporting that flows the refined labels into the client-facing reports &mdash; so
                  clients now see how their AI agent is actually performing, not how it appears to perform when
                  out-of-scope traffic is counted against it.
                </li>
              </ul>
              <p>
                It shipped, it&rsquo;s used by the internal team, and it feeds into the reports clients see.
                Sarj didn&rsquo;t have sentiment analysis as part of the product before this; now it does.
              </p>

              <h3>Why I think this work mattered</h3>
              <p>
                The insight that took longer to land isn&rsquo;t the technical one. It&rsquo;s the framing
                one. The default move for a QA engineer faced with misleading metrics is to build a better
                failure detector. The harder move is to ask whether the metric itself is shaped wrong.
                Sarj&rsquo;s clients weren&rsquo;t getting a noisy signal; they were getting a structurally
                biased signal, and no amount of detection-tuning would have fixed it. The architecture of the
                measurement was the problem.
              </p>
              <p>
                That distinction &mdash; better measurement vs. different measurement &mdash; is the one
                I&rsquo;m taking forward into every product context I work in. It&rsquo;s the difference
                between solving the problem you&rsquo;ve been handed and solving the problem someone needed
                solved.
              </p>

              <h3>The other work</h3>
              <p>Across the seven months, I also built:</p>
              <ul>
                <li>
                  A label verification tool, integrated into the platform, for catching inconsistencies in how
                  training and evaluation data were tagged &mdash; which directly affected the quality of the
                  agents Sarj could ship.
                </li>
                <li>
                  Test scenario automation for evaluating new voice agent versions before deployment, so the
                  team didn&rsquo;t have to manually re-run conversational test cases each release.
                </li>
                <li>
                  QA traceability across all of the above &mdash; the documentation, evidence capture, and
                  sign-off layer that holds the release process together.
                </li>
              </ul>
              <p>
                I also moved between QA and feature-level engineering work as the team needed, testing
                platform endpoints, debugging integrations, and supporting new feature releases on the
                engineering side.
              </p>

              <p>Two things, both relevant to where I want to go next.</p>
              <p>
                The first is that the most useful work in a small AI company is rarely the work you were
                hired to do. I was hired as a co-op in QA. The work I&rsquo;m proudest of came from noticing
                things that weren&rsquo;t anyone&rsquo;s job to notice &mdash; the absence of a release
                process, the structural flaw in the call-labeling, the gap between what clients were seeing
                and what the agents were actually doing. None of that was assigned to me. All of it shipped
                because I proposed it.
              </p>
              <p>
                The second is that AI products live or die on trust, and trust is a design problem.
                Sarj&rsquo;s voice agents work because they sound human; the moment they don&rsquo;t, the
                product fails. The same is true at the metric layer: clients trust the product when the
                reports they see reflect what&rsquo;s actually happening. My job, when I look back on the
                seven months, was to design the systems that hold the trust together &mdash; the QA process
                that prevents broken features from reaching clients, the sentiment analysis that gives clients
                an honest read on their agents&rsquo; performance, the documentation that makes the work
                auditable.
              </p>
              <p>
                That&rsquo;s the kind of work I want to keep doing. AI is going to be deployed at scale
                across this region over the next few years, and almost all of it will rise or fall on whether
                the people deploying it can trust what it&rsquo;s doing. That&rsquo;s the design problem of
                the decade for the GCC, and it&rsquo;s the one I want to be in the middle of.
              </p>
            </CaseStudy>

            <Divider />

            {/* ─ PROJECT 02: RASD ─────────────────────────────── */}
            <CaseStudy
              id="rasd"
              slug="RASD"
              title="Designing road-safety detection for the country it actually drives in"
              meta="Senior project · Prince Sultan University · Partners: CEER Motors, Riyadh Municipality · Now: incorporated as a startup · 2025"
              readTime="5 min read"
            >
              {/* Hero image — immediately after metadata, before first section */}
              <CaseImage
                src="/images/rasd/rasd-presenting.jpg"
                alt="Presenting the RASD architecture on stage"
                caption="Presenting the RASD architecture, 2025."
                maxWidth={600}
              />

              <h3>The starting point</h3>
              <p>
                Saudi Arabia is building roads, vehicles, and a national EV brand faster than the systems
                designed to keep them safe can keep up. Unreported potholes and unregistered speed bumps
                damage cars, cause accidents, and create maintenance backlogs the Municipality can&rsquo;t
                see in real time. The longer a pothole stays unrepaired, the more it costs the city to fix.
              </p>
              <p>
                I wanted to build a system that detects these road anomalies, alerts the driver in the
                moment, and reports the location to the people responsible for fixing it. That was the
                original idea. What it became is something different &mdash; and that&rsquo;s the part this
                case study is about.
              </p>

              <h3>Why this needed real partners, not a lab</h3>
              <p>
                Existing ADAS (advanced driver-assistance) systems are built on computer vision pipelines
                tuned for European roads: high-contrast asphalt, vivid lane markings, regulated bump
                geometry. Saudi roads are a different problem. Faded paint, mixed surface conditions, illegal
                speed bumps with no standard dimensions, and potholes that come and go with construction
                cycles. A system trained in Europe doesn&rsquo;t transfer.
              </p>
              <p>
                I knew I couldn&rsquo;t validate this with a literature review. I needed engineers who had
                felt the problem in the field, and a public-sector stakeholder who would actually use the
                output. So I pitched the project to two of them.
              </p>

              <h3>Bringing CEER and the Municipality into the project</h3>
              <p>
                I reached out to CEER Motors, Saudi Arabia&rsquo;s first national EV brand, and pitched the
                team &mdash; and the idea &mdash; into a senior-project partnership with their ADAS and
                Technical Innovation departments. They agreed. Over the next 3&ndash;4 months, we ran weekly
                review cycles with senior managers, managers, and senior ADAS engineers, alternating between
                online sessions and presentations at CEER&rsquo;s headquarters.
              </p>
              <p>
                In parallel, we engaged Riyadh Municipality to understand the maintenance side of the
                problem. They told us about the real economic and operational cost of late pothole detection,
                and they gave us a requirement we hadn&rsquo;t anticipated: geolocate every detected speed
                bump so they could identify which ones were legal and which were unregistered installations.
                That single requirement reframed the project. We weren&rsquo;t building a driver-assist
                feature anymore. We were building infrastructure intelligence.
              </p>

              <CaseImage
                src="/images/rasd/rasd-team.jpg"
                alt="The RASD team in front of the project poster"
                caption="The RASD team at the project's final presentation. The CEER partnership is credited on the poster."
                maxWidth={600}
              />

              <StakeholdersCard />

              <h3>The insight that changed the design</h3>
              <p>
                Two things came out of working with CEER that shifted how I thought about the system.
              </p>
              <p>
                The first was a test drive in one of CEER&rsquo;s own vehicles, running their existing ADAS
                stack. Their stack, designed against European conditions, struggled in Saudi roads in the ways
                we expected &mdash; but seeing the failure modes in their car, rather than reading about
                them, made the gap concrete. Lane-marking-only detection can&rsquo;t be the foundation of
                perception in an environment where lane markings are often degraded or absent. The system
                needed to reason about the road geometrically, not just visually.
              </p>
              <p>
                The second was an honest piece of feedback in an early review: our camera choice wasn&rsquo;t
                industry-appropriate. We had picked based on what was available; production ADAS systems
                specify focal length, resolution, and mounting geometry to match the vehicle and the use
                case. We couldn&rsquo;t replace the hardware in our timeline, but we adapted around it
                &mdash; adjusting the algorithm and effective field of view in software, and redesigning the
                perception pipeline to compensate. CEER&rsquo;s engineers also pushed our software stack
                toward real automotive practice: better threading, more rigorous processing architecture,
                the kind of structure that would survive integration with a production vehicle rather than a
                benchtop demo.
              </p>

              <h3>What we ended up building</h3>
              <p>A two-tier perception and detection system, designed for Saudi road conditions:</p>
              <ul>
                <li>
                  Multi-signal lane and boundary detection &mdash; instead of relying on lane markings alone,
                  the system processes three signals in parallel: color-based marking detection,
                  surface-contrast detection (asphalt vs. surroundings), and geometric discontinuities from
                  depth data (kerbs, raised edges, sudden drops). RANSAC fits a continuous boundary from the
                  merged signal, so the system holds up when any single source is unreliable.
                </li>
                <li>
                  Real-time anomaly detection &mdash; potholes and speed bumps are detected via
                  computer-vision and LiDAR fusion, geolocated, and reported.
                </li>
                <li>
                  Two outputs for two stakeholders &mdash; driver alerts in the moment, and a geo-tagged
                  report stream the Municipality can use to prioritize repairs and audit unregistered speed
                  bumps.
                </li>
              </ul>
              <p>The system was demonstrated to CEER and reviewed twice formally by the Municipality.</p>

              <CaseImage
                src="/images/rasd/rasd-architecture.png"
                alt="RASD system architecture diagram"
                caption="System architecture: sensor fusion pipeline from camera and LiDAR inputs through real-time alert and cloud logging."
                maxWidth={600}
                border
              />

              <h3>The hardest part</h3>
              <p>
                The deadline. We were trying to deliver a V0 R&amp;D prototype at industry-credible quality,
                on a three-month university timeline. There was no version of this where we could ship
                everything we&rsquo;d scoped. The work was in deciding what to compress, what to defer, and
                what to hold the bar on &mdash; and being honest with both partners about what would and
                wouldn&rsquo;t be in the V0.
              </p>

              <h3>What it became</h3>
              <p>
                The project didn&rsquo;t end with the defense. Riyadh Municipality&rsquo;s framing of
                pothole-detection-as-cost-saving made it clear that what we had built wasn&rsquo;t a feature
                &mdash; it was a product the public sector would pay for. We are now incorporating RASD as a
                startup.
              </p>
              <p>The senior project is the V0 of a company.</p>

              <p>
                The thing I&rsquo;ll take into the next role: an ADAS system isn&rsquo;t a piece of software.
                It&rsquo;s a system that lives in a specific place, designed for the conditions of that
                place, accountable to the people who pay for the consequences of road damage. The decision
                that mattered most wasn&rsquo;t an algorithm choice &mdash; it was the choice to bring two
                stakeholders with very different problems into the same project early enough that the design
                could answer to both of them. The technical work followed from that.
              </p>
            </CaseStudy>

            <Divider />

            {/* ─ PROJECT 03: ETMA'EN ──────────────────────────── */}
            <CaseStudy
              id="etmaen"
              slug="ETMA'EN"
              title="Medication safety for a healthcare system that can't share data"
              meta="PSU AI Hackathon · 1st place under the Ministry of Health · Team of 4 · 4 interviews, 71 survey responses · 2024"
              readTime="3 min read"
            >
              <h3>The constraint everyone else was ignoring</h3>
              <p>
                A patient seeing three doctors at three hospitals in Saudi Arabia is, in effect, three
                different patients. Each hospital holds a partial view of their medication history. The
                conflict-checking only runs against what one system can see. The cost shows up as adverse
                drug events and avoidable readmissions.
              </p>
              <p>
                The obvious solution is to consolidate the data across hospitals. That solution isn&rsquo;t
                going to exist here. There&rsquo;s no legal framework for cross-hospital medical data
                sharing, and no individual hospital has the authority to participate in one. Every team
                I&rsquo;ve seen tackle this problem starts with &ldquo;we&rsquo;ll unify the records&rdquo;
                and stalls at the point where they realize unification isn&rsquo;t a technical problem
                &mdash; it&rsquo;s institutional.
              </p>
              <p>
                The question I steered the team toward, once I understood the gap: can you do
                medication-conflict checking without ever consolidating the data?
              </p>

              <h3>The idea: Apple Pay, but for medication safety</h3>
              <p>
                The architecture I proposed was borrowed from contactless payments. The patient&rsquo;s
                medication record lives on their own phone &mdash; not on a shared server, not in a
                cross-hospital database. When they visit a doctor or pharmacy, they tap a hardware reader at
                the point of care. The doctor&rsquo;s new prescription is passed to the patient&rsquo;s
                device. The conflict check runs on the patient&rsquo;s phone. What appears on the
                doctor&rsquo;s monitor is one piece of information: conflict, or no conflict.
              </p>
              <p>
                The clinician never sees the patient&rsquo;s history. The patient&rsquo;s data never leaves
                their device. The hospital never receives anything from another hospital. The safety check
                happens. The privacy holds.
              </p>
              <p>
                Privacy stops being a constraint and becomes a structural feature of the architecture.
                It&rsquo;s a small reframing with significant consequences &mdash; it makes the system
                implementable in environments where data consolidation isn&rsquo;t legally available, which
                is most of the world&rsquo;s healthcare systems, not just Saudi Arabia&rsquo;s.
              </p>

              <CaseImage
                src="/images/etmaen/etmaen-journey.png"
                alt="Etma'en user journey diagram"
                caption="User journey: how a patient and clinician experience a medication-conflict check at the point of care — from doctor's prescription through tap verification to pharmacy handoff."
                maxWidth={560}
                border
              />

              <h3>My role on the team</h3>
              <p>
                On a four-person team, I focused on the conceptual core and the hardware. I shaped the
                interview questions around the design hypotheses we needed to test, translated the research
                findings into a structured requirements set, and built the embedded hardware layer using
                Arduino and RFID &mdash; the clinician-side tap reader that made the architecture
                demonstrable. The Gemini API integration doubled as a chatbot interface, letting patients
                query their own history in natural language against data that never left the phone. My
                teammates owned the survey, much of the documentation, and the bulk of the interview
                write-ups; another teammate built the patient-facing app.
              </p>

              <h3>What we validated, and what I&rsquo;d do differently</h3>
              <p>
                The team ran formal usability evaluations on the app side with documented informed consent
                &mdash; including with Dr. Iman, a pharmacist participant. The hardware layer wasn&rsquo;t
                part of those evaluations. We ran out of timeline to put the full system in front of users,
                which is the gap I&rsquo;d close first in any next iteration.
              </p>
              <p>
                An earlier version of the design was over-engineered &mdash; I&rsquo;d pushed toward more
                hardware and more features without thinking about the cost of rolling it out hospital by
                hospital. We pulled it back to the simplest expression of the original idea: one tap, one
                device, one binary result. The discipline of designing for regulated, institutional
                environments turned out to be the discipline of removing things. Every feature you add is a
                feature someone has to pay for, train staff on, and justify to a procurement committee.
              </p>

              <p>
                Etma&rsquo;en won 1st place at the PSU AI Hackathon under the Ministry of Health&rsquo;s
                umbrella. What I take from the project is more specific than the win: the hardest problems
                in healthcare design aren&rsquo;t technical &mdash; they&rsquo;re institutional, legal, and
                cultural. The role of the designer isn&rsquo;t to build the best system in the abstract.
                It&rsquo;s to find the system that can actually exist inside the constraints the environment
                will impose.
              </p>

              <CaseImage
                src="/images/etmaen/etmaen-team.png"
                alt="The Etma'en team at the PSU AI Hackathon"
                caption="The Etma'en team at the PSU AI Hackathon under the Ministry of Health, 2024. From left: Mira Kasem, Aljowharah Aljubair, myself, Leen Hashem."
                maxWidth={600}
              />
            </CaseStudy>

            <Divider />

            {/* ─ PROJECT 04: RUWAD & ECOSHAHEEN ──────────────── */}
            <CaseStudy
              id="ruwad"
              slug="RUWAD & ECOSHAHEEN"
              title="Building a pathway that didn't exist"
              meta="Founded solo · Formal partnership with Damascus University · First flagship: EcoShaheen, qualified for Shell Eco-marathon Doha · 2025–present"
              readTime="5 min read"
            >
              <h3>Why this exists</h3>
              <p>
                I studied at Prince Sultan University in Riyadh. Across four years, I watched what&rsquo;s
                possible when students have access to the right institutional pathways.
                The Saudi Space Agency runs case study competitions. The Saudi Robotics Federation organizes
                international VEX tournaments. The Ministry of Environment runs Industry 4.0 hackathons.
                Shell Eco-marathon sends qualified teams to Doha. National OEMs like CEER take student senior
                projects seriously. The students around me &mdash; my age, my background &mdash; had
                hands-on technical experiences and global exposure because the infrastructure existed to give
                it to them.
              </p>
              <p>
                Students with my background in Syria don&rsquo;t have those pathways. Not because
                they&rsquo;re less capable. Because the conditions of the country &mdash; political,
                economic, infrastructural &mdash; have kept the education system in a state most students
                can&rsquo;t change. Meanwhile, the world outside is moving fast. Autonomous vehicles, AI,
                embedded systems, the same fields I&rsquo;ve been working in are reshaping the labor market
                and the geography of opportunity. Syrian students of my generation are sitting offline, in a
                development gap that compounds the longer it lasts.
              </p>
              <p>
                I came to a position I couldn&rsquo;t ignore: I&rsquo;d been given opportunities I
                didn&rsquo;t earn alone, in a country that built me up. Students like me
                &mdash; same age, same background &mdash; shouldn&rsquo;t be locked out of the same kind
                of growth because of where the lines on the map happen to fall. I started Ruwad to begin
                closing that gap, one team at a time.
              </p>

              <h3>What Ruwad is, honestly</h3>
              <p>
                Ruwad is an initiative I founded solo six months ago. It enables Syrian students to form
                teams and participate in global engineering competitions, with end-to-end support:
                institutional partnership, sponsorship outreach, training, logistics, and competition entry.
                It is currently operating with a formal, documented partnership with Damascus University and
                supporting one team &mdash; EcoShaheen &mdash; its first flagship project. It is not yet a
                registered NGO. It does not yet have multiple projects. It does not yet have a track record
                beyond what its first team is currently building.
              </p>
              <p>
                I&rsquo;m naming all of that plainly because the story isn&rsquo;t &ldquo;I&rsquo;ve built
                an organization.&rdquo; The story is &ldquo;I&rsquo;m in the early months of building one,
                and here&rsquo;s what the first six months have produced.&rdquo;
              </p>
              <p>
                What the first six months have produced is this: a formal partnership with a Syrian national
                university, a 10&ndash;20 person student engineering team formed and active, qualification
                for Shell Eco-marathon Doha, and an active sponsorship pipeline. That&rsquo;s the proof
                Ruwad is real &mdash; not just an idea.
              </p>

              <CaseImage
                src="/images/ecoshaheen/ecoshaheenlogos.png"
                alt="Ruwad and EcoShaheen logos"
                maxWidth={480}
              />

              <h3>EcoShaheen: the first flagship</h3>
              <p>
                EcoShaheen is a team of formally enrolled Damascus University students preparing to compete
                in Shell Eco-marathon Doha. The competition is an international energy-efficiency challenge
                &mdash; teams design, build, and race vehicles optimized for fuel efficiency, against teams
                from countries with decades of established pathways into this competition. The team is
                qualified. The vehicle work is underway. The remaining piece is the funding to actually get
                them to Doha.
              </p>
              <p>
                That funding has to come from sponsors. And the sponsorship process is itself a design
                problem, which is the part of EcoShaheen I&rsquo;m currently doing the most direct work on.
              </p>

              <CaseImage
                src="/images/ecoshaheen/ecoshaheen-team.JPG"
                alt="The EcoShaheen team at Shell Eco-marathon Doha"
                caption="Shell Eco-marathon technical inspection, where I competed with my Saudi team. That experience led me to found Ruwad and EcoShaheen."
                maxWidth={600}
              />

              <h3>The design problem inside the sponsorship proposal</h3>
              <p>
                The standard sponsorship pitch for a student engineering team goes: we&rsquo;re talented,
                this is the competition, here are the visibility benefits, please support us. That pitch is
                roughly the same regardless of which country the team comes from. The reason it works for
                some teams and fails for others is the sponsor&rsquo;s underlying read of risk: how likely
                is this team to actually show up at the competition, perform well, and represent the
                sponsor&rsquo;s brand the way they hope?
              </p>
              <p>
                For Syrian teams, that risk read is harder. There&rsquo;s no recent track record of
                comparable teams. The institutional context is unfamiliar to most corporate sponsors. The
                decision-making isn&rsquo;t &ldquo;back the favorite&rdquo; &mdash; it&rsquo;s
                &ldquo;decide whether to back something untested.&rdquo;
              </p>
              <p>
                I&rsquo;ve been reworking the sponsorship proposal around that reality. The pitch
                I&rsquo;m building now doesn&rsquo;t lead with the team&rsquo;s talent or the
                competition&rsquo;s prestige. It leads with three things the sponsor actually needs to know:
              </p>
              <ul>
                <li>
                  <em>Why now</em> &mdash; why this is the right moment, regionally, for a Syrian team to
                  be in this competition, and what shifts in the Syrian context make this credible rather
                  than aspirational.
                </li>
                <li>
                  <em>Concrete ROI</em> &mdash; specific, measurable reach and brand-visibility figures,
                  with the post-competition deliverables (case study materials, branded content, follow-on
                  coverage) spelled out as a partnership rather than a one-time logo placement.
                </li>
                <li>
                  <em>The post-competition plan</em> &mdash; what happens after Doha. Sponsoring a one-off
                  competition appearance is less attractive than sponsoring an entry point into something
                  with continuity. Ruwad&rsquo;s roadmap of future projects is part of what makes
                  sponsors&rsquo; investment durable.
                </li>
              </ul>
              <p>
                This is the most directly design-applicable piece of the EcoShaheen work, and the one
                I&rsquo;m most actively iterating on right now.
              </p>

              <h3>What I&rsquo;m learning</h3>
              <p>
                The most useful thing this work is teaching me is that founder-stage initiatives are an
                exercise in legitimacy design. When you start something new, with no track record, your
                first job isn&rsquo;t to do the work &mdash; it&rsquo;s to make the work look real enough
                that other people will engage with it. The Damascus University partnership wasn&rsquo;t just
                a logistical step; it was a legitimacy move. The qualification for Shell Eco-marathon
                wasn&rsquo;t just a competition entry; it was external validation. The sponsorship proposal
                isn&rsquo;t just a fundraising tool; it&rsquo;s the story you tell about who you are and
                what you&rsquo;re capable of, before you&rsquo;ve had a chance to prove it.
              </p>
              <p>
                The other thing I&rsquo;m learning, which is harder: you can&rsquo;t fix a structural
                problem with a single project. EcoShaheen is one team. Ruwad needs to be ten teams, then a
                hundred, then a recurring institution, before it changes anything at the level of the
                population it&rsquo;s trying to reach. I&rsquo;m six months in and one team deep. The
                honest position is to take this stage seriously without confusing it for the destination.
              </p>

              <p>
                The two things I&rsquo;ve been doing in parallel &mdash; building technical systems with
                industrial and government partners (RASD, Etma&rsquo;en, Sarj) and building institutional
                infrastructure for students who don&rsquo;t have access to those kinds of opportunities
                (Ruwad, EcoShaheen) &mdash; are the same work seen from two angles. Both are about designing
                systems that route around institutional gaps. Both require partnership with stakeholders who
                didn&rsquo;t have to say yes. Both depend on translating between people who don&rsquo;t
                usually talk to each other &mdash; engineers and government, students and sponsors, Syrian
                institutions and global competitions.
              </p>
              <p>That&rsquo;s the kind of work I want to keep doing.</p>
            </CaseStudy>

          </div>
        </section>

        {/* ─── NOTES ───────────────────────────────────────────── */}
        <section id="notes" className="mb-20 md:mb-28">
          <div className="mb-10">
            <h2 className="text-xl font-semibold">Notes</h2>
            <p className="text-base italic mt-2">A piece of writing about how I think about my work.</p>
          </div>
          <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-2">Essay</p>
          <h3 className="text-xl font-semibold mb-8 tracking-tight">
            On designing around constraints
          </h3>
          <div className="space-y-5 text-base">
            <p className="text-[1.1rem] leading-[1.85]">
              The first useful thing I learned about design didn&rsquo;t come from a design class. It came
              from sitting across from a CEER engineer who was explaining why their ADAS system, the one
              engineered in Europe by a serious team with serious budgets, didn&rsquo;t work on Saudi roads.
            </p>
            <p>
              The system relied on lane markings. Saudi roads, in many places, don&rsquo;t have lane
              markings &mdash; or have markings degraded enough to fail under standard computer vision. The
              asphalt is a different color than what the model was trained on. The road geometry is bumpier.
              There are speed bumps that nobody registered with the municipality. The European system
              wasn&rsquo;t a bad system. It was a system designed for a road that was somewhere else.
            </p>
            <p>
              The conventional response would have been to try to make our roads look more like European
              ones. The other response &mdash; the one we landed on with CEER &mdash; was to design a
              perception stack that doesn&rsquo;t depend on the road behaving the way you wish it would.
              Multi-signal lane detection that fuses color, surface contrast, and depth geometry. A system
              that holds up when any single signal fails, because something will always fail.
            </p>
            <p>
              That project, RASD, became a startup. But more usefully for me, it became a way of seeing.
            </p>
            <p>The same pattern keeps showing up in my work, in different domains.</p>
            <p>
              When my team and I built Etma&rsquo;en, a medication-safety system, the obvious move was to
              consolidate patient records across hospitals. The legal and institutional reality is that you
              can&rsquo;t. Cross-hospital data sharing isn&rsquo;t a technical problem in Saudi Arabia;
              it&rsquo;s a regulatory one with no near-term solution. Every team I&rsquo;ve watched tackle
              this problem starts with &ldquo;we&rsquo;ll unify the records&rdquo; and stalls. The
              architecture we ended up with &mdash; patient data lives only on the patient&rsquo;s phone,
              a tap-based hardware reader runs the conflict check locally, the clinician sees only a binary
              result &mdash; works because it doesn&rsquo;t ask anyone to do something they can&rsquo;t
              legally do. The constraint stopped being the blocker and became the feature.
            </p>
            <p>
              When I was at Sarj AI, working on QA for voice agents, I spent months watching client KPIs
              come out wrong. The agents were performing fine. The labels were broken. Every call ended up
              tagged as success or failure, and the failure tag was capturing both genuine agent errors and
              callers who simply weren&rsquo;t in the agent&rsquo;s scope. Clients were getting reports
              that misrepresented their own systems. The fix wasn&rsquo;t a better failure detector &mdash;
              that would have been more of the same. The fix was to design a different measurement entirely:
              sentiment-aware analysis that read the user&rsquo;s actual ask, classified scope separately
              from outcome, and gave clients an honest read of what their agents were doing. We weren&rsquo;t
              measuring better. We were measuring something else.
            </p>
            <p>
              And when I started Ruwad six months ago, the constraint I was looking at was harder than any
              of the technical ones. Syrian students of my generation don&rsquo;t have the institutional
              pathways into global engineering competitions that students in better-resourced countries do.
              Not because they&rsquo;re less capable. Because the conditions of the country &mdash;
              political, economic, infrastructural &mdash; have kept the education system in a gap most
              students can&rsquo;t change alone. The conventional response is to wait for the situation to
              improve. The other response is to start building the pathway now, in small pieces, with
              whatever institutional support you can earn. Ruwad currently has one team &mdash; EcoShaheen,
              qualified for Shell Eco-marathon Doha. It&rsquo;s not enough. The point of starting is that
              you can&rsquo;t get to enough by waiting.
            </p>
            <p>
              I think this is what innovation work actually is, when it&rsquo;s done well. It&rsquo;s the
              practice of looking carefully at why something doesn&rsquo;t work yet, and then refusing to
              accept the framing that something is impossible just because the obvious path is blocked. Most
              institutional gaps &mdash; the legal ones, the technical ones, the resource ones &mdash;
              aren&rsquo;t gaps in the strictest sense. They&rsquo;re constraints that the existing
              solutions were never designed to handle. A different design can sometimes route around them.
            </p>
            <p>
              What I&rsquo;ve come to believe, from four years of working across engineering, research,
              founding, and AI product work, is that the most useful skill in this kind of work isn&rsquo;t
              technical depth, though that helps. It isn&rsquo;t research methodology, though that&rsquo;s
              necessary. It&rsquo;s the willingness to take a constraint seriously enough to design something
              specific to it, rather than treating it as a reason to give up or as a reason to build a
              generic solution and hope the constraint goes away.
            </p>
            <p>
              This is the kind of work I want to keep doing. The region I&rsquo;m in is one of the most
              constrained design environments in the world right now &mdash; regulatory, cultural,
              infrastructural, geopolitical. It&rsquo;s also one of the most ambitious. Vision 2030
              isn&rsquo;t an abstraction; it&rsquo;s a set of bets that something can be built here that
              hasn&rsquo;t been built before, on timelines that don&rsquo;t allow for waiting. That&rsquo;s
              exactly the design problem I find interesting. It&rsquo;s the one I&rsquo;d like to spend my
              career on.
            </p>
          </div>
        </section>

        {/* ─── INTERFACE DESIGN ────────────────────────────────── */}
        <section id="interface-design" className="mb-20 md:mb-28">
          <div className="mb-10">
            <h2 className="text-xl font-semibold">Selected interface design</h2>
            <p className="text-base italic mt-2">
              Three projects in Figma and Cursor, across financial products, real-time telemetry,
              and retail systems. Included to show craft directly &mdash; design work needs to be
              seen, not only described.
            </p>
          </div>

          {/* ── INVST+ ────────────────────────────────────────── */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-2">
              INVST+ &middot; Financial Planning App
            </p>
            <h3 className="text-lg font-semibold mb-3 tracking-tight">
              Financial planning app, end-to-end
            </h3>
            <p className="text-base italic mb-8">
              A financial planning and investment app designed end-to-end as a course project.
              Covers onboarding, personalized goal-setting, budgeting visualization, and a crypto
              wallet dashboard. Visual system, typography, and component patterns mine.
            </p>
            {/* Phone mockups — row on desktop, stack on mobile */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-5">
              {['invst-1', 'invst-2', 'invst-3'].map((slug) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={slug}
                  src={`/images/addons/${slug}.png`}
                  alt={`INVST+ screen ${slug.slice(-1)}`}
                  className="w-full max-w-[280px] md:max-w-none md:flex-1"
                  style={{ maxHeight: 480, objectFit: 'contain' }}
                />
              ))}
            </div>
          </div>

          {/* ── PSU Telemetry ─────────────────────────────────── */}
          <div style={{ marginTop: 80 }}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-2">
              PSU ECO TEAM &middot; Real-Time Telemetry Dashboard
            </p>
            <h3 className="text-lg font-semibold mb-3 tracking-tight">
              Race-strategy dashboard, built with AI tools
            </h3>
            <p className="text-base italic mb-8">
              Real-time telemetry and race-strategy dashboard for PSU Eco Team III&rsquo;s Shell
              Eco-marathon entry. Live MQTT data streaming, GPS integration, and a connected ML
              model that surfaces driving cues for energy efficiency. Built end-to-end using Cursor
              and AI tools for rapid frontend development. Used in international competition.
            </p>
            <figure>
              <div style={{ maxWidth: 720, margin: '0 auto' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/addons/psu-telemetry.png"
                  alt="PSU Eco Team telemetry dashboard"
                  className="block w-full h-auto border border-gray-200"
                />
                <figcaption className="text-xs italic text-muted mt-2.5 text-center">
                  Live race telemetry view: efficiency, current speed, race timer, and GPS tracking,
                  with ML-driven efficiency cues.
                </figcaption>
              </div>
            </figure>
          </div>

          {/* ── SAJI ──────────────────────────────────────────── */}
          <div style={{ marginTop: 80 }}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-2">
              SAJI &middot; Multi-Role Retail System
            </p>
            <h3 className="text-lg font-semibold mb-3 tracking-tight">
              Retail platform across customer, B2B, and employee roles
            </h3>
            <p className="text-base italic mb-8">
              Home furnishings retailer digital surfaces, designed as a freelance engagement. The
              system spans customer-facing storefront, B2B account flow, customer account
              management, and an employee portal with role-based dashboards and performance
              tracking.
            </p>
            <div className="flex flex-col items-center gap-8">
              {['saji-1', 'saji-2', 'saji-3'].map((slug) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={slug}
                  src={`/images/addons/${slug}.png`}
                  alt={`SAJI screen ${slug.slice(-1)}`}
                  className="w-full"
                  style={{ maxWidth: 600 }}
                />
              ))}
            </div>
          </div>

          {/* Closing line */}
          <p className="text-xs italic text-muted text-center mt-16">
            Additional interactive prototypes and Figma files available on request.
          </p>
        </section>

        {/* ─── TOOLS AND CRAFT ──────────────────────────────────── */}
        <section id="tools" className="mb-20 md:mb-28">
          <h2 className="text-xl font-semibold mb-10">Tools and craft</h2>
          <div className="space-y-8 text-base leading-relaxed">
            <p>
              <em>Design.</em>{' '}
              Figma, Excalidraw, Adobe Creative Suite (growing proficiency).
            </p>
            <p>
              <em>AI prototyping.</em>{' '}
              Cursor, Claude, v0, Lovable. Comfortable building end-to-end working prototypes from
              a brief.
            </p>
            <p>
              <em>Research and facilitation.</em>{' '}
              Semi-structured interviews, survey design, usability evaluation, requirements
              engineering, stakeholder workshops.
            </p>
            <p>
              <em>Engineering.</em>{' '}
              Python, ROS2, embedded systems, computer vision, MQTT, real-time data pipelines.
              Used when needed to ship a prototype rather than describe one.
            </p>
          </div>
        </section>

        {/* ─── ABOUT / CV ──────────────────────────────────────── */}
        <section id="about" className="mb-20 md:mb-28">
          <h2 className="text-lg font-semibold mb-12">About</h2>
          <div className="flex justify-center mb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/me/about-taynam.jpg"
              alt="Taynam Alzamel"
              className="w-full md:w-[400px]"
            />
          </div>
          <p className="text-base mb-5">
            I&rsquo;m based in Riyadh, where I studied Software Engineering at Prince Sultan University with
            a track in AI and Data Science. I&rsquo;m Syrian by background, and the gap between what
            students here have access to and what students in Damascus often don&rsquo;t shapes most of the
            work I do.
          </p>
          <p className="text-base mb-5">
            The work that doesn&rsquo;t appear above includes the Saudi Space Agency case study competition
            (Best Solution, 2025), Industry 4.0 Lab where I&rsquo;ve been Programming Head since 2022, the
            Sahem Social Entrepreneurship Hackathon (1st place, King Khalid Foundation), VEX Robotics and
            Sumo Robot competitions at Saudi Robotics Federation and PSU, and the Shell Eco-marathon
            Autonomous entry I&rsquo;m currently leading as perception and software lead for PSU ECO
            TEAM III.
          </p>
          <p className="text-base mb-5">
            Most of my work sits at the intersection of AI, design, and institutional systems &mdash;
            figuring out how to build things in environments where the standard playbook doesn&rsquo;t fit.
            That&rsquo;s the work I want to keep doing.
          </p>
          <p className="text-sm text-muted">
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              Download CV (PDF) &rarr;
            </a>
          </p>
        </section>

        {/* ─── CONTACT ─────────────────────────────────────────── */}
        <section id="contact" className="mb-16">
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
            I&rsquo;m in Riyadh and open to conversations about innovation work, AI product design, and
            regional engineering initiatives &mdash; particularly anything intersecting Vision 2030 with the
            design questions I&rsquo;m interested in.
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

      <BackToTop />
    </>
  )
}

/* ─── Shared components ───────────────────────────────────── */

type CaseStudyProps = {
  id: string
  slug: string
  title: string
  meta: string
  readTime: string
  children: ReactNode
}

function CaseStudy({ id, slug, title, meta, readTime, children }: CaseStudyProps) {
  return (
    <article id={id}>
      <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-2">
        {slug}
      </p>
      <h3 className="text-xl font-semibold mb-1 tracking-tight">{title}</h3>
      <p className="text-sm text-muted italic mb-1">{meta}</p>
      <p className="text-xs text-muted mb-6">{readTime}</p>
      <div className="case-body space-y-5 text-base">{children}</div>
    </article>
  )
}

type CaseImageProps = {
  src: string
  alt: string
  caption?: string
  maxWidth?: number
  border?: boolean
}

function CaseImage({ src, alt, caption, maxWidth = 600, border = false }: CaseImageProps) {
  return (
    <figure>
      <div style={{ maxWidth, margin: '0 auto' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className={`block w-full h-auto${border ? ' border border-gray-200' : ''}`}
        />
        {caption && (
          <figcaption className="text-xs italic text-muted mt-2.5 text-center">
            {caption}
          </figcaption>
        )}
      </div>
    </figure>
  )
}

function ImagePlaceholder({
  label,
  caption,
  maxWidth = 480,
  border = false,
}: {
  label: string
  caption: string
  maxWidth?: number
  border?: boolean
}) {
  return (
    <figure>
      <div style={{ maxWidth, margin: '0 auto' }}>
        <div
          className={`flex items-center justify-center py-12 text-xs text-muted text-center px-6 leading-relaxed bg-gray-50 border-dashed border border-gray-300${border ? '' : ''}`}
        >
          {label}
        </div>
        <figcaption className="text-xs italic text-muted mt-2.5 text-center">
          {caption}
        </figcaption>
      </div>
    </figure>
  )
}

function StakeholdersCard() {
  return (
    <figure>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <div className="border border-gray-200 bg-white">
          <div className="grid grid-cols-2 divide-x divide-gray-200" style={{ minHeight: 200 }}>

            {/* Internal — label top, logo centered in remaining space */}
            <div className="flex flex-col items-center p-8">
              <p className="text-[9px] uppercase tracking-widest text-muted text-center">
                Internal Communication
              </p>
              <div className="flex flex-1 items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/rasd/clickuplogo.png"
                  alt="ClickUp"
                  style={{ width: 108, height: 30, objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* External — label top, logos centered in remaining space */}
            <div className="flex flex-col items-center p-8">
              <p className="text-[9px] uppercase tracking-widest text-muted text-center">
                External Communication
              </p>
              <div className="flex flex-1 flex-col items-center justify-center gap-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/rasd/ceer-new-logo.png"
                  alt="CEER Motors"
                  style={{ width: 108, height: 30, objectFit: 'contain' }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/rasd/municipality-logo.png"
                  alt="Riyadh Municipality"
                  style={{ width: 48, height: 48, objectFit: 'contain' }}
                />
              </div>
            </div>

          </div>
        </div>
        <figcaption className="text-xs italic text-muted mt-2.5 text-center">
          Stakeholder structure: ClickUp for internal team communication; CEER Motors and Riyadh
          Municipality as external partners.
        </figcaption>
      </div>
    </figure>
  )
}

function Divider() {
  return (
    <div className="flex justify-center" style={{ margin: '60px 0' }}>
      <span className="text-gray-300 text-xs select-none">◆</span>
    </div>
  )
}
