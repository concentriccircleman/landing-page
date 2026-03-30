"use client";

import { useEffect, useState } from "react";
import { countryOptions } from "@/lib/country-options";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import FadeIn from "@/components/fade-in";

interface ContactSalesFormValues {
  workEmail: string;
  firstName: string;
  lastName: string;
  company: string;
  companySize: string;
  country: string;
  heardAboutUs: string;
  heardAboutUsOther: string;
  motivations: string;
}

interface ContactSalesMetadata {
  companySizeOptions: string[];
  countryInputMode: "location" | "select" | "text";
  countryOptions: string[];
}

const SALES_EMAIL_ADDRESS = "contact@sentra.app";
const DEFAULT_COUNTRY_CODE = "US";
const HEARD_ABOUT_US_OTHER_OPTION = "Other";
const HEARD_ABOUT_US_OPTIONS = ["LinkedIn", "X", "Instagram", "Other"];

const normalizeOptionLabel = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .trim();

const Contact = () => {
  const [formValues, setFormValues] = useState<ContactSalesFormValues>({
    workEmail: "",
    firstName: "",
    lastName: "",
    company: "",
    companySize: "",
    country: "",
    heardAboutUs: "",
    heardAboutUsOther: "",
    motivations: "",
  });
  const [submitErrorMessage, setSubmitErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmitSuccessfully, setDidSubmitSuccessfully] = useState(false);
  const [metadata, setMetadata] = useState<ContactSalesMetadata | null>(null);
  const isOtherHeardAboutUsSelected = formValues.heardAboutUs === HEARD_ABOUT_US_OTHER_OPTION;
  const isMetadataReady =
    metadata !== null &&
    metadata.companySizeOptions.length > 0 &&
    (metadata.countryInputMode !== "select" || metadata.countryOptions.length > 0);

  useEffect(() => {
    const loadMetadata = async () => {
      try {
        const response = await fetch("/api/contact-sales", { method: "GET" });
        const responseBody: unknown = await response.json().catch(() => null);
        if (!response.ok) {
          setMetadata(null);
          return;
        }
        if (!responseBody || typeof responseBody !== "object") {
          setMetadata(null);
          return;
        }

        const parsed = responseBody as Partial<ContactSalesMetadata>;
        if (
          !Array.isArray(parsed.companySizeOptions) ||
          !Array.isArray(parsed.countryOptions) ||
          (parsed.countryInputMode !== "location" &&
            parsed.countryInputMode !== "select" &&
            parsed.countryInputMode !== "text")
        ) {
          setMetadata(null);
          return;
        }

        setMetadata({
          companySizeOptions: parsed.companySizeOptions,
          countryInputMode: parsed.countryInputMode,
          countryOptions: parsed.countryOptions,
        });
      } catch {
        setMetadata(null);
      }
    };

    void loadMetadata();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitErrorMessage(null);
    setDidSubmitSuccessfully(false);

    if (!isMetadataReady) {
      setSubmitErrorMessage("Please try again in a moment.");
      return;
    }

    const trimmedFormValues: ContactSalesFormValues = {
      workEmail: formValues.workEmail.trim(),
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      company: formValues.company.trim(),
      companySize: formValues.companySize.trim(),
      country: formValues.country.trim(),
      heardAboutUs: formValues.heardAboutUs.trim(),
      heardAboutUsOther: formValues.heardAboutUsOther.trim(),
      motivations: formValues.motivations.trim(),
    };

    if (
      !trimmedFormValues.workEmail ||
      !trimmedFormValues.firstName ||
      !trimmedFormValues.lastName ||
      !trimmedFormValues.company ||
      !trimmedFormValues.companySize ||
      !trimmedFormValues.country ||
      !trimmedFormValues.heardAboutUs ||
      !trimmedFormValues.motivations ||
      (trimmedFormValues.heardAboutUs === HEARD_ABOUT_US_OTHER_OPTION && !trimmedFormValues.heardAboutUsOther)
    ) {
      setSubmitErrorMessage("All fields are required.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact-sales", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trimmedFormValues),
      });

      const responseBody: unknown = await response.json().catch(() => null);

      if (!response.ok) {
        const errorMessage =
          responseBody && typeof responseBody === "object" && "error" in responseBody
            ? String((responseBody as { error?: unknown }).error)
            : "Something went wrong. Please try again.";
        setSubmitErrorMessage(errorMessage);
        return;
      }

      setDidSubmitSuccessfully(true);
      setFormValues({
        workEmail: "",
        firstName: "",
        lastName: "",
        company: "",
        companySize: "",
        country: "",
        heardAboutUs: "",
        heardAboutUsOther: "",
        motivations: "",
      });
    } catch {
      setSubmitErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full px-4">
      <div className="border border-[#e8e8ec] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.03)]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <FadeIn>
          <div className="flex flex-col p-8 md:p-14">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-[#1a1a1f]">
              Get a Demo
            </h2>
            <p className="mt-4 text-[15px] text-[#a1a1aa] leading-relaxed">
              Connect with our sales team to explore how we can support your use case.
            </p>
            <div className="mt-auto pt-12 border-t border-[#e8e8ec] flex flex-col items-start text-left">
              <blockquote className="text-[15px] italic text-[#52525b] leading-[1.7] mb-5">
                “Of all the AI tools that I’ve tried, Sentra is actually useful. I make a million promises across zoom meetings, slack, and emails—faster than I can write them down, and Sentra is the only tool that allowed me to start catching onto them.”
              </blockquote>
              <cite className="not-italic">
                <div className="font-semibold text-[#1a1a1f] text-[13px]">Paul Rothemund</div>
                <div className="text-[12px] text-[#a1a1aa] mt-0.5">VP of Research at Biostate.ai</div>
              </cite>
            </div>
          </div>
          </FadeIn>

          <FadeIn delay={100}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 border-l border-[#e8e8ec] p-8 md:p-14 bg-[#fafafa]">
            <label className="flex flex-col gap-2">
              <span className="text-[13px] font-medium text-[#3f3f46]">Work email</span>
              <input
                name="workEmail"
                value={formValues.workEmail}
                onChange={(event) => setFormValues({ ...formValues, workEmail: event.target.value })}
                className="w-full h-10 bg-white text-[#1a1a1f] border border-[#e0e0e3] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] px-4 py-2 text-sm placeholder:text-[#a1a1aa] focus:outline-none focus:border-brand focus:ring-1 focus:ring-[rgba(37,99,235,0.15)] transition-colors duration-150 rounded-sm"
                autoComplete="email"
                type="email"
                required
              />
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-[#3f3f46]">First name</span>
                <input
                  name="firstName"
                  value={formValues.firstName}
                  onChange={(event) => setFormValues({ ...formValues, firstName: event.target.value })}
                  className="w-full h-10 bg-white text-[#1a1a1f] border border-[#e0e0e3] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] px-4 py-2 text-sm placeholder:text-[#a1a1aa] focus:outline-none focus:border-brand focus:ring-1 focus:ring-[rgba(37,99,235,0.15)] transition-colors duration-150 rounded-sm"
                  autoComplete="given-name"
                  required
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-[#3f3f46]">Last name</span>
                <input
                  name="lastName"
                  value={formValues.lastName}
                  onChange={(event) => setFormValues({ ...formValues, lastName: event.target.value })}
                  className="w-full h-10 bg-white text-[#1a1a1f] border border-[#e0e0e3] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] px-4 py-2 text-sm placeholder:text-[#a1a1aa] focus:outline-none focus:border-brand focus:ring-1 focus:ring-[rgba(37,99,235,0.15)] transition-colors duration-150 rounded-sm"
                  autoComplete="family-name"
                  required
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-[13px] font-medium text-[#3f3f46]">Company</span>
              <input
                name="company"
                value={formValues.company}
                onChange={(event) => setFormValues({ ...formValues, company: event.target.value })}
                className="w-full h-10 bg-white text-[#1a1a1f] border border-[#e0e0e3] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] px-4 py-2 text-sm placeholder:text-[#a1a1aa] focus:outline-none focus:border-brand focus:ring-1 focus:ring-[rgba(37,99,235,0.15)] transition-colors duration-150 rounded-sm"
                autoComplete="organization"
                required
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[13px] font-medium text-[#3f3f46]">Company size</span>
              <NativeSelect
                name="companySize"
                value={formValues.companySize}
                onChange={(event) => setFormValues({ ...formValues, companySize: event.target.value })}
                required
                disabled={!isMetadataReady}
              >
                <NativeSelectOption value="" disabled>
                  {isMetadataReady ? "Select a company size" : "Loading company sizes"}
                </NativeSelectOption>
                {(metadata?.companySizeOptions ?? []).map((optionTitle) => (
                  <NativeSelectOption key={optionTitle} value={optionTitle}>
                    {optionTitle}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[13px] font-medium text-[#3f3f46]">Country</span>
              {!metadata ? (
                <NativeSelect name="country" value="" required disabled>
                  <NativeSelectOption value="" disabled>
                    Loading countries
                  </NativeSelectOption>
                </NativeSelect>
              ) : metadata.countryInputMode === "select" ? (
                <NativeSelect
                  name="country"
                  value={formValues.country}
                  onChange={(event) => setFormValues({ ...formValues, country: event.target.value })}
                  required
                >
                  <NativeSelectOption value="" disabled>
                    Select a country
                  </NativeSelectOption>
                  {[
                    ...metadata.countryOptions.filter(
                      (optionTitle) => normalizeOptionLabel(optionTitle) === normalizeOptionLabel("United States"),
                    ),
                    ...metadata.countryOptions.filter(
                      (optionTitle) => normalizeOptionLabel(optionTitle) !== normalizeOptionLabel("United States"),
                    ),
                  ].map((optionTitle) => (
                    <NativeSelectOption key={optionTitle} value={optionTitle}>
                      {optionTitle}
                    </NativeSelectOption>
                  ))}
                </NativeSelect>
              ) : metadata.countryInputMode === "location" ? (
                <NativeSelect
                  name="country"
                  value={formValues.country}
                  onChange={(event) => setFormValues({ ...formValues, country: event.target.value })}
                  required
                >
                  <NativeSelectOption value="" disabled>
                    Select a country
                  </NativeSelectOption>
                  {[
                    ...countryOptions.filter((countryOption) => countryOption.code === DEFAULT_COUNTRY_CODE),
                    ...countryOptions.filter((countryOption) => countryOption.code !== DEFAULT_COUNTRY_CODE),
                  ].map((countryOption) => (
                    <NativeSelectOption key={countryOption.code} value={countryOption.code}>
                      {countryOption.name}
                    </NativeSelectOption>
                  ))}
                </NativeSelect>
              ) : (
                <input
                  name="country"
                  value={formValues.country}
                  onChange={(event) => setFormValues({ ...formValues, country: event.target.value })}
                  className="w-full h-10 bg-white text-[#1a1a1f] border border-[#e0e0e3] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] px-4 py-2 text-sm placeholder:text-[#a1a1aa] focus:outline-none focus:border-brand focus:ring-1 focus:ring-[rgba(37,99,235,0.15)] transition-colors duration-150 rounded-sm"
                  autoComplete="country-name"
                  required
                />
              )}
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[13px] font-medium text-[#3f3f46]">How did you hear about us?</span>
              <NativeSelect
                name="heardAboutUs"
                value={formValues.heardAboutUs}
                onChange={(event) =>
                  setFormValues((previousFormValues) => ({
                    ...previousFormValues,
                    heardAboutUs: event.target.value,
                    heardAboutUsOther: event.target.value === HEARD_ABOUT_US_OTHER_OPTION
                      ? previousFormValues.heardAboutUsOther
                      : "",
                  }))
                }
                required
              >
                <NativeSelectOption value="" disabled>
                  Select an option
                </NativeSelectOption>
                {HEARD_ABOUT_US_OPTIONS.map((optionTitle) => (
                  <NativeSelectOption key={optionTitle} value={optionTitle}>
                    {optionTitle}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            </label>

            {isOtherHeardAboutUsSelected && (
              <label className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-[#3f3f46]">Please specify</span>
                <input
                  name="heardAboutUsOther"
                  value={formValues.heardAboutUsOther}
                  onChange={(event) =>
                    setFormValues({
                      ...formValues,
                      heardAboutUsOther: event.target.value,
                    })
                  }
                  className="w-full h-10 bg-white text-[#1a1a1f] border border-[#e0e0e3] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] px-4 py-2 text-sm placeholder:text-[#a1a1aa] focus:outline-none focus:border-brand focus:ring-1 focus:ring-[rgba(37,99,235,0.15)] transition-colors duration-150 rounded-sm"
                  required={isOtherHeardAboutUsSelected}
                />
              </label>
            )}

            <label className="flex flex-col gap-2">
              <span className="text-[13px] font-medium text-[#3f3f46]">What motivated you to explore Sentra?</span>
              <textarea
                name="motivations"
                value={formValues.motivations}
                onChange={(event) => setFormValues({ ...formValues, motivations: event.target.value })}
                className="w-full min-h-32 max-h-64 bg-white text-[#1a1a1f] border border-[#e0e0e3] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] px-4 py-3 text-sm placeholder:text-[#a1a1aa] focus:outline-none focus:border-brand focus:ring-1 focus:ring-[rgba(37,99,235,0.15)] transition-colors duration-150 resize-y rounded-sm"
                placeholder="Example: We want a system that captures decisions across meetings and Slack, and makes them searchable for new hires."
                required
              />
            </label>

            <div className="flex flex-col gap-2 mt-4">
              <button
                type="submit"
                className="inline-flex justify-center items-center bg-brand text-[#f0f0f0] px-8 py-3.5 text-[14px] font-medium rounded-lg cursor-pointer hover:brightness-110 hover:-translate-y-px duration-200 shadow-[0_0_0_1px_#1e40af,0_2px_4px_rgba(37,99,235,0.3),0_6px_16px_rgba(37,99,235,0.2),0_12px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_0_0_1px_#1e40af,0_4px_8px_rgba(37,99,235,0.35),0_10px_24px_rgba(37,99,235,0.25),0_16px_40px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.25)] transition-all active:scale-[0.97] focus-visible:ring-[3px] focus-visible:ring-[rgba(37,99,235,0.2)] disabled:opacity-60 disabled:pointer-events-none"
                disabled={isSubmitting || !isMetadataReady}
              >
                {isSubmitting ? "Sending…" : "Get a Demo"}
              </button>
              {submitErrorMessage && (
                <p className="text-xs text-[#52525b]">
                  {submitErrorMessage} You can also email{" "}
                  <a
                    className="text-[#1a1a1f] underline hover:no-underline"
                    href={`mailto:${SALES_EMAIL_ADDRESS}?subject=${encodeURIComponent("Get a Demo — Sentra")}`}
                  >
                    {SALES_EMAIL_ADDRESS}
                  </a>
                  .
                </p>
              )}
              {didSubmitSuccessfully && (
                <p className="text-xs text-[#52525b]">
                  Submitted. We&apos;ll follow up shortly.
                </p>
              )}
            </div>
          </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Contact;
