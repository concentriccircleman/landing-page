"use client";

import PageHeader from "@/components/page-header";
import FadeIn from "@/components/fade-in";

const Manifesto = () => {
  return (
    <section className="w-full px-6 max-w-3xl mx-auto">
      <PageHeader title="The Sentra Manifesto" />

      <FadeIn delay={100}>
        <div className="text-[15px] text-[#52525b] space-y-6 leading-relaxed mb-12">
          <p>
            <span className="font-semibold text-[#1a1a1f]">
              Enterprise General Intelligence
            </span>
          </p>
          <p>
            Every organization runs on intelligence, the decisions made in
            meetings, the context buried in threads, the commitments forged in
            conversation. Yet every enterprise tool stores only the shadows: the
            document after the decision, the ticket after the discussion, the
            CRM entry after the handshake. The originals, the interactions
            themselves, are thrown away.
          </p>
          <p>
            Sentra exists to change this. We are building Enterprise General
            Intelligence: infrastructure that captures organizational
            interactions at their source, extracts the intelligence within them,
            and turns every company into a system that learns, remembers, and
            acts on what it knows.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-t border-[#e8e8ec] pt-10 mb-12">
          <div className="text-[15px] text-[#52525b] space-y-6 leading-relaxed">
            <p>
              <span className="font-semibold text-[#1a1a1f]">
                The Core Insight
              </span>
            </p>
            <p>
              Intelligence lives in interactions, not documents. Every system of
              record, your CRM, your project tracker, your OKR tool, is
              derivative. They are downstream artifacts of conversations between
              people. The meeting where strategy shifted. The Slack thread where
              architecture was debated. The email where the commitment was made.
              These interactions carry intent, rationale, context, and
              causality. The artifacts carry none of it. The cost is staggering
              and invisible: decisions revisited because no one remembers why
              they were made, commitments slipping because they were never
              extracted, context evaporating when people leave.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-t border-[#e8e8ec] pt-10 mb-12">
          <div className="text-[15px] text-[#52525b] space-y-6 leading-relaxed">
            <p>
              <span className="font-semibold text-[#1a1a1f]">
                Why Organizational Memory Is Solvable
              </span>
            </p>
            <p>
              Personal memory is intractable, individuals have shifting,
              unpredictable utility functions. Organizations are different. They
              have a stable utility function: build products, generate revenue,
              serve customers. This makes defining &ldquo;what matters&rdquo;
    mathematically tractable. The core ontology reduces to six
              classes: Actors, Interactions, Decisions, Rationale,
              Commitments, and Value-Creating Objects, all indexed across time.
              Actors and Interactions are primary. Everything else is derived.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-t border-[#e8e8ec] pt-10 mb-12">
          <div className="text-[15px] text-[#52525b] space-y-6 leading-relaxed">
            <p>
              <span className="font-semibold text-[#1a1a1f]">
                System of Intelligence, Not System of Record
              </span>
            </p>
            <p>
              We are not adding a layer on top. We are replacing the underlying
              substrate. Today&apos;s enterprise stack is a patchwork of disconnected
              systems of record, each storing a partial, stale copy of
              organizational knowledge. Sentra captures interactions at their
              source, meetings, emails, messages, agent traces, and derives
              everything that currently lives in separate silos. CRMs, OKR
              platforms, performance reviews, knowledge management, all collapse
              into a single intelligence layer that is always current, always
              contextual, always complete.
            </p>
            <p>
              The interface is proactive and prompt-free. Sentra understands
              each person&apos;s role, the org structure, and what matters to them.
              It surfaces what deserves attention rather than waiting to be
              asked. A chief of staff for every person. A program manager for
              every team. No prompting required.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-t border-[#e8e8ec] pt-10 mb-12">
          <div className="text-[15px] text-[#52525b] space-y-6 leading-relaxed">
            <p>
              <span className="font-semibold text-[#1a1a1f]">
                The Research Foundation
              </span>
            </p>
            <p>
              This is not a product claim. It is a mathematically proven thesis,
              grounded in five research papers from the Sentra team.
            </p>
            <p>
              The Geometry of Forgetting shows that high-dimensional embedding
              spaces reproduce quantitative signatures of human memory,
              power-law forgetting, false recall, with no phenomenon-specific
              engineering. Forgetting arises from interference, not decay.
            </p>
            <p>
              The Price of Meaning proves the No-Escape Theorem:
              interference-driven forgetting cannot be eliminated without
              abandoning semantic organization or adding external structure.
              Scale alone does not solve this.
            </p>
            <p>
              The Semantic Memory Filesystem is the engineering answer, treating
              a POSIX filesystem as the deterministic substrate for
              organizational memory, with 4-channel parallel retrieval and
              provenance tracking. The key result: replacing frontier models
              with a 50x smaller model drops F1 by only 0.07, while retrieval
              architecture optimizations contribute +0.112 F1. Intelligence is
              in the architecture, not the model.
            </p>
            <p>
              Operational Reinforcement introduces Monitor MDPs for structured
              failure feedback, exact credit assignment by design, 300-900x
              memory advantage over reward machines.
            </p>
            <p>
              Avoidance Learning shows that substantive LLM behavior emerges
              from pure negative feedback, with 80% fewer evasive responses, and
              counter-intuitively, adding positive rewards degrades
              performance.
            </p>
            <p>
              Five papers. One thesis: structure and negation matter more than
              scale and reward.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-t border-[#e8e8ec] pt-10 mb-12">
          <div className="text-[15px] text-[#52525b] space-y-6 leading-relaxed">
            <p>
              <span className="font-semibold text-[#1a1a1f]">
                When Raw Intelligence Becomes a Commodity
              </span>
            </p>
            <p>
              The AI industry is converging on abundant, cheap intelligence.
              Foundation models are commoditizing. Inference costs are
              collapsing. When every company has access to frontier-level
              reasoning, the differentiator is no longer the model, it is how
              teams operate. Enterprise General Intelligence is the layer that
              turns commodity AI into organizational advantage: the memory, the
              context, the accumulated understanding of how your company works,
              what it has decided, and what it should do next.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-t border-[#e8e8ec] pt-10 mb-12">
          <div className="text-[15px] text-[#52525b] space-y-6 leading-relaxed">
            <p>
              <span className="font-semibold text-[#1a1a1f]">
                The Roadmap of Sentra within Organizations
              </span>
            </p>
            <p>
              Phase 1, Org Memory (Now -&gt; 6 months): Sentra knows the
              organization. Every interaction captured, every decision extracted,
              every commitment tracked. Day 1: meeting intelligence, enterprise
              search with full context, custom workflows. By Day 90: the primary
              hub for work initiation and monitoring.
            </p>
            <p>
              Phase 2, World Model (6 -&gt; 12 months): Sentra understands the
              organization. Causal models of how the company behaves, who
              influences what, which decisions led to which outcomes, where
              patterns repeat. Agents that causally interact with, learn from,
              and predict within a structured reality.
            </p>
            <p>
              Phase 3, Org-wide RL (12 -&gt; 18 months): Sentra becomes
              irreplaceable infrastructure. Reinforcement learning on what worked
              and what didn&apos;t. The system doesn&apos;t just remember, it improves,
              turning accumulated intelligence into a compounding advantage that
              deepens every day.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-t border-[#e8e8ec] pt-10 mb-12">
          <div className="text-[15px] text-[#52525b] space-y-6 leading-relaxed">
            <p>
              <span className="font-semibold text-[#1a1a1f]">
                Workflow Collapse
              </span>
            </p>
            <p>
              We do not engineer workflow automation. We make it inevitable.
              When an intelligence layer captures every commitment, tracks every
              dependency, and understands every person&apos;s context, workflows
              collapse on their own. The action layer is a natural consequence
              of the intelligence layer, not a separate product that needs to be
              bolted on.
            </p>
            <p>
              <span className="font-semibold text-[#1a1a1f]">
                Early Evidence
              </span>
            </p>
            <p>
              11 active design partners including teams at SoftBank, Runway, and
              Softmax. Over 10,000 meetings and 200,000 Slack messages
              processed. 20,000 decisions tracked. 35,000 commitments extracted.
              35 enterprises in active pipeline.
            </p>
            <p>
              &ldquo;The one thing Sentra does well that others don&apos;t is that Sentra
              can contextualize what&apos;s important for me to know.&rdquo;, Emmett Shear,
              CEO Softmax, Former CEO Twitch
            </p>
            <p>
              &ldquo;I consistently find the weekly reports good, useful. I enjoy
              reading them. Even when it doesn&apos;t tell me anything new, just
              having a story of what happened is actually quite useful.&rdquo;, Siqi
              Chen, CEO Runway, Former CEO Sandbox VR
            </p>
            <p>
              The enterprise software industry spent two decades building systems
              of record, static databases organized around artifacts that were
              already out of date the moment they were created. The next era
              belongs to systems of intelligence: living infrastructure that
              captures how organizations actually think, decide, and operate.
            </p>
            <p>
              We have the research. We have the architecture. We have the
              traction. We are not waiting for AGI to arrive and hoping it
              solves enterprise, we are building the intelligence layer that
              makes AGI useful for organizations. Sentra is Enterprise General
              Intelligence.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-l-2 border-[#2595ee] pl-6 mb-10">
          <p className="text-lg font-semibold tracking-tighter text-[#1a1a1f]">
            Sentra is Enterprise General Intelligence.
          </p>
        </div>
      </FadeIn>
    </section>
  );
};

export default Manifesto;
