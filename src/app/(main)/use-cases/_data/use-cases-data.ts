export interface Deliverable {
  icon: string;
  title: string;
  description: string;
}

export interface UseCaseData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "memory" | "awareness" | "artifacts" | "workflow-collapse" | "operational-autopilot";
  hoverText: string;
  expandedText: string;
  challenge: string;
  deliverables: Deliverable[];
  inPractice: string;
  before: string;
  after: string;
}

export interface CategoryData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
}

export const categoryIcons: Record<string, string> = {
  memory: "M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zm0 5h16",
  awareness: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 100 6 3 3 0 000-6z",
  artifacts: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
  "workflow-collapse": "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  "operational-autopilot": "M12 8a4 4 0 100 8 4 4 0 000-8z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09c-.658.003-1.25.396-1.51 1z",
};

export const categories: CategoryData[] = [
  {
    id: "memory",
    slug: "organizational-memory",
    title: "Organizational Memory",
    subtitle: "Sentra captures what happened before it disappears.",
  },
  {
    id: "awareness",
    slug: "organizational-awareness",
    title: "Organizational Awareness",
    subtitle: "Sentra sees across the org so you don\u2019t have to.",
  },
  {
    id: "artifacts",
    slug: "artifacts-generated",
    title: "Artifacts Generated, Not Entered",
    subtitle: "Every document derived from interactions Sentra already holds.",
  },
  {
    id: "workflow-collapse",
    slug: "workflow-collapse",
    title: "Workflow Collapse",
    subtitle: "Entire processes that disappear when intelligence is complete.",
  },
  {
    id: "operational-autopilot",
    slug: "operational-autopilot",
    title: "Operational Autopilot",
    subtitle: "Recurring tasks that run themselves when intelligence is always on.",
  },
];

