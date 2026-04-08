"use client";

import PageHeader from "@/components/page-header";
import FadeIn from "@/components/fade-in";

const DataPrivacy = () => {
  return (
    <section className="w-full px-6 max-w-4xl mx-auto">
      <PageHeader
        title="Data Privacy & Visibility"
        subtitle="Understanding what data is visible to whom in your organization"
        date="July 18, 2025"
      />

      <FadeIn delay={100}>
        <p className="text-[15px] text-[#52525b] mb-8 leading-relaxed">
          Transparency and privacy are core to how Sentra works. This page
          explains exactly what data different roles in your organization can
          access, how we process information, and what protections are in
          place.
        </p>
      </FadeIn>

      <FadeIn delay={150}>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="bg-white border border-[#e8e8ec] p-6 rounded-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
            <h3 className="text-base font-semibold text-[#1a1a1f] mb-2">
              What is &quot;Company Memory&quot;?
            </h3>
            <p className="text-[14px] text-[#52525b] leading-relaxed">
              Company memory is Sentra&apos;s shared knowledge base containing
              summaries, decisions, and action items from meetings, check-ins,
              and other data sources. It helps teams stay aligned by acting as a
              shared source of truth.
            </p>
          </div>
          <div className="bg-white border border-[#e8e8ec] p-6 rounded-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
            <h3 className="text-base font-semibold text-[#1a1a1f] mb-2">
              Key Privacy Principle
            </h3>
            <p className="text-[14px] text-[#52525b] leading-relaxed">
              Raw sensitive data (like full transcripts) stays with the people
              who generated it. Workspace admins and external team members only
              see processed insights and summaries.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-t border-[#e8e8ec] pt-10 mb-12">
          <h2 className="text-xl font-semibold tracking-tighter text-[#1a1a1f] mb-6">
            Data Sources & Privacy Levels
          </h2>

          <div className="border border-[#e8e8ec] bg-white p-6 rounded-sm mb-8">
            <h3 className="text-lg font-semibold tracking-tighter text-[#1a1a1f] mb-4">
              Meeting Data
            </h3>

            <div className="bg-[#f8f8f8] border border-[#e8e8ec] p-4 rounded-sm mb-6">
              <h4 className="text-[14px] font-semibold text-[#1a1a1f] mb-2">
                Private Meetings
              </h4>
              <p className="text-[14px] text-[#52525b] leading-relaxed">
                Any participant can mark a meeting as <strong className="text-[#1a1a1f]">PRIVATE</strong>{" "}
                by typing <strong className="text-[#1a1a1f]">@sentra private</strong> in the meeting chat
                during a meeting, or marking it private post-meeting on the web
                dashboard. Private meetings are{" "}
                <strong className="text-[#1a1a1f]">never added to company memory</strong> and remain
                visible only to participants.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-[14px] font-semibold text-[#1a1a1f] mb-2">What We Collect</h4>
                <ul className="text-[14px] text-[#52525b] space-y-1">
                  <li>Meeting transcripts</li>
                  <li>Participant list</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-[#1a1a1f] mb-2">What We Generate</h4>
                <ul className="text-[14px] text-[#52525b] space-y-1">
                  <li>Summary</li>
                  <li>Key decisions</li>
                  <li>Status updates</li>
                  <li>Action items</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-[14px] font-semibold text-[#1a1a1f] mb-3">What event participants can see</h4>
                <div className="space-y-2">
                  {["Full meeting transcript", "AI-generated summary and insights", "Action items and key decisions", "Can share with specific non-participants"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-[#2595ee] text-[13px]">&#10003;</span>
                      <span className="text-[14px] text-[#52525b]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[14px] font-semibold text-[#1a1a1f] mb-3">What non-participant workspace members can see</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-[13px] font-semibold text-[#1a1a1f] mb-2">Admins</h5>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2"><span className="text-[#2595ee] text-[13px]">&#10003;</span><span className="text-[14px] text-[#52525b]">Public meeting notes and summaries</span></div>
                      <div className="flex items-center gap-2"><span className="text-[#2595ee] text-[13px]">&#10003;</span><span className="text-[14px] text-[#52525b]">Any meeting shared with them</span></div>
                      <div className="flex items-center gap-2"><span className="text-[#a1a1aa] text-[13px]">&#10005;</span><span className="text-[14px] text-[#a1a1aa]">No access to private meetings at all</span></div>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-[13px] font-semibold text-[#1a1a1f] mb-2">Members</h5>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2"><span className="text-[#2595ee] text-[13px]">&#10003;</span><span className="text-[14px] text-[#52525b]">Access to meetings they attended</span></div>
                      <div className="flex items-center gap-2"><span className="text-[#2595ee] text-[13px]">&#10003;</span><span className="text-[14px] text-[#52525b]">Any meeting shared with them</span></div>
                      <div className="flex items-center gap-2"><span className="text-[#a1a1aa] text-[13px]">&#10005;</span><span className="text-[14px] text-[#a1a1aa]">No access to other meeting notes or transcripts</span></div>
                      <div className="flex items-center gap-2"><span className="text-[#a1a1aa] text-[13px]">&#10005;</span><span className="text-[14px] text-[#a1a1aa]">No access to private meetings at all</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[14px] font-semibold text-[#1a1a1f] mb-2">AI Processing</h4>
                <p className="text-[14px] text-[#52525b]">Summary generation, action item extraction</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-t border-[#e8e8ec] pt-10 mb-12">
          <h2 className="text-xl font-semibold tracking-tighter text-[#1a1a1f] mb-6">
            Additional Privacy Controls
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-[#e8e8ec] bg-white p-6 rounded-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
              <h3 className="text-base font-semibold text-[#1a1a1f] mb-3">Data Retention</h3>
              <ul className="text-[14px] text-[#52525b] space-y-2">
                <li>Private meetings are never added to company memory</li>
                <li>You can request deletion anytime</li>
              </ul>
            </div>
            <div className="border border-[#e8e8ec] bg-white p-6 rounded-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
              <h3 className="text-base font-semibold text-[#1a1a1f] mb-3">Encryption & Security</h3>
              <ul className="text-[14px] text-[#52525b] space-y-2">
                <li>End-to-end encryption in transit</li>
                <li>AES-256 encryption at rest</li>
                <li>SOC 2 Type II compliant</li>
                <li>Regular security audits</li>
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-t border-[#e8e8ec] pt-10 mb-12">
          <h2 className="text-xl font-semibold tracking-tighter text-[#1a1a1f] mb-6">
            Your Rights & Controls
          </h2>
          <div className="space-y-5">
            {[
              { title: "Access Your Data", desc: <>Download all your data at any time by contacting us at <a href="mailto:contact@sentra.app" className="text-[#2595ee] hover:underline">contact@sentra.app</a></> },
              { title: "Delete Your Data", desc: "Request immediate deletion of specific recordings or all data" },
              { title: "Control Sharing", desc: "Choose what insights are shared with your team and workspace admins" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="text-[#2595ee] mt-0.5">&#10003;</span>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#1a1a1f]">{item.title}</h4>
                  <p className="text-[14px] text-[#52525b] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-t border-[#e8e8ec] pt-8 mb-8">
          <div className="bg-white border border-[#e8e8ec] p-6 rounded-sm">
            <h3 className="text-base font-semibold text-[#1a1a1f] mb-2">Questions or Concerns?</h3>
            <p className="text-[14px] text-[#52525b] leading-relaxed mb-2">
              We&apos;re committed to transparency. If you have questions about
              data privacy or want to exercise any of your rights, reach out to us.
            </p>
            <p className="text-[14px] text-[#52525b]">
              Email: <span className="font-semibold text-[#1a1a1f]">contact@sentra.app</span>
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default DataPrivacy;
