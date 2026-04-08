"use client";

import PageHeader from "@/components/page-header";
import FadeIn from "@/components/fade-in";

const About = () => {
  return (
    <section className="w-full px-6 max-w-3xl mx-auto">
      <PageHeader title="So What is Sentra?" subtitle="Your team's superintelligence" />

      <FadeIn delay={100}>
        <p className="text-[15px] text-[#52525b] mb-8 leading-relaxed">
          Sentra is the central node in your team. By joining every meeting,
          talking with everybody regularly, and reading the same tools you use,
          she creates a unified company memory. Using this memory, Sentra makes
          sure everyone stays on the same page. Sentra can also be assigned
          jobs.
        </p>
      </FadeIn>

      <FadeIn delay={150}>
        <div className="bg-white border border-[#e8e8ec] p-6 rounded-sm mb-10 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
          <h3 className="text-base font-semibold text-[#1a1a1f] mb-4">
            Example Job Assignments
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-[14px] font-semibold text-[#1a1a1f]">VP of Product:</p>
              <p className="text-[14px] text-[#52525b] italic leading-relaxed">
                &quot;10min before every meeting, send me a brief with context on
                who/what/why.&quot;
              </p>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[#1a1a1f]">Account Executive:</p>
              <p className="text-[14px] text-[#52525b] italic leading-relaxed">
                &quot;...and also include a quick overview of this customer&apos;s
                journey. If it&apos;s a new prospect, research relevant facts
                online.&quot;
              </p>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[#1a1a1f]">Employee going on vacation:</p>
              <p className="text-[14px] text-[#52525b] italic leading-relaxed">
                &quot;I&apos;m on vacation for 2 weeks. Keep track of all stuff that
                moves, take my meetings for me, and debrief me once I&apos;m
                back.&quot;
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-t border-[#e8e8ec] pt-10 mb-12">
          <h2 className="text-xl font-semibold tracking-tighter text-[#1a1a1f] mb-4">
            Why Unified Company Memory Matters
          </h2>
          <p className="text-[15px] text-[#52525b] mb-6 leading-relaxed">
            Powered by unified company memory, Sentra has a deep understanding of
            the nuances and context behind how any job needs to be done for you.
            Individual workflows are often nuanced, dynamic, and complex - and
            without organizational context, even the smartest AI fails.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="border border-[#e8e8ec] bg-white p-6 rounded-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
              <h3 className="text-base font-semibold text-[#1a1a1f] mb-3">
                Without Company Memory
              </h3>
              <div className="text-[14px] text-[#52525b]">
                <p className="font-semibold text-[#1a1a1f] mb-1">Meeting brief request:</p>
                <p className="italic leading-relaxed">
                  &quot;Meeting with Sarah at 2pm about Q1 planning&quot;
                </p>
                <p className="text-[12px] text-[#a1a1aa] mt-2">
                  Generic, unhelpful - doesn&apos;t know Sarah is the head of
                  product, that Q1 planning was delayed due to budget
                  constraints, or that there&apos;s tension between engineering
                  and product teams.
                </p>
              </div>
            </div>

            <div className="border border-[#e8e8ec] bg-white p-6 rounded-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
              <h3 className="text-base font-semibold text-[#1a1a1f] mb-3">
                With Company Memory
              </h3>
              <div className="text-[14px] text-[#52525b]">
                <p className="font-semibold text-[#1a1a1f] mb-1">Meeting brief request:</p>
                <p className="italic leading-relaxed">
                  &quot;Meeting with Sarah (Head of Product) about Q1 planning.
                  Context: Planning delayed 3 weeks due to budget freeze.
                  Engineering bandwidth concerns raised in last 1:1. Sarah
                  mentioned prioritizing mobile features. Key decision needed
                  on feature scope.&quot;
                </p>
                <p className="text-[12px] text-[#a1a1aa] mt-2">
                  Actionable, contextualized, and addresses the real dynamics
                  at play.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="bg-white border border-[#e8e8ec] p-6 rounded-sm mb-10 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
          <h3 className="text-base font-semibold text-[#1a1a1f] mb-3">
            Real Example: Personalized Meeting Summaries
          </h3>
          <p className="text-[14px] text-[#52525b] mb-3 leading-relaxed">
            After team leader meetings, Sentra sends personalized summaries to
            each participant. For example, she might highlight:
          </p>
          <ul className="text-[14px] text-[#52525b] space-y-2">
            <li><strong className="text-[#1a1a1f]">Your commitments:</strong> &quot;Complete V2 Model validation by Friday&quot; (promises you made)</li>
            <li><strong className="text-[#1a1a1f]">Asks of you:</strong> &quot;Chris requested you connect with MIT team&quot; (requests from others)</li>
            <li><strong className="text-[#1a1a1f]">Your interests:</strong> Updates on interpretability research (based on your conversation history)</li>
            <li><strong className="text-[#1a1a1f]">Missed captures:</strong> OpenAI partnership discussion (mentioned 7 times, requiring your input)</li>
          </ul>
          <p className="text-[12px] text-[#a1a1aa] mt-3 italic">
            Without company memory, everyone would get the same generic
            summary. With it, each person gets exactly what they need to know.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-t border-[#e8e8ec] pt-10 mb-12">
          <h2 className="text-xl font-semibold tracking-tighter text-[#1a1a1f] mb-6">
            What Sentra Doesn&apos;t Do
          </h2>
          <div className="space-y-5">
            {[
              { title: "Sentra does not live on your computer", desc: "She does not have access to your device's data and activity." },
              { title: "Sentra does not make judgements on her own", desc: "Acting on missing information or incorrect assumptions only amplifies problems. Sentra will always ask for clarification if there's any uncertainty." },
              { title: "Sentra is not a replacement for humans", desc: "Rather, she is augmenting every person's workflow so they can do better work." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="text-[#a1a1aa] mt-0.5 text-[13px]">&#10005;</span>
                <div>
                  <h3 className="text-[14px] font-semibold text-[#1a1a1f] mb-1">{item.title}</h3>
                  <p className="text-[14px] text-[#52525b] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="flex items-start gap-3">
              <span className="text-[#a1a1aa] mt-0.5 text-[13px]">&#10005;</span>
              <div>
                <h3 className="text-[14px] font-semibold text-[#1a1a1f] mb-1">Sentra does not spy on you</h3>
                <p className="text-[14px] text-[#52525b] leading-relaxed">
                  She takes{" "}
                  <a href="/data-privacy" className="text-[#2595ee] hover:underline">
                    data privacy very seriously
                  </a>
                  , and ensures you remain in control of your data, keeping you protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="bg-white border border-[#e8e8ec] p-6 rounded-sm mb-8">
          <h3 className="text-base font-semibold text-[#1a1a1f] mb-2">
            Questions About How Sentra Works?
          </h3>
          <p className="text-[14px] text-[#52525b] leading-relaxed">
            Feel free to explore the rest of the website or reach out directly
            to <span className="font-semibold text-[#1a1a1f]">contact@sentra.app</span>
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <p className="text-[15px] text-[#52525b] mb-8 text-right">
          — Ashwin, Co-founder and CEO
        </p>
      </FadeIn>
    </section>
  );
};

export default About;
