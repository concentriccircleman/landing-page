"use client";

import Link from "next/link";
import PageHeader from "@/components/page-header";
import FadeIn from "@/components/fade-in";

interface CareersRole {
  title: string;
  location: string;
  department: string;
  ashbyUrl: string;
}

const CAREERS_ROLES: CareersRole[] = [
  {
    title: "Senior Backend Software Engineer",
    location: "San Francisco / Bay Area",
    department: "Engineering",
    ashbyUrl: "https://jobs.ashbyhq.com/sentra/70005074-668c-4c71-929c-2a17cfaa081e",
  },
  {
    title: "Senior Frontend Software Engineer",
    location: "San Francisco / Bay Area",
    department: "Engineering",
    ashbyUrl: "https://jobs.ashbyhq.com/sentra/876c37ad-1289-425a-b658-7f478c100bd6",
  },
  {
    title: "Software Engineer - Internship",
    location: "San Francisco / Bay Area",
    department: "Engineering",
    ashbyUrl: "https://jobs.ashbyhq.com/sentra/eb51547f-e234-42f7-ab75-ab93717579d9",
  },
  {
    title: "Software Engineer - New Grad",
    location: "San Francisco / Bay Area",
    department: "Engineering",
    ashbyUrl: "https://jobs.ashbyhq.com/sentra/3c9729ca-67b3-4f9f-9c64-5e1e10be1719",
  },
  {
    title: "Machine Learning Research Scientist",
    location: "San Francisco / Bay Area",
    department: "Research",
    ashbyUrl: "https://jobs.ashbyhq.com/sentra/03976429-eb79-48df-8439-29f0cdaba859",
  },
];

const Careers = () => {
  return (
    <section className="w-full px-4">
      <PageHeader title="Careers" subtitle="Join us and help build the future of organizational intelligence" />

      <FadeIn delay={100}>
        <div className="space-y-3">
          {CAREERS_ROLES.map((role, i) => (
            <FadeIn key={role.title} delay={100 + i * 50}>
              <Link
                href={role.ashbyUrl}
                target="_blank"
                rel="noreferrer"
                className="group block border border-[#e8e8ec] bg-white p-5 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="text-[14px] font-semibold text-[#1a1a1f] group-hover:text-[#2595ee] transition-colors duration-150">
                      {role.title}
                    </div>
                    <div className="text-[13px] text-[#a1a1aa] mt-1">
                      {role.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[12px] font-medium text-[#52525b] bg-[#f0f0f2] px-2.5 py-1">
                      {role.department}
                    </span>
                    <svg className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#2595ee] transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default Careers;
