"use client";

import PageHeader from "@/components/page-header";
import FadeIn from "@/components/fade-in";

interface PublicationProps {
  title: string;
  authors: string;
  venue: string;
}

const Publication = ({ title, authors, venue }: PublicationProps) => (
  <div>
    <p className="font-medium text-foreground leading-snug">{title}</p>
    <p className="text-sm text-muted mt-1">{authors}</p>
    <p className="text-sm text-muted italic mt-0.5">{venue}</p>
  </div>
);

const Research = () => {
  return (
    <article className="w-full px-6 max-w-2xl mx-auto">
      <PageHeader
        title="Research"
        subtitle="Building the mathematical and architectural foundations for enterprise memory, alignment, and intelligence."
      />

      <FadeIn delay={100}>
        <div className="text-base leading-8 text-secondary space-y-6 mb-16">
          <p>
            Enterprise AI fails not because models are too small, but because
            they have no structured memory and no principled way to learn from
            failure. Every organization runs on decisions, commitments, and
            rationale, yet the systems meant to serve them forget, hallucinate,
            and cannot distinguish what happened from what almost happened.
          </p>
          <p>
            Sentra&apos;s research program exists to solve this. We study the
            mathematics of why memory systems fail, prove what is and
            isn&apos;t possible, and build architectures that turn those
            impossibility results into engineering specifications.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-6">
            Our Thesis: The Intelligence Is in the Architecture
          </h2>
          <div className="text-base leading-8 text-secondary space-y-6">
            <p>
              The AI industry is hypnotized by scale&mdash;the assumption that
              bigger models, trained on more data, will eventually solve every
              problem. Sentra&apos;s thesis is different. We believe that
              structured negative feedback and careful architectural design
              matter more than model size. Defining what a system should avoid
              is often more tractable, and more robust, than defining what it
              should prefer. A 50&times; smaller model in the right architecture
              can match a frontier model in the wrong one. Pure negative
              feedback can produce better behavior than carefully balanced
              reward.
            </p>
            <p>
              These are not intuitions; they are results&mdash;proven
              mathematically and demonstrated empirically across our five
              foundational papers.
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand mb-3">
            Act I
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-6">
            The Physics of Memory Failure
          </h2>

          <div className="text-base leading-8 text-secondary space-y-6">
            <h3 className="text-xl font-medium tracking-tight text-foreground">
              The Geometry of Forgetting
            </h3>
            <p>
              Why do AI systems forget? The standard answer&mdash;insufficient
              context window, stale embeddings, poor retrieval&mdash;treats
              forgetting as a software bug to be patched. Our first paper shows
              it is something deeper: a geometric inevitability.
            </p>
            <p>
              When memories are stored as vectors in high-dimensional space,
              forgetting and false recall emerge from the geometry itself. We
              demonstrate that a simple embedding-based memory, with no
              phenomenon-specific engineering, reproduces the quantitative
              signatures of human memory with striking fidelity. The system
              exhibits power-law forgetting with an exponent of{" "}
              <span className="font-medium text-foreground">b&nbsp;=&nbsp;0.460</span>,
              closely matching the human value of{" "}
              <span className="font-medium text-foreground">b&nbsp;&asymp;&nbsp;0.5</span>{" "}
              established in decades of cognitive research. Remove competing
              memories and the exponent drops to 0.009&mdash;fifty times
              smaller. Time alone does not produce forgetting. Competition does.
            </p>
            <p>
              The system also generates false memories. Tested on the classic
              DRM paradigm, our unmodified pre-trained embeddings produce a
              false alarm rate of{" "}
              <span className="font-medium text-foreground">0.583</span>,
              compared to ~0.55 in human subjects, with zero parameter tuning.
              Perhaps most consequentially, we show that production embedding
              models operating in 384 to 1,024 nominal dimensions concentrate
              their variance in only{" "}
              <span className="font-medium text-foreground">~16 effective dimensions</span>.
              This &ldquo;dimensionality illusion&rdquo; means the geometric
              pathologies that cause forgetting and false recall are far more
              severe than the raw dimension count suggests.
            </p>
          </div>

          <div className="text-base leading-8 text-secondary space-y-6 mt-10">
            <h3 className="text-xl font-medium tracking-tight text-foreground">
              The Price of Meaning
            </h3>
            <p>
              If forgetting is geometric, can better geometry fix it? Our second
              paper proves the answer is no&mdash;at least not within the
              paradigm most AI systems use today. The{" "}
              <span className="font-medium text-foreground">No-Escape Theorem</span>{" "}
              establishes that within any semantically continuous,
              kernel-threshold memory system, interference-driven forgetting and
              false recall cannot be eliminated without either abandoning
              semantic organization entirely or adding an external symbolic
              structure.
            </p>
            <p>
              We test this across five architecturally distinct memory systems,
              organized into three categories. Pure geometric systems express
              the vulnerability directly as smooth, predictable forgetting.
              Systems that add reasoning overlays partially compensate, but
              convert graceful degradation into brittle, cliff-edge failure.
              Only systems that sacrifice semantic generalization escape
              interference&mdash;but at the cost of the very capability that
              makes semantic memory useful.
            </p>
            <div className="border-l-2 border-brand pl-6 my-8">
              <p className="text-lg font-medium text-foreground leading-snug">
                Scale alone moves a system along a tradeoff surface where
                forgetting and usefulness are fundamentally coupled. To break
                free, you need a different kind of architecture.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand mb-3">
            Act II
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-6">
            The Deterministic Substrate
          </h2>

          <div className="text-base leading-8 text-secondary space-y-6">
            <h3 className="text-xl font-medium tracking-tight text-foreground">
              Semantic Memory Filesystem
            </h3>
            <p>
              The No-Escape Theorem doesn&apos;t just identify the
              problem&mdash;it prescribes the solution. If you cannot eliminate
              interference within a purely semantic system, you must add
              external symbolic structure. The Semantic Memory Filesystem (SMF)
              is our engineering answer: a system that treats the POSIX
              filesystem&mdash;directories, files, and symbolic
              links&mdash;as the primary substrate for organizational memory.
            </p>
            <p>
              SMF maps a six-class organizational ontology onto filesystem
              primitives, using bidirectional symbolic links as explicit
              relational edges. A recursive six-stage LLM pipeline extracts and
              structures information with provenance tracking and
              multiplicative confidence decay. Retrieval operates through four
              parallel channels&mdash;BM25, semantic embeddings, graph
              traversal, and temporal filtering&mdash;each compensating for the
              others&apos; blind spots.
            </p>
            <div className="border-l-2 border-brand pl-6 my-8">
              <p className="text-lg font-medium text-foreground leading-snug">
                Replacing a frontier model with one 50&times; smaller drops F1
                by only 0.07, while retrieval optimizations alone contribute
                +0.112 F1. The intelligence is in the architecture, not the
                model.
              </p>
            </div>
            <p>
              SMF reduces the language model&apos;s job to reading
              comprehension&mdash;a task that small, fast, cost-effective models
              handle well. This is how you build enterprise systems that are
              accurate, auditable, and economically viable.
            </p>
            <p>
              This architectural completeness has a direct product consequence:
              because the ontology captures the primitives from which downstream
              systems of record are derived, artifacts those systems produce are
              in principle reconstructable from the SMF substrate.
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand mb-3">
            Act III
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-6">
            The Optimization and Alignment Engine
          </h2>

          <div className="text-base leading-8 text-secondary space-y-6">
            <h3 className="text-xl font-medium tracking-tight text-foreground">
              Operational Reinforcement
            </h3>
            <p>
              A memory that never forgets is necessary but not sufficient.
              Systems must also learn from what goes wrong. Operational
              Reinforcement introduces Monitor MDPs, a formalism where failure
              conditions are specified as structured monitors rather than as
              scalar reward signals. This yields exact credit assignment by
              design, not by learning: when a failure occurs, the system knows
              precisely which decision caused it.
            </p>
            <p>
              The architectural payoff is dramatic. Monitor MDPs collapse the
              state space from{" "}
              <span className="font-medium text-foreground">
                O(|S|<sup>k</sup>)
              </span>{" "}
              to{" "}
              <span className="font-medium text-foreground">O(k)</span>,
              delivering a{" "}
              <span className="font-medium text-foreground">
                300&ndash;900&times; memory advantage
              </span>{" "}
              over conventional reward machines. More remarkably, pure failure
              avoidance&mdash;with no goal reward whatsoever&mdash;produces
              goal-directed behavior. The agent doesn&apos;t need to be told
              what to do; it only needs to know what to avoid. The goals emerge.
            </p>
          </div>

          <div className="text-base leading-8 text-secondary space-y-6 mt-10">
            <h3 className="text-xl font-medium tracking-tight text-foreground">
              Avoidance Learning
            </h3>
            <p>
              If Operational Reinforcement shows that avoidance works in MDPs,
              Avoidance Learning asks whether the same principle applies to
              language models. Can you align an LLM using only negative
              feedback&mdash;no positive examples, no reward shaping, no
              RLHF-style preference pairs?
            </p>
            <p>
              The answer is yes, but with a critical caveat. We first prove the{" "}
              <span className="font-medium text-foreground">
                Silence Loophole theorem
              </span>
              : any purely content-based negative feedback system admits trivial
              fixed points&mdash;the model can satisfy all constraints by saying
              nothing. This result generalizes beyond our method to unlearning,
              guardrails, and Constitutional AI. Our solution closes the
              loophole, achieving an{" "}
              <span className="font-medium text-foreground">
                80% reduction in evasive responses
              </span>{" "}
              while preserving safety and truthfulness.
            </p>
            <div className="border-l-2 border-brand pl-6 my-8">
              <p className="text-lg font-medium text-foreground leading-snug">
                Adding positive rewards degrades performance. Negative feedback
                alone suffices for substance, safety, and factual accuracy. For
                enterprise AI, where getting things right matters more than
                sounding right, this distinction is fundamental.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand mb-3">
            Act IV
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-6">
            World Models
          </h2>
          <div className="text-base leading-8 text-secondary space-y-6">
            <p>
              Memory and alignment are the foundation. The next frontier is
              understanding: agents that don&apos;t just recall and respond, but
              build causal models of how organizations actually work. Using the
              SMF architecture as substrate, our ongoing research develops world
              models for AI agents that interact with structured, persistent
              reality&mdash;predicting the downstream consequences of decisions,
              identifying when commitments are drifting, and understanding the
              causal chains that connect individual actions to organizational
              outcomes. This is the path from memory to intelligence.
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-8">
            Publications
          </h2>
          <div className="space-y-8">
            <Publication
              title="The Geometry of Forgetting: How High-Dimensional Embeddings Reproduce Human Memory Phenomena"
              authors="Sambartha Ray Barman, Andrey Starenky, Sophia Bodnar, Nikhil Narasimhan, Ashwin Gopinath"
              venue="arXiv preprint, March 2026"
            />
            <Publication
              title="The Price of Meaning: Impossibility Theorems for Semantic Memory Systems"
              authors="Sambartha Ray Barman, Andrey Starenky, Sophia Bodnar, Nikhil Narasimhan, Ashwin Gopinath"
              venue="arXiv preprint, March 2026"
            />
            <Publication
              title="Semantic Memory Filesystem: Deterministic Organizational Memory Through Filesystem Primitives"
              authors="Sambartha Ray Barman, Andrey Starenky, Sophia Bodnar, Nikhil Narasimhan, Ashwin Gopinath"
              venue="arXiv preprint, April 2026"
            />
            <Publication
              title="Operational Reinforcement: Monitor MDPs for Structured Failure Feedback"
              authors="Sambartha Ray Barman, Andrey Starenky, Sophia Bodnar, Nikhil Narasimhan, Ashwin Gopinath"
              venue="Under review, ICML 2026"
            />
            <Publication
              title="Avoidance Learning: Substantive Alignment Through Pure Negative Feedback"
              authors="Sambartha Ray Barman, Andrey Starenky, Sophia Bodnar, Nikhil Narasimhan, Ashwin Gopinath"
              venue="Under review, ICML 2026"
            />
          </div>
        </section>
      </FadeIn>
    </article>
  );
};

export default Research;