export const useCases: UseCaseData[] = [
  {
    id: "uc-01",
    number: "01",
    title: "Your organization\u2019s operating system",
    subtitle: "Strategic awareness without micromanagement",
    category: "awareness",
    hoverText:
      "Strategic priorities get set in board meetings and quietly drift for months before anyone notices. Sentra tracks every priority from the moment it\u2019s spoken and surfaces drift in days, not quarters \u2014 without anyone filing a report.",
    expandedText:
      "You set the direction in board meetings and leadership offsites. Then you spend weeks wondering whether it\u2019s actually being executed. The information that reaches you has been filtered through three layers of management, each adding optimism and removing nuance. By the time a strategic priority is visibly failing, it\u2019s already months behind. Sentra tracks every board-level priority through subsequent leadership syncs, team standups, and planning sessions \u2014 automatically, without asking anyone to self-report. It shows you which priorities have clear owners and active discussion, which have been mentioned but lack committed timelines, and which have gone completely silent. Every strategic decision carries its full reasoning trace, so six months from now anyone can understand not just what was decided, but why. The CEO catches the gap before it becomes a quarter-long blind spot. No one files a report. No one is asked. Drift is surfaced in days, while there is still time to course-correct.",
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
    category: "awareness",
    hoverText:
      "Staying informed across four teams means either sitting in 15+ meetings a week or relying on summaries that strip out the details you actually need. Sentra gives you the signal without the seat time \u2014 and catches cross-team conflicts before either team has written a line of production code.",
    expandedText:
      "You manage four teams, each with their own standups, retros, planning sessions, and Slack channels. Staying informed means either attending 15+ meetings a week or relying on secondhand summaries that lose the nuance you need to make good decisions. Cross-team dependencies are invisible until they break. Conflicting decisions across teams surface only at integration time, when the cost of fixing them is highest. Sentra synthesizes what\u2019s happening across every team from their actual conversations \u2014 continuously, not from someone\u2019s Friday afternoon recollection. It automatically identifies when teams are working on overlapping or conflicting approaches before either ships. It surfaces decisions that need your input based on impact and risk, not based on someone remembering to loop you in. A conflict that would have surfaced during integration testing as a P0 blocker gets flagged on day four, when a 30-minute conversation can resolve it. You attend only the meetings where you add value. The signal finds you everywhere else.",
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
    category: "awareness",
    hoverText:
      "You spend 30 minutes every morning assembling context from five different tools before you can even start leading. Sentra does that assembly automatically \u2014 so you walk into every 1-on-1 and standup already knowing what\u2019s actually happening.",
    expandedText:
      "Your mornings start with context assembly: checking Jira for what moved, scanning Slack for what happened overnight, reviewing PRs to understand progress, mentally reconstructing who committed to what and whether it\u2019s on track. Your 1-on-1s start with \u201Cso, what\u2019s been going on?\u201D because you haven\u2019t had time to prepare. Stakeholder updates get written from memory on Friday afternoons. Sentra captures every commitment automatically \u2014 every \u201CI\u2019ll have it done by Friday,\u201D whether it was said in standup, Slack, or a side conversation \u2014 and tracks it without anyone updating a spreadsheet. Before every 1-on-1, it surfaces a briefing: overdue items, blockers mentioned in retro, sentiment shifts, topics that need follow-up, and week-over-week patterns in commits and activity. Velocity trends, completion rates, and carry-over patterns are visible without maintaining anything. Red flags surface before standup: blocked PRs, stale commitments, missed deadlines, engineers who\u2019ve gone quiet. You walk in prepared to have the right conversation. You spend your time leading, not administrating.",
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
    category: "memory",
    hoverText:
      "Decisions that affect your work get made in meetings you weren\u2019t in, and you find out days later in a Slack thread. Sentra surfaces every decision, change, and commitment that touches your work the moment it happens \u2014 no matter where it was made.",
    expandedText:
      "You\u2019re heads-down on a feature when a decision made in a meeting you didn\u2019t attend changes the API you\u2019re building against. You find out three days later in a Slack thread. This is not an edge case \u2014 it\u2019s the default state of working inside a complex organization. Context is constantly being generated in rooms you\u2019re not in, and no system routes it to the people who need it. Sentra understands your role, your active work, and your dependencies \u2014 and delivers a personalized feed of decisions, changes, and commitments that affect you specifically, surfaced from meetings you didn\u2019t attend and channels you don\u2019t monitor. When you join a new project, you receive a complete briefing: every decision made, the alternatives considered and why they were rejected, the constraints discussed, the open questions remaining \u2014 synthesized from every meeting that shaped the project, including ones that happened before you joined. The rationale behind decisions from three months ago is instantly accessible, even when the person who made them has moved teams. You stop attending meetings just in case. The context finds you.",
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
    category: "memory",
    hoverText:
      "Your CRM stores what was logged \u2014 not what actually happened. Sentra captures every call, email, and meeting with full nuance, so the complete story of every account survives handoffs, turnover, and time.",
    expandedText:
      "The real story of a customer relationship has never lived in your CRM. It lives in the heads of the people who work the account \u2014 the tone of a CFO\u2019s last email, the commitment your CEO made over dinner, the competitor mentioned three times in six weeks. When those people go on vacation, change roles, or leave, that story goes with them. Handoffs are lossy by design. Promises made on calls are forgotten. Objections that keep resurfacing are never formally tracked. Sentra captures every interaction with its full context: not just what was said, but how it was received, what was promised, and what went unsaid. Recurring objections are tracked across conversations. Sentiment shifts are detected before they become churn signals. When an account manager changes, their replacement receives the complete relationship history \u2014 the texture of recent calls, the internal champions, the commitments made outside the CRM \u2014 before their first conversation with the client. Your organization never forgets a customer conversation, even when the people who had it are gone.",
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
    category: "artifacts",
    hoverText:
      "Every meeting with real decisions spawns 45 minutes of follow-up work \u2014 tickets, summaries, follow-up emails \u2014 done from imperfect memory after the fact. Sentra drafts every artifact the moment the call ends, ready for a 90-second review.",
    expandedText:
      "Every meeting with real decisions in it spawns a second meeting\u2019s worth of work: opening Jira to create tickets, pasting action items from notes one by one, assigning owners while second-guessing who actually committed to what, estimating due dates from vague phrases like \u201Cend of sprint,\u201d drafting a Slack summary you rewrite three times before posting. By the time the follow-up is done, the next meeting has started. And all of it is done from imperfect memory. Sentra captures every commitment, decision, and action item in real time and drafts every downstream artifact the moment the call ends. Jira tickets are created with titles, descriptions, assignees matched to who said \u201CI\u2019ll handle it,\u201d and due dates derived from spoken timelines \u2014 \u201Cbefore Thursday\u2019s demo\u201D resolves to Wednesday EOD. A structured Slack summary is drafted for the team channel with decisions bolded and open questions flagged. Follow-up emails are personalized to each attendee, referencing their specific commitments. A review panel surfaces everything for one-tap approval. The 45-minute routine becomes a 4-minute review.",
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
    category: "artifacts",
    hoverText:
      "QBR prep takes four to six hours of manual reconstruction from Notion, Amplitude, and Slack \u2014 and the deck still misses half of what actually happened. Sentra assembles a complete first draft from the quarter\u2019s actual conversations, metrics, and decisions in minutes.",
    expandedText:
      "Every quarter, PMs spend four to six hours building a QBR deck by manually reconstructing what happened. They skim through meeting notes in Notion, export charts from Amplitude, dig through old Slack threads to find the right quote. The deck always feels thin because the PM is working from a 10% sample of what actually occurred \u2014 the decisions discussed in meetings they attended, the metrics they happened to export, the quotes they happened to remember. Sentra extracts every decision made this quarter from meetings and structures it into slide-ready content with dates and source meeting references. It compiles a metrics narrative from standup data \u2014 not just the numbers, but what the team said about them and what interventions they made. It synthesizes customer feedback themes from sales calls, CS escalations, and user interviews. It matches engineering retro blockers to their resolutions, showing how the team navigated obstacles across the quarter. A complete structured slide outline is ready in three minutes. The PM spends 45 minutes customizing the framing. The deck is done by 8 PM the night before.",
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
    category: "artifacts",
    hoverText:
      "Every Friday, a VP writes three versions of the same week \u2014 a tight executive summary, a tactical digest, and a milestone update \u2014 each requiring a different register, from scratch. Sentra drafts all three from the week\u2019s actual activity; the VP edits for 12 minutes and sends.",
    expandedText:
      "Every Friday, a VP writes three versions of the same week in review: a tight executive summary for their skip-level who needs orientation, not detail; a tactical rundown for their direct reports with specific ticket references and open items; and a milestone-framed update for external stakeholders calibrated against committed deliverables. Each requires a different register, a different level of detail, and a different framing of the same underlying facts. Context-switching between all three from scratch takes 90 minutes \u2014 and each version is written from whatever the VP remembers to include at 5 PM. Sentra generates all three from the week\u2019s actual activity: the 14 team meetings, three design reviews, and two engineering syncs that actually happened. The executive summary synthesizes the week\u2019s most significant progress, decisions, and risks in four to five sentences. The tactical digest covers what shipped, what slipped, key decisions made, and open items. The milestone update frames progress against committed deliverables with completion percentages and risk flags. The VP reviews, edits for 12 minutes, and sends all three. The 90-minute block is free.",
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
    category: "memory",
    hoverText:
      "New hires spend their first two weeks in archaeology mode \u2014 reading outdated docs, scheduling introductory 1-on-1s, asking questions teammates have already answered twice. Sentra delivers a complete, current, personalized brief before their first standup.",
    expandedText:
      "The institutional knowledge that actually matters to a new hire has never lived in Confluence. It lives in the decisions made before they arrived, the architectural debates still open in Slack, the communication norms nobody wrote down, and the context cards for the six people they\u2019ll work most closely with. Reading outdated documentation gives a new hire a map of where the organization was, not where it is. Introductory 1-on-1s give them whoever their colleagues remember to mention. Sentra generates a role-specific onboarding brief from the organization\u2019s actual recent activity: the three active projects the team is running, the two open architectural debates, the meeting cadences, and context cards for each key collaborator \u2014 what they work on, what decisions they own, the best way to engage with them. The brief is ranked by what actually matters, not by what someone remembered to put in a Notion page. New hires arrive knowing what the team knows. They ask one sharp, informed question in standup on day one. They reach full productivity in days, not weeks.",
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
    category: "workflow-collapse",
    hoverText:
      "Before every customer call, an AE spends 30 minutes doing manual archaeology across Salesforce, Gmail, and Gong \u2014 and post-call CRM updates get skipped because the next call is already starting. Sentra delivers a complete pre-call brief in 90 seconds and updates Salesforce automatically within minutes of hanging up.",
    expandedText:
      "Before every customer call, an AE opens four tabs: Salesforce for account history, Gmail for recent email threads, Gong for the last call recording, LinkedIn for background on whoever just joined the account. It takes 30 minutes \u2014 and that\u2019s before the call has started. After the call, the CRM update gets skipped because the next call begins in ten minutes and the notes are still in a personal document that will never be transferred. Commitments made on the call live in memory until they don\u2019t. Sentra compiles a complete pre-call intelligence brief in 90 seconds: the last three interaction summaries with sentiment indicators, all open commitments from both sides, competitive mentions across the full account history, and pricing objections that have recurred. It surfaces suggested talking points based on what has resonated with similar accounts at the same stage and flags overdue commitments before the call starts. Within three minutes of hanging up, Salesforce is updated: next steps logged, stage progression signals recorded, new contacts mentioned captured, commitments made during the call tracked. Any commitment that conflicts with internal capacity or timelines is flagged immediately. Thirty-five minutes of prep and post-call admin becomes a 90-second brief and an automatic update.",
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
    category: "artifacts",
    hoverText:
      "Building a headcount justification means a weekend of manual data gathering from Jira, Slack, and sprint reports \u2014 producing a deck that still feels thin. Sentra compiles velocity trends, commitment ratios, blocker patterns, and verbatim team quotes in five minutes.",
    expandedText:
      "Justifying additional headcount or budget requires assembling a business case from scratch: manually pulling sprint velocity data from Jira, exporting burndown charts, hunting through Slack threads where engineers mentioned being underwater. The strongest evidence \u2014 the actual words your team used in retros and standups \u2014 is locked in meeting recordings nobody will go back and watch. The result is a deck that feels thin even after a weekend of manual work, and a conversation with leadership that lacks the specificity to be convincing. Sentra compiles the evidence from what actually happened. Sprint velocity trends with inflection points. The commitment-to-delivery ratio \u2014 the gap between what the team committed to in planning and what actually shipped \u2014 quantified across the past two quarters. The percentage of standup and planning time spent discussing blocked items versus active progress. And verbatim quotes from engineers in retros, standups, and Slack where capacity constraints were explicitly raised, with timestamps. The business case assembles itself in five minutes. The conversation with leadership takes fifteen.",
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
    category: "awareness",
    hoverText:
      "Coordinating a product launch across six teams requires a weekly 15-person status meeting where half the room is there only to give a 60-second update. Sentra tracks every team\u2019s real status from their own conversations \u2014 so the status meeting never has to happen.",
    expandedText:
      "Product launches require coordination across engineering, design, marketing, sales enablement, legal, and support. The standard solution is a weekly all-hands status meeting where half the attendees are present only to give a 60-second update. Between meetings, a shared Google Sheet degrades into a record of what someone said they\u2019d do, not what\u2019s actually happening. Blockers surface late, when the cost of addressing them is highest. Sentra tracks every team\u2019s real status from their own meetings and Slack channels \u2014 no one updates a tracker, teams simply do their work. A unified launch dashboard shows actual readiness, not self-reported readiness. When a team hasn\u2019t mentioned their deliverable in any meeting or channel for ten days, Sentra flags it. Blockers surface immediately with estimated impact on the timeline. The program manager sees what needs attention, sends two targeted messages, and unblocks both issues within the hour. The 15-person status meeting never happens. The launch lands on time.",
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
    category: "memory",
    hoverText:
      "Performance reviews are written from whatever managers happened to write down \u2014 which means recency bias wins and quiet high performers lose. Sentra assembles a complete six-month evidence package per person from actual work signals, not memory.",
    expandedText:
      "Every performance review cycle, the same problem repeats: managers scramble to reconstruct six months of context from whatever they happened to write down. The engineer who shipped three critical features in Q1 gets a thinner review than the one who made noise in Q3, because recency bias is structural, not personal. Managers spend four to six hours per person on review prep and still feel like they\u2019re missing something. Meanwhile, high performers who work quietly are systematically undercounted. Sentra captures the full picture continuously: every feature shipped, every PR merged, every milestone hit. It tracks leadership signals \u2014 when someone ran a technical discussion, proposed a direction that was adopted, or unblocked a teammate. It surfaces mentoring and growth indicators from 1-on-1 patterns and async Slack explanations for junior engineers. It identifies growth areas from actual friction \u2014 recurring topics where someone asked for help, blockers they got stuck on, patterns suggesting development opportunities. Every evidence package is ready in under two minutes. Four to six hours of review prep per person becomes ten minutes of reading what actually happened.",
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
    category: "artifacts",
    hoverText:
      "After a 90-minute discovery call, a consultant faces four to six hours of proposal writing from a blank template \u2014 and the first draft gets rewritten because the framing doesn\u2019t match the client\u2019s actual language. Sentra drafts a complete proposal from the call transcript; the consultant refines for 75 minutes and sends the same day.",
    expandedText:
      "After a 90-minute discovery call, the work that should be finished is just beginning. The consultant opens a blank template, translates messy call notes into structured requirements, searches through past engagement folders to find a relevant case study, estimates a timeline from intuition rather than data, and tries to frame everything in language that matches what the client actually said. The first draft lands with a principal who rewrites half of it because the framing missed the client\u2019s own words. The proposal arrives three days after the call. Sentra structures the client\u2019s stated challenges into clear problem statements using their own language \u2014 extracted directly from the call transcript. It retrieves matched case studies from past engagements with similar problems, surfacing outcomes and timelines. It estimates project phases and durations based on how long similar engagements actually took, not from guesswork. It maps the client\u2019s specific asks to the firm\u2019s service catalog. A complete seven-section proposal is drafted by 11:45 AM on the same day as the discovery call. The consultant refines for 75 minutes. The proposal lands in the client\u2019s inbox at 2 PM \u2014 the same day they spoke.",
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
    category: "artifacts",
    hoverText:
      "Post-mortem assembly takes two to three days of interviewing tired engineers and reconstructing timelines from incomplete Slack threads. Sentra reconstructs the complete incident timeline automatically \u2014 the post-mortem is 80% complete before anyone opens a Google Doc.",
    expandedText:
      "After a production incident, the people who need to write the post-mortem are the same people who just spent hours fighting the fire. The incident commander interviews engineers who are already exhausted and operating from fragmented memory. Someone digs through Slack. Another engineer exports PagerDuty logs. A third reviews the support ticket queue. The resulting document is a best-effort reconstruction, not a definitive record \u2014 and it takes two to three days to produce. Sentra reconstructs a minute-by-minute incident timeline from Slack messages, PagerDuty alerts, meeting transcripts, and runbook commands, creating a definitive sequence of events without interviewing anyone. It structures a root cause candidate analysis: what engineers hypothesized during the incident, what was ruled out and why, and the leading root cause theory. It builds a customer impact summary from support tickets opened during the incident window and CS team conversations. Every \u201Cwe should fix that\u201D from the debrief becomes a structured action item with an owner and category, pre-assigned. The incident commander spends 40 minutes on narrative and review \u2014 not two days on reconstruction.",
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
    category: "workflow-collapse",
    hoverText:
      "After a medical procedure, employees face a two-hour administrative ordeal spread across three to five days \u2014 and many abandon it entirely. Sentra connects the procedure date, policy number, and coverage details it already holds and pre-fills 14 of 15 fields before the employee opens a browser.",
    expandedText:
      "An employee has an outpatient procedure on Thursday. They return to work the following Tuesday. Then the real ordeal begins: locating the right insurance claim form in SharePoint, finding the policy number from an onboarding email sent 18 months ago, gathering receipts and procedure codes, filling 15 fields from memory, submitting to HR, and waiting for someone to verify and process it. The whole process takes two hours of focused effort spread across three to five days \u2014 and employees abandon it entirely at a rate high enough to represent meaningful unclaimed benefits. Sentra holds the information the form requires. It knows the employee\u2019s policy number, coverage tier, and insurer from benefits onboarding. It knows the procedure date from the leave request. It knows the HR system\u2019s requirements from prior claims processed through the same workflow. The moment an employee mentions the procedure \u2014 in a 1-on-1, in a leave request, in a message to HR \u2014 Sentra connects the dots. A draft claim appears with 14 of 15 fields pre-filled. The employee uploads one document. HR approves with a single click. A process that took three to five days takes eight minutes.",
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
    category: "operational-autopilot",
    hoverText:
      "At quarter-end, HR spends five days manually cross-referencing HRIS exports, manager emails, and Slack threads to reconcile leave balances and catch compliance gaps. Sentra captures every leave approval across every surface and delivers an audit-ready reconciliation report in six hours.",
    expandedText:
      "At quarter-end, HR must reconcile who took which leaves, whether approved time off was actually logged in the HRIS, which team leads approved leave verbally in 1-on-1s but never submitted paperwork, and whether the company is compliant with local labor laws that require minimum leave usage. This means manually cross-referencing HRIS exports against manager emails against Slack threads \u2014 a five-day process that still produces gaps because informal approvals are invisible to any single system. Sentra captures every leave approval across every surface it occurs on: spoken in a 1-on-1, typed in a Slack message, sent in a manager email, or formally submitted through the HRIS. It reconciles them against the system of record, identifies every instance where a verbal approval has no corresponding HRIS entry, and surfaces the specific conversation as evidence. It flags employees who haven\u2019t used mandatory leave minimums by quarter-end, giving HR time to remediate before the deadline. The complete audit-ready reconciliation report \u2014 with every discrepancy documented and every piece of evidence attached \u2014 is generated in minutes. Five days becomes six hours.",
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
    category: "workflow-collapse",
    hoverText:
      "After a property showing, a real estate agent faces eight to twelve forms under offer-deadline pressure, pulling details from handwritten notes, voice memos, and text threads \u2014 where errors happen and deals fall through. Sentra pre-fills every form from captured conversations; the agent reviews for eight minutes and submits.",
    expandedText:
      "After a property showing, a real estate agent faces eight to twelve forms that need to be completed and submitted before the offer deadline. Each form requires details scattered across different sources: the buyer\u2019s budget ceiling from the initial consultation two weeks ago, the contingencies discussed during the Saturday showing, the financing terms from the lender conversation last Thursday, the inspection concerns raised during the debrief. Filling them manually under deadline pressure \u2014 while managing client expectations and competing bids \u2014 is where errors happen, fields get missed, and deals fall through. Sentra captures every relevant detail from every relevant conversation. The buyer profile \u2014 budget ceiling, preferred neighborhoods, must-have features, timeline, financing pre-approval amount \u2014 is assembled from the initial consultation. Property-specific details, contingencies, and inspection concerns are captured from the post-showing debrief. Financing terms and loan type are pulled from the lender conversation. All eight to twelve forms are pre-filled from the captured discussions, ready for review before the agent opens their laptop on Sunday morning. The agent reviews for eight minutes, corrects one field, and submits. The offer arrives first. It arrives error-free.",
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
    category: "operational-autopilot",
    hoverText:
      "An analyst spends 16 hours every month monitoring competitor websites, review sites, and LinkedIn \u2014 and the result misses all the competitive intelligence already living inside your own organization. Sentra synthesizes internal mentions with external signals and delivers the brief automatically; 16 hours becomes three hours of review.",
    expandedText:
      "Every month, the strategy team produces a competitive landscape update. An analyst spends two full days monitoring competitor websites, G2 reviews, LinkedIn posts, and industry publications. The result is a document that captures what\u2019s publicly visible \u2014 product launches, pricing changes, executive hires \u2014 but misses everything your own organization already knows. Your sales reps hear about competitors on every call. Your CS team hears customer comparisons daily. That intelligence never makes it into the brief because no one has time to aggregate it, and asking people to submit competitive mentions produces a fraction of what actually exists. Sentra captures every competitor mention across sales calls, CS escalations, strategy meetings, and Slack and categorizes it automatically. It integrates external signals \u2014 product launches, pricing changes \u2014 with internal context: what your own team said about those developments when they heard about them. It tracks which competitors are being mentioned more this month and which specific features customers are comparing. The brief is generated on schedule with no analyst hours required. It arrives before the 1st. Sixteen analyst hours becomes three hours of review and refinement.",
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
    category: "workflow-collapse",
    hoverText:
      "A software request moves through five sequential approvers, each starting from zero \u2014 and the process takes two to three weeks. Sentra pre-assembles a context package for every approver simultaneously; all five approvals arrive in 48 hours.",
    expandedText:
      "A department needs new software. The approval chain requires a budget check with Finance, a security review with IT, a legal review with Compliance, a vendor assessment with Procurement, and final sign-off from the VP. Each step waits for the previous one to complete. Each person receives a cold email and starts their assessment from zero \u2014 no context from the prior review, no pre-gathered evidence, no parallel progress. The process takes two to three weeks on a good cycle and longer when anyone is traveling or distracted. Sentra pre-gathers budget context from the last planning meeting: the available headroom, the line item it maps to, the approved spend envelope. It pre-assesses security posture from IT\u2019s last audit and any prior vendor security reviews. It pulls legal precedents from similar vendor agreements the firm has reviewed, including standard clauses that were accepted or rejected and any compliance flags. It builds a complete briefing package for each of the five approvers and sends all five simultaneously \u2014 not sequentially. Every approver receives what they need to make their decision on day one. All five approvals arrive within 48 hours. Three weeks becomes three days.",
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
    category: "operational-autopilot",
    hoverText:
      "Vendor renewal decisions are made on survey data that gets a 20% response rate \u2014 which means good vendors get cut and bad ones get renewed. Sentra synthesizes every internal mention of every vendor into a renewal brief with quantified sentiment, actual usage data, and competitive alternatives.",
    expandedText:
      "Every quarter, procurement reviews vendor contracts up for renewal. The standard process is a survey. It gets a 20% response rate. Vendors that have caused real frustration across the engineering team get renewed because the frustrated engineers didn\u2019t fill out the survey. Vendors that deliver genuine value get cut because the people who appreciated them didn\u2019t respond either. Decisions that represent hundreds of thousands of dollars are made on a sample that excludes 80% of the organization\u2019s actual experience. Sentra has already heard what your organization thinks about every vendor. Every Slack mention, every meeting reference, every support ticket, every email that touches a vendor is captured and synthesized \u2014 continuously, not on demand. Actual seat utilization and feature adoption are matched against what was contracted. If someone internally mentioned a competitive alternative, it surfaces as renewal context. The procurement brief for each vendor contains a clear recommendation \u2014 renew, renegotiate, or replace \u2014 backed by quantified sentiment data, specific complaint and praise instances with dates, usage metrics, and any competitive signals. The procurement manager walks into the renewal negotiation with leverage based on what the organization actually experienced, not on what 20% of it chose to report.",
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
    category: "operational-autopilot",
    hoverText:
      "Compliance officers spend 60\u201370% of audit preparation time on information retrieval \u2014 gathering evidence from inboxes, Slack channels, Confluence pages, and meeting recordings. Sentra indexes that evidence continuously in real time, so audit preparation takes hours instead of days and gaps are identified before the examiner arrives.",
    expandedText:
      "In regulated industries, an audit is not a test of how compliant an organization is \u2014 it\u2019s a test of how well the organization can prove it. Compliance officers spend 60 to 70% of audit preparation time not on analysis, but on retrieval: pulling emails from inboxes, searching Slack channels, locating the right Confluence pages, reviewing meeting recordings to find the moment a policy was acknowledged. Gaps surface only when the auditor asks about them \u2014 at which point remediation is reactive, rushed, and visible. Sentra indexes compliance-relevant activity continuously and in real time, without waiting for an audit to trigger the process. Policy discussions, training acknowledgments, incident discussions, and decision rationale are captured and indexed as they happen. When an auditor asks for evidence, every relevant conversation surfaces immediately with timestamps, participant records, and full context. Incident documentation is built from escalation threads: when it was identified, who was notified, what actions were taken, and what was communicated to affected parties. Compliance gaps \u2014 employees who haven\u2019t acknowledged a policy, teams that haven\u2019t completed required training \u2014 are identified and surfaced before the examination begins, while there is still time to remediate. Audit preparation that took days takes hours. Gaps are closed before the examiner walks in.",
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
    category: "awareness",
    hoverText:
      "Every Monday morning, a regional manager spends three hours compiling 12 inconsistent location reports by phone and email. Sentra assembles a standardized cross-location report from captured conversations and delivers it Sunday night \u2014 so Monday is 35 minutes of review, not three hours of compilation.",
    expandedText:
      "Overseeing 12 locations means needing a weekly operational picture covering staffing, inventory, customer complaints, maintenance, and performance metrics. Each location manager reports in a different format, at a different time, with a different level of detail. Compiling it takes three hours every Monday morning \u2014 and even then, things get missed. Equipment failures and customer escalations that were mentioned in team chats but never ticketed stay invisible. Sentra normalizes location check-ins and team chat discussions into a consistent reporting format regardless of how each manager chooses to communicate. It flags outlier locations \u2014 staffing shortfalls, customer complaint spikes, unusual inventory patterns. It captures equipment failures and escalations mentioned casually in team chats, even without a formal ticket. It detects anomalies and surfaces reallocation suggestions. The complete cross-location report is delivered Sunday night, before the manager wakes up. Monday becomes 35 minutes of informed decision-making instead of three hours of information gathering.",
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
    category: "awareness",
    hoverText:
      "When a new enterprise client signs, onboarding spans 15\u201325 steps across five teams \u2014 tracked in a spreadsheet that reflects self-reporting, not reality. Sentra detects step completions from actual communications and flags silence when something has stalled.",
    expandedText:
      "Enterprise client onboarding involves 15 to 25 discrete steps across legal, IT, CS, implementation, and finance. The project manager tracks it all in a Smartsheet or Notion spreadsheet, chasing people via Slack and email to update their rows. The spreadsheet reflects what people say they\u2019ve done, not what\u2019s actually happened. Stalls are indistinguishable from progress until the client asks why they\u2019re not live yet. Sentra detects step completions from actual communications \u2014 a countersignature confirmed from a DocuSign email, IT access confirmed from a Slack message \u2014 without anyone updating a tracker. When a step hasn\u2019t appeared in any communication for more than a defined number of days, it flags the silence. Each team sees their own steps; the CSM sees the full picture. A client-facing status report is drafted from actual completion data, not from what someone remembered to log. The onboarding stays on track because stalls get surfaced in hours, not discovered when the client follows up.",
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
    category: "artifacts",
    hoverText:
      "Assembling a quarterly board package means two weeks of chasing VPs for updates \u2014 and the result reflects what they chose to surface, not organizational reality. Sentra drafts the full package from the organization\u2019s actual conversations, including the nuances VPs might have soft-pedaled.",
    expandedText:
      "Before every quarterly board meeting, the Chief of Staff assembles a 35 to 50 page prep package by chasing six to eight VPs for written updates, reconciling conflicting numbers, and fact-checking claims against data that may have been selectively framed. It takes two weeks of active coordination. The resulting document reflects what VPs chose to surface \u2014 the achievements they remembered to include, the risks they decided to mention, the context they thought was relevant. Organizational reality is filtered through eight different sets of editorial judgment before it reaches the board. Sentra drafts each VP\u2019s section from their own team\u2019s actual meetings and planning sessions \u2014 not from what the VP remembered to write, but from what the team actually discussed. It surfaces risk items from leadership conversations that never made it onto the formal risk register. It reconciles the financial narrative against Finance\u2019s own review meetings. It tracks strategic initiative status from the cross-functional check-ins where the actual work is being discussed. A first-draft 38-page board package is ready in 20 minutes. The Chief of Staff spends three days refining instead of two weeks chasing. The board sees the organization\u2019s actual state \u2014 including the nuances that might otherwise have been soft-pedaled.",
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

export interface FAQ {
  question: string;
  answer: string;
}

export const categoryFaqs: Record<string, FAQ[]> = {
  memory: [
    {
      question: "What kind of information does Sentra capture?",
      answer:
        "Sentra captures every interaction across your organization \u2014 calls, emails, meetings, Slack messages, and more \u2014 with full nuance. It preserves not just what was said, but how it was received, what was promised, and what went unsaid.",
    },
    {
      question: "How does Sentra handle employee turnover and handoffs?",
      answer:
        "When someone changes roles or leaves, the complete relationship history and institutional knowledge they held is preserved. Their replacement receives the full context \u2014 the texture of recent conversations, internal champions, commitments made outside formal systems \u2014 before their first interaction.",
    },
    {
      question: "How is this different from a knowledge base or wiki?",
      answer:
        "A wiki reflects what someone remembered to write down, which is always incomplete and often outdated. Sentra captures knowledge from actual conversations as they happen, continuously and automatically, so the organization\u2019s memory is always current and complete.",
    },
    {
      question: "How does Sentra help with onboarding new team members?",
      answer:
        "New hires receive a personalized, role-specific brief generated from the organization\u2019s actual recent activity \u2014 active projects, open debates, meeting cadences, and context cards for key collaborators. They arrive knowing what the team knows, reaching full productivity in days instead of weeks.",
    },
    {
      question: "Can Sentra help with performance reviews?",
      answer:
        "Yes. Sentra assembles a complete six-month evidence package per person from actual work signals: features shipped, PRs merged, leadership moments, mentoring indicators, and growth areas. Four to six hours of review prep per person becomes ten minutes of reading what actually happened.",
    },
    {
      question: "Is the captured information searchable?",
      answer:
        "Every interaction Sentra captures is indexed and searchable with full context. The rationale behind decisions from months ago is instantly accessible, even when the people who made them have moved on.",
    },
  ],
  awareness: [
    {
      question: "How does Sentra track strategic priorities without status reports?",
      answer:
        "Sentra observes every board-level priority as it flows through leadership syncs, team standups, and planning sessions. It shows which priorities have active discussion and clear owners, which lack committed timelines, and which have gone silent \u2014 all without anyone filing a report.",
    },
    {
      question: "Can Sentra replace status meetings?",
      answer:
        "In many cases, yes. Sentra tracks every team\u2019s real status from their own meetings and channels. A unified dashboard shows actual readiness, not self-reported readiness. Teams update the view by simply doing their work.",
    },
    {
      question: "How does Sentra detect cross-team conflicts?",
      answer:
        "Sentra synthesizes what\u2019s happening across every team from their actual conversations and automatically identifies when teams are working on overlapping or conflicting approaches \u2014 before either ships. Conflicts that would surface during integration testing get flagged in days.",
    },
    {
      question: "What does Sentra surface before a 1-on-1 meeting?",
      answer:
        "Before every 1-on-1, Sentra provides a briefing with overdue items, blockers mentioned in retros, sentiment shifts, topics that need follow-up, and week-over-week patterns in commits and activity. You walk in prepared to have the right conversation.",
    },
    {
      question: "How does Sentra work across multiple locations or teams?",
      answer:
        "Sentra normalizes information from different teams, locations, and communication styles into a consistent view. It flags outliers, detects anomalies, and surfaces issues that would otherwise stay invisible across organizational boundaries.",
    },
    {
      question: "Does Sentra require teams to change how they work?",
      answer:
        "No. Sentra observes existing workflows \u2014 meetings, Slack channels, email \u2014 without requiring anyone to update a tracker, fill out a form, or change their communication habits. Teams do their work; Sentra captures the signal.",
    },
  ],
  artifacts: [
    {
      question: "What kinds of documents can Sentra generate?",
      answer:
        "Sentra generates meeting follow-ups, Jira tickets, Slack summaries, stakeholder updates, quarterly review decks, business cases, client proposals, post-mortems, and board packages \u2014 all drafted from the actual conversations and decisions that already happened.",
    },
    {
      question: "How accurate are Sentra-generated artifacts?",
      answer:
        "Every artifact is grounded in what was actually discussed, not what someone remembered to include. Commitments are matched to who said them, due dates are derived from spoken timelines, and every claim is traceable to a specific conversation with timestamps.",
    },
    {
      question: "Do I still need to review what Sentra generates?",
      answer:
        "Yes. Sentra drafts artifacts for your review, not for blind approval. The goal is to eliminate the manual assembly work \u2014 the 45-minute routine of creating tickets, writing summaries, and drafting emails \u2014 so you spend minutes reviewing instead of hours constructing.",
    },
    {
      question: "Can Sentra tailor outputs for different audiences?",
      answer:
        "Yes. Sentra generates multiple versions of the same information calibrated for different audiences \u2014 a tight executive summary, a tactical digest for direct reports, and a milestone update for external stakeholders \u2014 each with the right register and level of detail.",
    },
    {
      question: "How does Sentra handle proposal generation after client calls?",
      answer:
        "Sentra structures the client\u2019s stated challenges into clear problem statements using their own language, retrieves matched case studies from past engagements, estimates timelines from historical data, and maps asks to the firm\u2019s service catalog. A complete proposal draft is ready the same day.",
    },
    {
      question: "Can Sentra generate artifacts from past conversations retroactively?",
      answer:
        "Yes. Because Sentra captures conversations continuously, you can request artifacts from any time period. A quarterly review deck can be assembled from the past three months of actual discussions, decisions, and metrics \u2014 even if you didn\u2019t plan to generate it at the time.",
    },
  ],
  "workflow-collapse": [
    {
      question: "What does \u201Cworkflow collapse\u201D mean?",
      answer:
        "Workflow collapse is when an entire multi-step process \u2014 one that previously required manual effort across several tools, people, and days \u2014 is compressed into minutes or seconds because Sentra already holds the intelligence needed to complete it.",
    },
    {
      question: "How does Sentra reduce call prep time?",
      answer:
        "Sentra compiles a complete pre-call intelligence brief in 90 seconds: the last three interaction summaries with sentiment indicators, all open commitments, competitive mentions, and pricing objections. After the call, it updates Salesforce automatically within minutes.",
    },
    {
      question: "Can Sentra pre-fill forms and applications?",
      answer:
        "Yes. Sentra connects information it already holds \u2014 policy numbers, procedure dates, budget details, contingencies from conversations \u2014 and pre-fills forms automatically. An insurance claim that took three to five days takes eight minutes. Offer forms that took hours are ready before the agent opens their laptop.",
    },
    {
      question: "How does Sentra speed up approval chains?",
      answer:
        "Instead of sequential approvers each starting from zero, Sentra pre-assembles a context package for every approver simultaneously \u2014 budget headroom, security posture, legal precedents \u2014 so all approvals can happen in parallel. Three weeks becomes three days.",
    },
    {
      question: "Does Sentra integrate with CRMs and other tools?",
      answer:
        "Yes. Sentra connects with Salesforce, Jira, and other systems to both pull context and push updates. CRM fields are updated from call content, tickets are created from meeting commitments, and status changes are reflected automatically.",
    },
  ],
  "operational-autopilot": [
    {
      question: "What makes these use cases different from workflow collapse?",
      answer:
        "Workflow collapse compresses one-time sequential processes. Operational autopilot addresses recurring tasks \u2014 monthly briefs, quarterly reconciliations, ongoing compliance \u2014 where Sentra\u2019s continuous intelligence eliminates the periodic manual gathering entirely.",
    },
    {
      question: "How does Sentra automate competitive intelligence?",
      answer:
        "Sentra captures every competitor mention across sales calls, CS escalations, strategy meetings, and Slack, then integrates those internal signals with external developments. The monthly brief is generated on schedule with no analyst hours required.",
    },
    {
      question: "Can Sentra help with vendor management and renewals?",
      answer:
        "Yes. Sentra synthesizes every internal mention of every vendor \u2014 complaints, praise, usage data, competitive alternatives \u2014 into a renewal brief with quantified sentiment and a clear recommendation: renew, renegotiate, or replace.",
    },
    {
      question: "How does Sentra support compliance and audit preparation?",
      answer:
        "Sentra indexes compliance-relevant activity continuously: policy discussions, training acknowledgments, incident responses, and decision rationale. When an auditor asks for evidence, every relevant conversation surfaces immediately. Gaps are identified before the examiner arrives.",
    },
    {
      question: "Does Sentra handle HR reconciliation tasks?",
      answer:
        "Yes. Sentra captures every leave approval across every surface \u2014 spoken in a 1-on-1, typed in Slack, or formally submitted \u2014 and reconciles them against the HRIS. It identifies discrepancies, flags compliance gaps, and delivers an audit-ready report. Five days becomes six hours.",
    },
    {
      question: "How often does Sentra update its operational intelligence?",
      answer:
        "Continuously. Unlike periodic manual processes that produce a snapshot, Sentra captures and indexes organizational activity in real time. Reports and briefs reflect the current state of the organization, not what someone remembered to compile at the end of the month.",
    },
  ],
};
