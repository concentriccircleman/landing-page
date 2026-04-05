interface Deliverable {
  icon: string;
  title: string;
  description: string;
}

interface UseCaseData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "leadership" | "workflow" | "operational";
  challenge: string;
  deliverables: Deliverable[];
  inPractice: string;
  before: string;
  after: string;
}

interface CategoryData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
}

export const categories: CategoryData[] = [
  {
    id: "leadership",
    slug: "leadership-strategy",
    title: "Leadership & Strategy",
    subtitle: "Strategic awareness at every level of the organization.",
  },
  {
    id: "workflow",
    slug: "workflow-collapse",
    title: "Workflow Collapse",
    subtitle:
      "When Sentra knows enough, entire workflows disappear.",
  },
  {
    id: "operational",
    slug: "operational-workflow-collapse",
    title: "Operational Workflow Collapse",
    subtitle:
      "Compliance, approvals, and recurring processes\u2014collapsed from days to minutes.",
  },
];

export const useCases: UseCaseData[] = [
  {
    id: "uc-01",
    number: "01",
    title: "Your organization\u2019s operating system",
    subtitle: "Strategic awareness without micromanagement",
    category: "leadership",
    challenge:
      "You set the direction in board meetings and leadership offsites, then spend weeks wondering whether it\u2019s actually being executed. The information that reaches you is filtered through three layers of management, each adding optimism and removing nuance. By the time a strategic priority is visibly failing, it\u2019s already months behind.",
    deliverables: [
      {
        icon: "\u{1F4E1}",
        title: "Real-time strategic pulse",
        description:
          "See which board-level priorities are appearing in team meetings, which have assigned owners, and which have quietly gone silent.",
      },
      {
        icon: "\u{1F50D}",
        title: "Execution tracking without status reports",
        description:
          "Commitments made at the leadership level are automatically traced through the organization. No one files a report; Sentra observes what\u2019s happening.",
      },
      {
        icon: "\u{1F9ED}",
        title: "Alignment visibility",
        description:
          "Instantly see which teams are pulling in the same direction and which are drifting, without asking anyone to self-report.",
      },
      {
        icon: "\u{1F4DC}",
        title: "Decision provenance",
        description:
          "Every strategic decision carries its full reasoning trace. Six months from now, anyone can understand not just what was decided, but why.",
      },
    ],
    inPractice:
      "After a board meeting where 12 strategic priorities are set, Sentra tracks each one through subsequent leadership syncs, team standups, and planning sessions. Two weeks later, it surfaces a proactive briefing: 8 priorities have been discussed in at least two team meetings with clear owners. 3 have been mentioned but lack committed timelines. 1\u2014the international expansion initiative\u2014hasn\u2019t appeared in a single downstream conversation. No one filed a report. No one was asked. The CEO catches the gap before it becomes a quarter-long blind spot.",
    before:
      "Strategic priorities set in Q1 are discovered to be untracked in Q3. Information reaches you through status meetings that surface problems only after they\u2019ve compounded.",
    after:
      "Every priority is tracked from the moment it\u2019s spoken. Drift is surfaced in days, not months, giving you time to course-correct while it still matters.",
  },
  {
    id: "uc-02",
    number: "02",
    title: "See across every team you lead",
    subtitle: "Cross-team synthesis without sitting in every meeting",
    category: "leadership",
    challenge:
      "You manage four teams, each with their own standups, retros, planning sessions, and Slack channels. Staying informed means either sitting in 15+ meetings a week or relying on secondhand summaries that strip out the details you actually need. Cross-team dependencies are invisible until they break, and conflicting decisions across teams surface only at integration time.",
    deliverables: [
      {
        icon: "\u{1F4E1}",
        title: "Cross-team dependency radar",
        description:
          "Automatically identifies when teams are working on overlapping or conflicting approaches, before either ships.",
      },
      {
        icon: "\u26A0\uFE0F",
        title: "Escalation intelligence",
        description:
          "Surfaces decisions that need your input based on impact and risk, not just based on someone remembering to loop you in.",
      },
      {
        icon: "\u{1F4CA}",
        title: "Auto-generated team status",
        description:
          "A synthesized view across all your teams, updated continuously from actual conversations, not from someone\u2019s Friday afternoon recollection.",
      },
      {
        icon: "\u{1F6AB}",
        title: "Meeting-free awareness",
        description:
          "Stop attending meetings just to stay informed. Sentra gives you the signal without the seat time.",
      },
    ],
    inPractice:
      "A VP of Engineering leading 4 teams discovers through Sentra that two teams independently made conflicting technical decisions about the same API\u2014Team Alpha chose REST with pagination while Team Beta committed to GraphQL with cursor-based fetching. Both decisions were made in separate sprint planning sessions three days apart. Sentra flags the conflict on day four, before either team has written a line of production code. The VP schedules a single 30-minute alignment meeting. Without Sentra, this would have surfaced during integration testing, two sprints later, as a P0 blocker.",
    before:
      "You attend 15 meetings per week to stay informed. Cross-team conflicts surface during integration, when the cost of fixing them is highest.",
    after:
      "You attend only the meetings where you add value. Conflicts and dependencies are surfaced in real time, when a 30-minute conversation can resolve what would have been a two-sprint setback.",
  },
  {
    id: "uc-03",
    number: "03",
    title: "A program manager for your team",
    subtitle: "Every commitment tracked. Every signal surfaced.",
    category: "leadership",
    challenge:
      "You spend your mornings assembling context: checking Jira for what moved, scanning Slack for what happened overnight, reviewing PRs to understand progress, and mentally reconstructing who committed to what and whether it\u2019s on track. Your 1-on-1s start with \u2018So, what\u2019s been going on?\u2019 because you don\u2019t have time to prepare. Stakeholder updates are written from memory.",
    deliverables: [
      {
        icon: "\u2705",
        title: "Automatic commitment tracking",
        description:
          "Every \u2018I\u2019ll have it done by Friday\u2019 is captured and tracked, whether it was said in standup, Slack, or a side conversation.",
      },
      {
        icon: "\u{1F4CB}",
        title: "Smart 1-on-1 agendas",
        description:
          "Pre-built agendas based on what actually happened: overdue items, blockers mentioned in retro, sentiment shifts, and topics that need follow-up.",
      },
      {
        icon: "\u{1F4C8}",
        title: "Sprint-over-sprint progress",
        description:
          "See velocity trends, completion rates, and carry-over patterns without maintaining a spreadsheet.",
      },
      {
        icon: "\u{1F6A8}",
        title: "Early warning system",
        description:
          "Red flags surfaced before standup: blocked PRs, stale commitments, missed deadlines, and engineers who\u2019ve gone quiet.",
      },
    ],
    inPractice:
      "Before a 1-on-1 with a senior engineer, Sentra surfaces a briefing: she committed to a code review 5 days ago but hasn\u2019t completed it. She mentioned feeling overwhelmed during last week\u2019s retro. She has 3 overdue PRs and hasn\u2019t posted in the team channel since Tuesday. Her commits have dropped 40% week-over-week. This context\u2014which would take 30 minutes to assemble manually\u2014appears automatically, letting the manager walk in prepared to have the right conversation.",
    before:
      "You spend 30+ minutes before each 1-on-1 assembling context from five different tools. Stakeholder updates are written from memory on Friday afternoon.",
    after:
      "1-on-1 prep takes zero minutes. Stakeholder updates write themselves from actual data. You spend your time leading, not administrating.",
  },
  {
    id: "uc-04",
    number: "04",
    title: "Never lose context, never miss what matters",
    subtitle: "A personalized feed of everything that affects your work",
    category: "leadership",
    challenge:
      "You\u2019re heads-down on a feature when a decision in a meeting you didn\u2019t attend changes the API you\u2019re building against. You find out three days later in a Slack thread. You join a new project and spend your first week in \u2018archaeology mode\u2019\u2014reading stale docs, watching old Loom recordings, and asking teammates questions they\u2019ve already answered twice.",
    deliverables: [
      {
        icon: "\u{1F4E8}",
        title: "Personalized decision feed",
        description:
          "Decisions, changes, and commitments that affect your specific work, surfaced from meetings you didn\u2019t attend and channels you don\u2019t monitor.",
      },
      {
        icon: "\u26A1",
        title: "Instant project onboarding",
        description:
          "A synthesized briefing for any project: every decision made, the alternatives considered and why they were rejected, the constraints discussed, and the open questions remaining.",
      },
      {
        icon: "\u{1F6AB}",
        title: "Context without meetings",
        description:
          "Stop attending meetings \u2018just in case.\u2019 Sentra ensures you never miss what\u2019s relevant without requiring your presence.",
      },
      {
        icon: "\u{1F9E0}",
        title: "Working memory that persists",
        description:
          "The rationale behind decisions from three months ago is instantly accessible, even when the person who made them has moved teams.",
      },
    ],
    inPractice:
      "A designer joins a project mid-cycle and receives a Sentra briefing that includes every decision made about the feature over the past six weeks: the initial scope defined in the kickoff, the three design directions considered and why two were rejected, the engineering constraints discussed in a technical review she wasn\u2019t in, the user research findings from the PM\u2019s synthesis, and the scope cut agreed upon last Wednesday. All synthesized from 15 meetings she never attended. She\u2019s fully productive by day two instead of week two.",
    before:
      "Joining a new project means a week of archaeology: reading outdated docs, watching recordings, and asking teammates to re-explain decisions. You miss things that affect your work because they happened in meetings you weren\u2019t in.",
    after:
      "Full project context in minutes, not days. Decisions that affect your work find you automatically, no matter where they were made.",
  },
  {
    id: "uc-05",
    number: "05",
    title: "Know your customer better than they know themselves",
    subtitle: "Every interaction captured. Every nuance preserved.",
    category: "leadership",
    challenge:
      "Your CRM is a graveyard of stale data and optimistic notes. The real story of an account lives in the heads of the people who work it\u2014and when they go on vacation, change roles, or leave, that story goes with them. Handoffs are lossy. Promises made on calls are forgotten. Objections that keep resurfacing are never formally tracked.",
    deliverables: [
      {
        icon: "\u{1F50E}",
        title: "Complete interaction intelligence",
        description:
          "Every call, email, and meeting captured and synthesized with full nuance: not just what was said, but how it was received, what was promised, and what went unsaid.",
      },
      {
        icon: "\u{1F91D}",
        title: "Lossless handoffs",
        description:
          "When an account manager changes, their replacement gets the full story: tone of recent calls, recurring objections, internal champions, and commitments made outside the CRM.",
      },
      {
        icon: "\u{1F6A9}",
        title: "Proactive risk signals",
        description:
          "Sentiment shifts, missed follow-ups, and growing frustration detected from actual conversations, not from a CSM\u2019s subjective health score.",
      },
      {
        icon: "\u{1F4DA}",
        title: "Institutional customer memory",
        description:
          "The commitment your CEO made during a dinner, the pricing concern raised in a side conversation, the competitor mentioned in passing\u2014all captured, all searchable.",
      },
    ],
    inPractice:
      "An account manager goes on unexpected leave. Their replacement gets a Sentra briefing for each account: not just the CRM fields, but the actual texture of the relationship. Account A: the champion (VP of Ops) is enthusiastic but her CFO is skeptical\u2014he raised pricing concerns twice in the last month, and the tone of his last email was noticeably cooler. Account B: the CEO made a verbal commitment to a pilot expansion during a dinner that was never logged. Account C: the customer has mentioned a competitor three times in the last six weeks, always positively. The replacement walks in fully briefed, preserving months of relationship context that would otherwise have been lost.",
    before:
      "Account handoffs lose 80% of the real context. CRM data tells you what was logged, not what actually happened. Every rep who leaves takes institutional knowledge with them.",
    after:
      "Every interaction is captured with its full nuance. Handoffs preserve the complete relationship history. Your organization never forgets a customer conversation, even when people change.",
  },
  {
    id: "uc-06",
    number: "06",
    title: "The post-meeting admin hour, eliminated",
    subtitle: "Sentra turns meeting output into executed work before you close your laptop.",
    category: "workflow",
    challenge:
      "Every meeting with real decisions in it spawns 45 minutes of follow-up work: you open Jira to create tickets, paste action items from your notes one by one, assign owners while second-guessing who actually committed to what, estimate due dates from vague phrases like \u2018end of sprint,\u2019 and then draft a Slack summary you rewrite three times before posting. By the time the follow-up is done, the next meeting has started.",
    deliverables: [
      {
        icon: "\u2709\uFE0F",
        title: "Auto-drafted follow-up emails",
        description:
          "Personalized follow-ups sent to each attendee, referencing their specific commitments and next steps from the meeting transcript.",
      },
      {
        icon: "\u{1F3AB}",
        title: "Jira ticket generation",
        description:
          "Every action item becomes a Jira ticket with title, description, assignee (matched to who said \u2018I\u2019ll handle it\u2019), and due date derived from spoken timelines.",
      },
      {
        icon: "\u{1F4E2}",
        title: "Slack summary broadcast",
        description:
          "A structured summary posted to the team channel: decisions made, owners assigned, open questions flagged.",
      },
      {
        icon: "\u{1F44D}",
        title: "One-tap approval flow",
        description:
          "Sentra drafts everything and surfaces a review screen. You confirm, adjust one line, and hit approve. The 45-minute routine becomes a 90-second review.",
      },
    ],
    inPractice:
      "A team lead finishes a 60-minute sprint planning meeting with 8 engineers. Within 90 seconds of the call ending, Sentra surfaces a review panel: 11 Jira tickets drafted from action items, each assigned to the engineer who verbally committed, with story points suggested based on the effort language used. Due dates are set: \u2018before Thursday\u2019s demo\u2019 resolves to Wednesday EOD. A Slack summary is drafted for #team-backend with decisions bolded and open questions flagged. The team lead changes two assignees, approves everything, and closes the laptop. What used to take 45 minutes took 4.",
    before:
      "Post-meeting admin consumes 45 minutes per meeting: manual Jira ticket creation, copy-pasted action items, Slack summaries written from imperfect memory.",
    after:
      "Sentra drafts every artifact the moment the call ends. Tickets are created, owners assigned, the Slack summary is posted, and follow-ups are sent\u2014after a single 90-second review.",
  },
  {
    id: "uc-07",
    number: "07",
    title: "A quarterly update deck assembled while you slept",
    subtitle: "Sentra builds the first draft from the quarter\u2019s actual decisions, not your memory of them.",
    category: "workflow",
    challenge:
      "Every quarter, PMs spend 4\u20136 hours building a QBR deck by manually reconstructing what happened: skimming through meeting notes in Notion, exporting charts from Amplitude, digging through old Slack threads to find the right quote. The deck always feels thin because the PM is working from a 10% sample of what actually occurred.",
    deliverables: [
      {
        icon: "\u{1F4CB}",
        title: "Decision inventory, auto-pulled",
        description:
          "Every decision made this quarter extracted from meetings and structured into slide-ready content.",
      },
      {
        icon: "\u{1F4CA}",
        title: "Metrics narrative from standup data",
        description:
          "Key metrics discussed across standups and reviews compiled with context: not just the number, but what the team said about it.",
      },
      {
        icon: "\u{1F4AC}",
        title: "Customer signal synthesis",
        description:
          "Feedback themes from sales calls, CS escalations, and user interviews distilled into the top 5 themes with representative quotes.",
      },
      {
        icon: "\u{1F527}",
        title: "Blocker-to-resolution arc",
        description:
          "Engineering retro blockers matched to their resolutions, showing how the team navigated obstacles across the quarter.",
      },
    ],
    inPractice:
      "It\u2019s Sunday evening before a Monday QBR. A PM opens Sentra and requests a Q3 update draft. Within 3 minutes, Sentra returns a structured slide outline: slide 1 pulls the 7 major decisions made in Q3 with dates and meeting sources. Slide 2 shows the DAU trend discussed in 11 standups alongside the two interventions the team made. Slide 3 synthesizes customer feedback from 23 sales calls. Slide 4 lists 4 engineering blockers with their resolution dates and the owners who cleared them. The PM spends 45 minutes customizing the framing. The deck is done by 8 PM.",
    before:
      "QBR prep takes 4\u20136 hours of manual reconstruction: combing through Notion, Amplitude, and Slack to assemble a deck that still misses half of what actually happened.",
    after:
      "Sentra assembles a complete first-draft deck from the quarter\u2019s actual conversations, metrics, and decisions. 4\u20136 hours becomes 45 minutes.",
  },
  {
    id: "uc-08",
    number: "08",
    title: "Three stakeholder updates written in the time it takes to write one",
    subtitle: "The right detail level for every audience, without writing anything from scratch.",
    category: "workflow",
    challenge:
      "Every Friday, a VP writes three versions of the same week in review: a tight executive summary for their skip-level, a tactical rundown for their direct reports, and a milestone-framed update for external stakeholders. Each requires a different register, different level of detail, and different framing of the same underlying facts. Writing all three from scratch takes 90 minutes.",
    deliverables: [
      {
        icon: "\u{1F4DD}",
        title: "Executive summary",
        description:
          "4\u20135 sentences synthesizing the week\u2019s most significant progress, decisions, and risks\u2014calibrated for someone who needs orientation, not detail.",
      },
      {
        icon: "\u{1F4CB}",
        title: "Tactical weekly digest",
        description:
          "Full rundown of what shipped, what slipped, key decisions made, and open items requiring team input, with specific ticket references.",
      },
      {
        icon: "\u{1F3AF}",
        title: "Milestone update",
        description:
          "Progress framed against committed milestones, with completion percentages, upcoming deliverables, and risk flags.",
      },
      {
        icon: "\u{1F4AC}",
        title: "Drafted from actual conversations",
        description:
          "Every version is grounded in what was actually discussed that week, not what the VP remembered to include at 5 PM on a Friday.",
      },
    ],
    inPractice:
      "A VP of Product manages 3 product lines and sends weekly updates every Friday. At 4:30 PM, Sentra surfaces three draft updates generated from the week\u2019s 14 team meetings, 3 design reviews, and 2 engineering syncs. The VP edits for 12 minutes and sends all three. The 90-minute block is now free.",
    before:
      "Writing three stakeholder updates from scratch takes 90 minutes every Friday. Each version is under-calibrated for its audience because context-switching between registers is exhausting.",
    after:
      "Sentra drafts all three updates from the week\u2019s actual activity. The VP reviews, edits for 12 minutes, and sends.",
  },
  {
    id: "uc-09",
    number: "09",
    title: "Day-one onboarding that feels like month-three context",
    subtitle: "New hires walk in knowing what the team knows, before their first standup.",
    category: "workflow",
    challenge:
      "New hires lose their first two weeks to orientation overhead: reading outdated Confluence pages, sitting through 12 introductory 1-on-1s, and asking questions that five other people on Slack have already answered. The institutional knowledge that actually matters lives in conversations invisible to a newcomer.",
    deliverables: [
      {
        icon: "\u{1F4C4}",
        title: "Personalized onboarding brief",
        description:
          "A role-specific brief covering the team\u2019s active projects, recent key decisions (with context), recurring meeting cadences, and top open questions.",
      },
      {
        icon: "\u{1F4AC}",
        title: "Team communication norms",
        description:
          "Derived from actual Slack and meeting patterns: how the team raises blockers, which channels carry which decisions.",
      },
      {
        icon: "\u{1F3C6}",
        title: "Top 5 things to know",
        description:
          "Ranked by how often they appear in team conversations, not by what someone remembered to put in a Notion page.",
      },
      {
        icon: "\u{1F465}",
        title: "Warm intro context cards",
        description:
          "For each key collaborator: what they work on, what decisions they own, and the best way to engage with them.",
      },
    ],
    inPractice:
      "A new backend engineer starts on Monday. By Sunday evening, Sentra has prepared her onboarding brief: the 3 active projects her team is running, the 2 architectural debates currently open in Slack, the team\u2019s meeting cadence, and context cards for her 6 closest collaborators. On Monday morning, she asks one sharp, informed question in standup. Her manager notes that she already sounds like she\u2019s been on the team for a month.",
    before:
      "New hires spend 2\u20133 weeks in orientation limbo: reading outdated docs, scheduling introductory 1-on-1s. The institutional knowledge that matters is locked in conversations they weren\u2019t part of.",
    after:
      "New hires arrive with a complete, current, personalized brief. They ask informed questions on day one and reach full productivity in days, not weeks.",
  },
  {
    id: "uc-10",
    number: "10",
    title: "30-minute call prep in 90 seconds",
    subtitle: "Every customer interaction informed by everything that\u2019s ever been said about this account.",
    category: "workflow",
    challenge:
      "Before every customer call, an AE spends 30 minutes doing manual archaeology: pulling up the Salesforce account, searching Gmail for emails, opening Gong to find the most recent call recording, and checking the prospect\u2019s LinkedIn. After the call, the CRM update gets skipped because the next call starts in 10 minutes.",
    deliverables: [
      {
        icon: "\u{1F4CB}",
        title: "Pre-call intelligence brief",
        description:
          "Relationship history, last 3 interaction summaries with sentiment indicators, all open commitments, competitive mentions, and pricing objections\u2014compiled in under 2 minutes.",
      },
      {
        icon: "\u{1F4AC}",
        title: "Suggested talking points",
        description:
          "Based on what resonated with similar accounts at the same stage\u2014likely objections, and overdue commitments.",
      },
      {
        icon: "\u{1F4BE}",
        title: "Post-call CRM auto-update",
        description:
          "Salesforce fields updated from the call: next steps, stage progression signals, new contacts mentioned, and commitments made.",
      },
      {
        icon: "\u{1F6A9}",
        title: "At-risk commitment flags",
        description:
          "Any commitment made on the call that conflicts with internal capacity or timelines is flagged immediately.",
      },
    ],
    inPractice:
      "An AE has a discovery call with Meridian Logistics at 2 PM. At 1:58, she opens Sentra: the brief loads in 80 seconds. It shows 4 prior touchpoints, 2 open commitments from the AE\u2019s side (both overdue), and a note that Meridian mentioned a competitor in two prior conversations. The call goes 35 minutes. Within 3 minutes of hanging up, Salesforce is updated. The rep saved 35 minutes of prep and post-call admin.",
    before:
      "Call prep takes 30 minutes of manual CRM and email archaeology. Post-call CRM updates get skipped. Commitments made on calls live in personal notes.",
    after:
      "A complete pre-call brief in 90 seconds. Salesforce updated automatically after the call. Every commitment captured, every at-risk flag surfaced.",
  },
  {
    id: "uc-11",
    number: "11",
    title: "The business case that writes itself from operational reality",
    subtitle: "Headcount and budget justifications built from what actually happened, not what you remember.",
    category: "workflow",
    challenge:
      "Justifying additional headcount or budget requires building a business case from scratch: manually pulling sprint velocity data from Jira, exporting burndown charts, hunting for Slack threads where engineers mentioned being underwater. The strongest evidence\u2014the actual words your team used\u2014is locked in meeting recordings nobody will go back and watch.",
    deliverables: [
      {
        icon: "\u{1F4C9}",
        title: "Velocity trend analysis",
        description:
          "Sprint-over-sprint throughput data showing increasing load relative to capacity, with inflection points.",
      },
      {
        icon: "\u{1F4CA}",
        title: "Commitment-to-delivery ratio",
        description:
          "The gap between what the team committed to in planning and what actually shipped, quantified across the past two quarters.",
      },
      {
        icon: "\u23F1\uFE0F",
        title: "Meeting time on blockers",
        description:
          "The percentage of standup and planning time spent discussing blocked items versus active progress.",
      },
      {
        icon: "\u{1F4AC}",
        title: "Verbatim capacity evidence",
        description:
          "Direct quotes from team members in meetings and Slack where capacity constraints were explicitly raised, with timestamps.",
      },
    ],
    inPractice:
      "A team lead needs to make the case for a 4th backend engineer. She asks Sentra to compile the evidence. Within 5 minutes, she has: sprint velocity dropped 22% over the last 8 weeks; commitment-to-delivery ratio of 61% for the past two sprints (down from 89% in Q2); 34% of standup time spent on blocked items; and 7 direct quotes from engineers in retros and Slack. The business case presents itself. The conversation with the VP of Engineering takes 15 minutes.",
    before:
      "Building a headcount justification means a weekend of manual data gathering from Jira, Slack, and sprint reports\u2014producing a deck that still feels thin.",
    after:
      "Sentra compiles the business case from operational reality: velocity trends, commitment ratios, blocker patterns, and verbatim team quotes. 5 minutes to build.",
  },
  {
    id: "uc-12",
    number: "12",
    title: "Launch readiness across 6 teams, without a single status meeting",
    subtitle: "One unified dashboard. Zero status calls. No shared spreadsheet to maintain.",
    category: "workflow",
    challenge:
      "Coordinating a product launch across engineering, design, marketing, sales enablement, legal, and support requires a weekly 15-person status meeting where half the attendees are there only to give a 60-second update. Between meetings, a shared Google Sheet degrades into a record of what someone said they\u2019d do, not what\u2019s actually happening.",
    deliverables: [
      {
        icon: "\u{1F4CA}",
        title: "Unified launch readiness dashboard",
        description:
          "A single view of every team\u2019s real status, derived from their own meetings and channels.",
      },
      {
        icon: "\u{1F515}",
        title: "Silence as a signal",
        description:
          "When a team hasn\u2019t mentioned their deliverable in any meeting or Slack channel for 10 days, Sentra flags it.",
      },
      {
        icon: "\u26A0\uFE0F",
        title: "Proactive blocker detection",
        description:
          "Issues surface immediately in the dashboard with estimated impact on timeline.",
      },
      {
        icon: "\u{1F6AB}",
        title: "Meeting elimination",
        description:
          "The 15-person weekly status call becomes unnecessary. Teams update the PM\u2019s view by simply doing their work.",
      },
    ],
    inPractice:
      "A program manager coordinates the launch of a new billing module involving 6 teams with a hard deadline in 18 days. Instead of a Tuesday status call, she checks the Sentra launch dashboard Monday morning. She sends two targeted Slack messages (to legal and sales enablement) and unblocks both within the hour. The status meeting never happens. The launch lands on time.",
    before:
      "Launch coordination requires a weekly 15-person status meeting and a shared spreadsheet that everyone hates maintaining. Blockers surface late.",
    after:
      "Sentra tracks every team\u2019s progress from their own conversations. The program manager sees a real-time readiness view without running a single status meeting.",
  },
  {
    id: "uc-13",
    number: "13",
    title: "Six months of contributions, assembled in seconds",
    subtitle: "Performance evidence that reflects what actually happened, not what you remembered to write down.",
    category: "workflow",
    challenge:
      "Performance review season means every manager scrambling to reconstruct 6 months of context from whatever they happened to write down. The engineer who shipped 3 critical features in Q1 gets a thinner review than the one who made noise in Q3, because recency bias is unavoidable. Managers spend 4\u20136 hours per person on review prep and still feel like they\u2019re missing something.",
    deliverables: [
      {
        icon: "\u{1F4E6}",
        title: "Delivered projects, documented",
        description:
          "A complete list of what each person shipped this half: features closed, bugs resolved, PRs merged, and milestones hit.",
      },
      {
        icon: "\u{1F31F}",
        title: "Leadership and influence signals",
        description:
          "Meeting participation patterns indicating when someone ran a technical discussion, proposed a direction that was adopted, or unblocked a teammate.",
      },
      {
        icon: "\u{1F91D}",
        title: "Mentoring and growth indicators",
        description:
          "1-on-1 patterns, instances of explaining concepts in Slack threads, and thorough async walkthroughs for junior engineers.",
      },
      {
        icon: "\u{1F4A1}",
        title: "Growth areas from actual friction",
        description:
          "Recurring topics where the person asked for help, blockers they got stuck on, and patterns suggesting development opportunities.",
      },
    ],
    inPractice:
      "An engineering manager has 7 direct reports and used to block a full week for review prep. She asks Sentra to generate an evidence package for each person. For her staff engineer: 9 features shipped, led 4 technical design discussions, unblocked 3 junior engineers with detailed async explanations. For her mid-level engineer: strong delivery in Q2, but in Q3 consistently mentioned being unclear on requirements. Each package is ready in under 2 minutes.",
    before:
      "Review prep takes 4\u20136 hours per person, written primarily from recent memory. High performers who work quietly are systematically undercounted.",
    after:
      "Sentra compiles a complete 6-month evidence package per person from actual work signals. 4\u20136 hours of prep per person becomes 10 minutes.",
  },
  {
    id: "uc-14",
    number: "14",
    title: "A discovery call becomes a proposal draft before the debrief ends",
    subtitle: "Client proposals built from the conversation, not constructed from blank templates.",
    category: "workflow",
    challenge:
      "After a 90-minute discovery call, a consultant faces 4\u20136 hours of proposal writing: opening a blank template, translating messy call notes into structured requirements, searching through past engagement folders to find a relevant case study. The first draft is reviewed by a principal who rewrites half of it because the framing doesn\u2019t match the client\u2019s actual language.",
    deliverables: [
      {
        icon: "\u{1F3AF}",
        title: "Pain point extraction from the call",
        description:
          "The client\u2019s stated challenges, structured into clear problem statements using their own language.",
      },
      {
        icon: "\u{1F4DA}",
        title: "Matched case studies",
        description:
          "Similar client problems from past engagements retrieved with outcomes and timelines surfaced.",
      },
      {
        icon: "\u{1F4C5}",
        title: "Timeline estimate from historical data",
        description:
          "Project phases and durations based on how long similar engagements actually took.",
      },
      {
        icon: "\u{1F4CB}",
        title: "Deliverables mapped to stated requirements",
        description:
          "The client\u2019s specific asks mapped to the firm\u2019s service catalog.",
      },
    ],
    inPractice:
      "A management consultant finishes a 90-minute discovery call at 11 AM. By 11:45 AM, Sentra has drafted a 7-section proposal: an executive summary using the client\u2019s own language, a problem statement structured around the workflow they described, 3 matched case studies, a phased timeline estimated from actual prior engagement data, and a deliverables list. The consultant spends 75 minutes refining. The proposal lands in the client\u2019s inbox at 2 PM\u2014the same day as the discovery call.",
    before:
      "Writing a proposal after a discovery call takes 4\u20136 hours. The first draft requires a full rewrite. The proposal lands 3 days later.",
    after:
      "Sentra drafts a complete proposal from the discovery call transcript. The consultant refines for 75 minutes. The proposal lands the same day. 4\u20136 hours becomes 75 minutes.",
  },
  {
    id: "uc-15",
    number: "15",
    title: "The post-mortem that writes itself",
    subtitle: "Incident timelines reconstructed from the actual record, not from fatigued engineers trying to remember.",
    category: "workflow",
    challenge:
      "After a production incident, the post-mortem process typically takes 2\u20133 days: an incident commander interviews engineers, someone digs through Slack, another engineer exports PagerDuty logs, and a third reviews the support ticket queue. The resulting document is a best-effort reconstruction assembled by people who are already exhausted.",
    deliverables: [
      {
        icon: "\u{1F552}",
        title: "Minute-by-minute incident timeline",
        description:
          "Reconstructed from Slack messages, PagerDuty alerts, meeting transcripts, and runbook commands\u2014creating a definitive sequence without interviewing anyone.",
      },
      {
        icon: "\u{1F50D}",
        title: "Root cause candidate analysis",
        description:
          "A structured summary of what engineers hypothesized during the incident, what was ruled out and why, and the leading root cause theory.",
      },
      {
        icon: "\u{1F465}",
        title: "Customer impact summary",
        description:
          "Built from support tickets opened during the incident window and CS team conversations.",
      },
      {
        icon: "\u2705",
        title: "Action items with owners, pre-assigned",
        description:
          "Every \u2018we should fix that\u2019 from the debrief becomes a structured action item with an owner and category.",
      },
    ],
    inPractice:
      "A B2B SaaS platform experiences a 47-minute partial outage affecting the payments API. By Wednesday morning, Sentra has generated the post-mortem draft with a complete timeline, root cause analysis, customer impact from 23 support tickets, and 6 specific action items with named owners. The incident commander spends 40 minutes on narrative and review instead of 2 days on reconstruction.",
    before:
      "Post-mortem assembly takes 2\u20133 days: interviewing tired engineers, reconstructing timelines from incomplete Slack threads. Action items are vague.",
    after:
      "Sentra reconstructs the complete incident timeline automatically. The post-mortem is 80% complete before anyone opens a Google Doc. 2 days becomes 40 minutes.",
  },
  {
    id: "uc-16",
    number: "16",
    title: "Insurance claim filed before the employee found the form",
    subtitle: "Sentra knows the procedure, the policy, and the dates\u2014it files the claim.",
    category: "operational",
    challenge:
      "An employee has a medical procedure. They return to work, then face the real ordeal: locating the right insurance claim form, looking up their policy number from an old onboarding email, gathering receipts and procedure codes, filling in 15 fields from memory, submitting to HR, waiting for verification. The whole process takes 2 hours spread across 3\u20135 days.",
    deliverables: [
      {
        icon: "\u{1F4CB}",
        title: "Policy details pulled from onboarding",
        description:
          "Sentra knows the employee\u2019s policy number, coverage tier, and insurer from onboarding conversations and the HR system.",
      },
      {
        icon: "\u{1F4C5}",
        title: "Procedure and date range extracted",
        description:
          "The medical procedure and dates discussed in the 1-on-1 or mentioned in a leave request populate the claim fields automatically.",
      },
      {
        icon: "\u2705",
        title: "Pre-filled claim form routed for one-click HR approval",
        description:
          "HR receives a fully assembled claim with all fields completed and relevant context attached.",
      },
      {
        icon: "\u26A1",
        title: "2-hour process collapsed to a 3-minute review",
        description:
          "The employee triggers the claim with a single request; HR approves without manual verification.",
      },
    ],
    inPractice:
      "An employee mentions to their manager in a Tuesday 1-on-1 that they had an outpatient procedure last Thursday. Within seconds, Sentra has connected the dots: the procedure date from the leave request, the policy number from benefits onboarding, the coverage tier from the HR system, and the insurer\u2019s requirements. A draft claim appears with 14 of 15 fields pre-filled. The employee uploads one document. HR approves with a single click. What took 3\u20135 days took 8 minutes.",
    before:
      "Employees navigate SharePoint folders, decode policy documents, and spend 2+ hours across multiple days assembling a claim form\u2014often abandoning the process entirely.",
    after:
      "Sentra pre-fills the claim from conversations already captured, routes it to HR as a one-click approval. A 5-day process takes 8 minutes.",
  },
  {
    id: "uc-17",
    number: "17",
    title: "Quarter-end leave reconciliation that doesn\u2019t take a week",
    subtitle: "Sentra finds the leaves that were approved in meetings but never filed.",
    category: "operational",
    challenge:
      "At quarter-end, HR must reconcile leave balances: who took which leaves, whether approved time off was logged in the HRIS, which team leads approved leave verbally in 1-on-1s but never submitted paperwork, and whether the company is compliant with local labor laws. This means manually cross-referencing HRIS exports, manager emails, and Slack threads. The process takes five days.",
    deliverables: [
      {
        icon: "\u{1F50E}",
        title: "Cross-surface leave capture",
        description:
          "Every leave approval\u2014spoken in a 1-on-1, typed in Slack, emailed by a manager, or formally submitted\u2014is captured and reconciled.",
      },
      {
        icon: "\u26A0\uFE0F",
        title: "HRIS gap detection",
        description:
          "Identifies leaves verbally approved but never logged, surfacing the specific conversations as evidence.",
      },
      {
        icon: "\u2696\uFE0F",
        title: "Labor law compliance check",
        description:
          "Flags employees who haven\u2019t used mandatory leave minimums by quarter-end.",
      },
      {
        icon: "\u{1F4CA}",
        title: "One-click reconciliation report",
        description:
          "A complete, audit-ready leave reconciliation generated in minutes.",
      },
    ],
    inPractice:
      "The HR Director requests the report from Sentra. It surfaces 23 discrepancies: 14 instances of verbal approval without HRIS entry, 6 employees below mandatory leave minimums, and 3 logged leaves without manager approval. Each discrepancy includes the specific conversation excerpt as evidence. The five-day process took six hours.",
    before:
      "HR manually cross-references HRIS exports, manager emails, and Slack threads. Discrepancies take five days to surface.",
    after:
      "Sentra reconciles every leave approval across every surface and delivers an audit-ready report with evidence. Five days becomes six hours.",
  },
  {
    id: "uc-18",
    number: "18",
    title: "Eight offer forms filled before the agent opens their laptop",
    subtitle: "Every contingency, budget, and preference the buyer stated\u2014already in the form.",
    category: "operational",
    challenge:
      "After a property showing, a real estate agent faces 8\u201312 forms that need completing before the offer can go in. Each form requires details scattered across handwritten notes, a voice memo, and a text thread. Filling forms manually under offer-deadline pressure is where errors happen and deals fall through.",
    deliverables: [
      {
        icon: "\u{1F3E0}",
        title: "Buyer profile assembled from consultation",
        description:
          "Budget ceiling, preferred neighborhoods, must-have features, timeline, and financing pre-approval amount extracted from the initial consultation.",
      },
      {
        icon: "\u{1F50D}",
        title: "Property-specific details from the showing",
        description:
          "Contingencies, inspection concerns, and specific asks captured from the post-showing debrief.",
      },
      {
        icon: "\u{1F4B0}",
        title: "Financing terms from the lender conversation",
        description:
          "Pre-approval amount, down payment, and loan type automatically populating the buyer qualification sheet.",
      },
      {
        icon: "\u{1F4C4}",
        title: "Complete form package in seconds",
        description:
          "All 8\u201312 forms pre-filled from captured discussions, ready for agent review and one-click submission.",
      },
    ],
    inPractice:
      "A buyer tours a property on Saturday afternoon. On Sunday morning, when the agent opens Sentra, all 11 forms are already pre-filled from the Saturday debrief and the two-week-old consultation. The agent reviews for 8 minutes, corrects one field, and submits. The offer beats two competing bids partly because it arrived first and error-free.",
    before:
      "Agents manually fill 8\u201312 forms under offer-deadline pressure, pulling details from handwritten notes, voice memos, and text threads.",
    after:
      "Sentra pre-fills every form from captured conversations. The agent reviews an 8-minute checklist instead of a 2-hour form-fill sprint.",
  },
  {
    id: "uc-19",
    number: "19",
    title: "The monthly competitive brief your analyst spent two days on, now automated",
    subtitle: "Internal intelligence + external signals, synthesized from what your company already knows.",
    category: "operational",
    challenge:
      "Every month, the strategy team produces a competitive landscape update. An analyst spends 2 days monitoring competitor websites, G2 reviews, LinkedIn, and industry publications. The result captures external signals but misses internal intelligence that already exists\u2014sales reps hear about competitors on every call, CS hears customer comparisons daily.",
    deliverables: [
      {
        icon: "\u{1F50E}",
        title: "Internal competitive intelligence synthesized",
        description:
          "Every competitor mention in sales calls, CS escalations, strategy meetings, and Slack is captured and categorized.",
      },
      {
        icon: "\u{1F310}",
        title: "External signals integrated with internal context",
        description:
          "Product launches, pricing changes, and executive hires combined with what your own team said about them.",
      },
      {
        icon: "\u{1F504}",
        title: "Recurring delivery without recurring effort",
        description:
          "The brief is generated on schedule with no analyst hours required.",
      },
      {
        icon: "\u{1F4C8}",
        title: "Trending competitor themes",
        description:
          "Surfaces which competitors are being mentioned more this month, which features customers are comparing.",
      },
    ],
    inPractice:
      "The Chief of Staff needs the monthly competitive brief by the 1st. Sentra delivers a draft on the 30th: Competitor A launched a new API integration tier (mentioned positively by 3 prospects). Competitor B dropped pricing by ~15% (mentioned by 6 prospects). Competitor C was mentioned 34 times this month, up from 11, primarily in CS escalations. The 16-hour task is now a 3-hour edit.",
    before:
      "An analyst spends 16 hours monitoring competitor websites, review sites, LinkedIn, and publications\u2014producing a brief that misses internal competitive intelligence.",
    after:
      "Sentra synthesizes internal competitive mentions with external signals and delivers the brief automatically. 16 analyst hours becomes 3 hours of review.",
  },
  {
    id: "uc-20",
    number: "20",
    title: "A 3-week procurement approval collapsed to 3 days",
    subtitle: "Every approver gets a pre-assembled brief instead of a blank email.",
    category: "operational",
    challenge:
      "A department needs new software. The approval chain is: budget check with Finance, security review with IT, legal review with Compliance, vendor assessment with Procurement, and final sign-off from the VP. Each step waits on the previous, and each person starts from zero. The process takes 2\u20133 weeks.",
    deliverables: [
      {
        icon: "\u{1F4B0}",
        title: "Budget context pre-gathered",
        description:
          "Budget headroom from the last planning meeting, the line item it maps to, and the approved spend envelope\u2014surfaced before Finance is even asked.",
      },
      {
        icon: "\u{1F512}",
        title: "Security posture pre-assessed",
        description:
          "Relevant requirements from IT\u2019s last security audit, previous vendor security reviews, and compliance constraints.",
      },
      {
        icon: "\u2696\uFE0F",
        title: "Legal precedents pulled",
        description:
          "Similar vendor agreements reviewed in the past, standard clauses accepted or rejected, and compliance flags.",
      },
      {
        icon: "\u26A1",
        title: "Parallel pre-briefed approval",
        description:
          "All 5 approvers receive a pre-assembled context package simultaneously, reducing sequential weeks to parallel days.",
      },
    ],
    inPractice:
      "The Head of Marketing submits a $48,000 annual ABM platform request through Sentra. Within 10 minutes, 5 briefing packages are assembled and sent simultaneously. All 5 approvers respond within 48 hours. A process that typically takes 3 weeks takes 3 days.",
    before:
      "The requester sends 5 cold emails to 5 approvers, each starting from zero. Sequential dependencies stretch the process to 2\u20133 weeks.",
    after:
      "Sentra pre-assembles a context package for every approver simultaneously. All 5 approvals arrive in 48 hours instead of 3 weeks.",
  },
  {
    id: "uc-21",
    number: "21",
    title: "Vendor renewal decisions made on complete data, not a 20% survey response",
    subtitle: "Sentra already heard what your organization thinks about every vendor.",
    category: "operational",
    challenge:
      "Every quarter, procurement reviews vendor contracts up for renewal. The standard process is a survey\u2014which gets a 20% response rate. Decisions are made on incomplete data. Vendors get renewed who shouldn\u2019t, and vendors who deliver real value get cut because the positive feedback never made it into the survey.",
    deliverables: [
      {
        icon: "\u{1F4AC}",
        title: "Complete organizational sentiment",
        description:
          "Every Slack mention, meeting reference, support ticket, and email about the vendor is captured and synthesized.",
      },
      {
        icon: "\u{1F4CA}",
        title: "Usage data contextualized",
        description:
          "Actual seat utilization and feature adoption matched against what was contracted.",
      },
      {
        icon: "\u{1F504}",
        title: "Competitive alternatives surfaced",
        description:
          "If someone mentioned an alternative tool internally, Sentra surfaces it as renewal context.",
      },
      {
        icon: "\u{1F4CB}",
        title: "Renewal recommendation with evidence",
        description:
          "A procurement brief for each vendor: renew, renegotiate, or replace\u2014with quantified sentiment data.",
      },
    ],
    inPractice:
      "Procurement reviews a $180,000 data enrichment vendor. Sentra surfaces: 14 engineering complaints about API reliability over 90 days, 3 CS team praises for support responsiveness, the CTO mentioning an alternative 5 weeks ago, and 68% seat utilization. The procurement manager negotiates a 22% price reduction and a 99.5% uptime SLA.",
    before:
      "Procurement sends surveys, gets 20% response rates, and makes renewal decisions on incomplete data.",
    after:
      "Sentra synthesizes every internal mention, producing a renewal brief with quantified sentiment, usage data, and competitive alternatives.",
  },
  {
    id: "uc-22",
    number: "22",
    title: "Audit-ready compliance documentation assembled from actual evidence",
    subtitle: "Sentra captures who knew what, when, and what action was taken\u2014automatically.",
    category: "operational",
    challenge:
      "In regulated industries, compliance officers spend days before each audit gathering evidence from email inboxes, Slack channels, Confluence pages, and meeting recordings. Compliance teams spend 60\u201370% of audit preparation time on information retrieval, not analysis.",
    deliverables: [
      {
        icon: "\u{1F4DC}",
        title: "Continuous audit trail",
        description:
          "Policy discussions, training acknowledgments, incident discussions, and decision rationale captured and indexed in real time.",
      },
      {
        icon: "\u{1F4E6}",
        title: "Evidence packaging for audit requests",
        description:
          "When an auditor asks for evidence, Sentra surfaces every relevant conversation with timestamps and participant records.",
      },
      {
        icon: "\u{1F6A8}",
        title: "Incident documentation from escalation threads",
        description:
          "For each incident: when identified, who was notified, what actions were taken, and what was communicated to affected parties.",
      },
      {
        icon: "\u{1F50D}",
        title: "Compliance gap detection",
        description:
          "Identifies teams or individuals who haven\u2019t acknowledged a policy or completed required training before the audit begins.",
      },
    ],
    inPractice:
      "A compliance officer at a regional bank prepares for an OCC examination. She runs three queries and within 4 hours has: BSA/AML training acknowledgments (with 53 employees flagged as missing), a complete SAR response timeline, and credit risk policy review status (2 of 8 department head acknowledgments missing). Compliance gaps are identified and remediated before the examiner arrives.",
    before:
      "Compliance officers spend 60\u201370% of audit preparation time searching for evidence. Gaps surface only when the auditor asks.",
    after:
      "Sentra has already indexed the evidence. Audit package assembly takes hours, not days. Compliance gaps are identified before the auditor walks in.",
  },
  {
    id: "uc-23",
    number: "23",
    title: "A standardized weekly ops report across 12 locations, without 12 phone calls",
    subtitle: "Sentra captures location manager check-ins and produces the cross-location view automatically.",
    category: "operational",
    challenge:
      "A regional manager overseeing 12 locations needs a weekly operational report: staffing, inventory, customer complaints, maintenance, and performance metrics. Each location manager reports in a different format, at a different time, with different detail. Compiling takes 3 hours every Monday morning.",
    deliverables: [
      {
        icon: "\u{1F4CA}",
        title: "Standardized cross-location report",
        description:
          "Location check-ins and team chat discussions normalized into a consistent reporting format.",
      },
      {
        icon: "\u{1F6A8}",
        title: "Anomaly detection",
        description:
          "Flags outlier locations: staffing shortfalls, customer complaint spikes, unusual patterns.",
      },
      {
        icon: "\u{1F527}",
        title: "Maintenance and escalation tracking",
        description:
          "Equipment failures and customer escalations mentioned in team chats are captured even without formal tickets.",
      },
      {
        icon: "\u{1F319}",
        title: "Monday morning report ready Sunday night",
        description:
          "The weekly summary is generated from captured conversations and delivered before the manager wakes up.",
      },
    ],
    inPractice:
      "A regional manager for a quick-service restaurant chain opens Sentra at 8 AM Monday and finds a complete cross-location ops report. Location 4 had a walk-in cooler failure, escalated to the facilities vendor automatically. Location 9 had a 4.2\u00d7 customer complaint spike. Location 11 had a staffing shortfall, with a suggested reallocation from Location 6. The manager spends 35 minutes reviewing instead of 3 hours compiling.",
    before:
      "The regional manager spends 3 hours every Monday compiling 12 inconsistent location reports by phone and email.",
    after:
      "Sentra assembles a standardized cross-location report from captured conversations, delivered Sunday night. Monday is 35 minutes of review.",
  },
  {
    id: "uc-24",
    number: "24",
    title: "Client onboarding tracked across 5 teams, without a spreadsheet",
    subtitle: "Sentra knows which steps are done, which are stalled, and which haven\u2019t started yet.",
    category: "operational",
    challenge:
      "When a new enterprise client signs, onboarding involves 15\u201325 discrete steps across 4\u20135 teams. The project manager tracks it all in a Smartsheet or Notion spreadsheet, chasing people via Slack and email. The spreadsheet reflects self-reporting, not reality.",
    deliverables: [
      {
        icon: "\u2705",
        title: "Step completion detected from communications",
        description:
          "MSA countersignature confirmed from DocuSign email. IT access confirmed from Slack. No one updates a tracker.",
      },
      {
        icon: "\u{1F515}",
        title: "Silence detection for stalled steps",
        description:
          "Flags steps that haven\u2019t appeared in any communication for more than N days.",
      },
      {
        icon: "\u{1F465}",
        title: "Cross-team onboarding view",
        description:
          "Legal, IT, CS, Implementation, and Finance each see their own steps; the CSM sees the full picture.",
      },
      {
        icon: "\u{1F4E8}",
        title: "Client-ready status report",
        description:
          "A client-facing update drafted from actual step completion data.",
      },
    ],
    inPractice:
      "Meridian Analytics signs an enterprise contract on Tuesday. By Friday, Sentra shows: Legal\u2014MSA countersigned. IT\u2014SSO provisioning complete. CS\u2014Kickoff call scheduled. Implementation\u2014STALLED: no mention for 72 hours. Finance\u2014not started. The CSM sends two targeted messages; both respond within 2 hours. The onboarding stays on track.",
    before:
      "The PM maintains a spreadsheet updated by self-reporting. Stalls are indistinguishable from progress until the client asks why they\u2019re not live yet.",
    after:
      "Sentra detects step completions from actual communications and flags stalls by monitoring silence. The tracker is always current.",
  },
  {
    id: "uc-25",
    number: "25",
    title: "The 40-page board package assembled from the organization\u2019s actual state",
    subtitle: "Not from what VPs remembered to write down\u2014from what actually happened.",
    category: "operational",
    challenge:
      "Before a quarterly board meeting, the EA or Chief of Staff assembles a 35\u201350 page prep package by chasing 6\u20138 VPs for written updates, reconciling conflicting numbers, and fact-checking claims. It takes two weeks of active coordination. The resulting document reflects what VPs chose to surface, not necessarily the full organizational reality.",
    deliverables: [
      {
        icon: "\u{1F4DD}",
        title: "Department updates from actual meeting content",
        description:
          "Each VP\u2019s section is drafted from their own team\u2019s meetings and planning sessions, not from what the VP remembered to write.",
      },
      {
        icon: "\u26A0\uFE0F",
        title: "Risk items from leadership conversations",
        description:
          "Issues raised in leadership syncs and concerns flagged in 1-on-1s are surfaced alongside the formal risk register.",
      },
      {
        icon: "\u{1F4B0}",
        title: "Financial narrative reconciled against Finance team discussions",
        description:
          "The financial summary is drafted from Finance\u2019s own review meetings.",
      },
      {
        icon: "\u{1F3AF}",
        title: "Strategic initiative status from cross-functional check-ins",
        description:
          "Progress tracked from the actual meetings where the work is happening.",
      },
    ],
    inPractice:
      "10 days before the Q3 board meeting, the Chief of Staff opens Sentra and requests a first-draft board package. Within 20 minutes, Sentra returns a 38-page draft assembled from the quarter\u2019s captured conversations. The Sales section includes a nuance about SMB churn that the VP might have soft-pedaled. The Risk section includes 4 additional items surfaced from leadership conversations beyond the formal register. The Chief of Staff spends 3 days refining instead of 2 weeks chasing VPs.",
    before:
      "Two weeks of chasing VPs for updates, reconciling conflicting numbers. The final package reflects what VPs chose to surface, not organizational reality.",
    after:
      "Sentra assembles the first-draft board package from the organization\u2019s actual conversations. Two weeks becomes 3 days.",
  },
];

export type { UseCaseData, CategoryData, Deliverable };
