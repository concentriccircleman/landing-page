"use client";

import { useEffect, useState } from "react";
import { countryOptions } from "@/lib/country-options";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";

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
      <div className="border border-foreground/15 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground">
              Get a Demo
            </h2>
            <p className="text-base md:text-lg text-foreground/70">
              Connect with our sales team to explore how we can support your use case.
            </p>
            <div className="mt-8 pt-8 border-t border-foreground/10 flex flex-col items-start text-left">
              <blockquote className="text-base italic text-foreground/80 leading-relaxed mb-4">
                “Of all the AI tools that I’ve tried, Sentra is actually useful. I make a million promises across zoom meetings, slack, and emails—faster than I can write them down, and Sentra is the only tool that allowed me to start catching onto them.”
              </blockquote>
              <cite className="not-italic">
                <div className="font-medium text-foreground text-sm">Paul Rothemund</div>
                <div className="text-xs text-foreground/60">VP of Research at Biostate.ai</div>
              </cite>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="flex flex-col gap-2">
              <span className="text-sm text-foreground/80">Work email</span>
              <input
                name="workEmail"
                value={formValues.workEmail}
                onChange={(event) => setFormValues({ ...formValues, workEmail: event.target.value })}
                className="w-full h-10 bg-background text-foreground border border-foreground/20 px-4 py-2 text-sm focus:outline-none focus:border-foreground/60"
                autoComplete="email"
                type="email"
                required
              />
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-sm text-foreground/80">First name</span>
                <input
                  name="firstName"
                  value={formValues.firstName}
                  onChange={(event) => setFormValues({ ...formValues, firstName: event.target.value })}
                  className="w-full h-10 bg-background text-foreground border border-foreground/20 px-4 py-2 text-sm focus:outline-none focus:border-foreground/60"
                  autoComplete="given-name"
                  required
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm text-foreground/80">Last name</span>
                <input
                  name="lastName"
                  value={formValues.lastName}
                  onChange={(event) => setFormValues({ ...formValues, lastName: event.target.value })}
                  className="w-full h-10 bg-background text-foreground border border-foreground/20 px-4 py-2 text-sm focus:outline-none focus:border-foreground/60"
                  autoComplete="family-name"
                  required
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-sm text-foreground/80">Company</span>
              <input
                name="company"
                value={formValues.company}
                onChange={(event) => setFormValues({ ...formValues, company: event.target.value })}
                className="w-full h-10 bg-background text-foreground border border-foreground/20 px-4 py-2 text-sm focus:outline-none focus:border-foreground/60"
                autoComplete="organization"
                required
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm text-foreground/80">Company size</span>
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
              <span className="text-sm text-foreground/80">Country</span>
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
                  className="w-full h-10 bg-background text-foreground border border-foreground/20 px-4 py-2 text-sm focus:outline-none focus:border-foreground/60"
                  autoComplete="country-name"
                  required
                />
              )}
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm text-foreground/80">How did you hear about us?</span>
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
                <span className="text-sm text-foreground/80">Please specify</span>
                <input
                  name="heardAboutUsOther"
                  value={formValues.heardAboutUsOther}
                  onChange={(event) =>
                    setFormValues({
                      ...formValues,
                      heardAboutUsOther: event.target.value,
                    })
                  }
                  className="w-full h-10 bg-background text-foreground border border-foreground/20 px-4 py-2 text-sm focus:outline-none focus:border-foreground/60"
                  required={isOtherHeardAboutUsSelected}
                />
              </label>
            )}

            <label className="flex flex-col gap-2">
              <span className="text-sm text-foreground/80">What motivated you to explore Sentra?</span>
              <textarea
                name="motivations"
                value={formValues.motivations}
                onChange={(event) => setFormValues({ ...formValues, motivations: event.target.value })}
                className="w-full min-h-32 max-h-64 bg-background text-foreground border border-foreground/20 px-4 py-3 text-sm focus:outline-none focus:border-foreground/60 resize-y"
                placeholder="Example: We want a system that captures decisions across meetings and Slack, and makes them searchable for new hires."
                required
              />
            </label>

            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="inline-flex justify-center items-center bg-foreground text-background px-6 py-3 text-sm font-medium cursor-pointer hover:opacity-80 duration-200 disabled:opacity-60 disabled:pointer-events-none"
                disabled={isSubmitting || !isMetadataReady}
              >
                {isSubmitting ? "Sending…" : "Get a Demo"}
              </button>
              {submitErrorMessage && (
                <p className="text-xs text-foreground/70">
                  {submitErrorMessage} You can also email{" "}
                  <a
                    className="text-foreground underline hover:no-underline"
                    href={`mailto:${SALES_EMAIL_ADDRESS}?subject=${encodeURIComponent("Get a Demo — Sentra")}`}
                  >
                    {SALES_EMAIL_ADDRESS}
                  </a>
                  .
                </p>
              )}
              {didSubmitSuccessfully && (
                <p className="text-xs text-foreground/70">
                  Submitted. We&apos;ll follow up shortly.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
