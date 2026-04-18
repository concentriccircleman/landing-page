"use client";

import { cloneElement, isValidElement, useState, type ReactElement } from "react";
import { Dialog } from "@base-ui/react/dialog";
import Button from "@/components/button";

interface RequestIntegrationDialogProps {
  children: ReactElement<{ onClick?: () => void }>;
}

const REQUEST_EMAIL_ADDRESS = "contact@sentra.app";

const inputClasses =
  "w-full h-10 bg-white text-foreground border border-[#e0e0e3] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] px-4 py-2 text-sm placeholder:text-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-[rgba(37,149,238,0.15)] transition-colors duration-150";

const textareaClasses =
  "w-full min-h-28 max-h-56 bg-white text-foreground border border-[#e0e0e3] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-[rgba(37,149,238,0.15)] transition-colors duration-150 resize-y";

const RequestIntegrationDialog = ({ children }: RequestIntegrationDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [integrationName, setIntegrationName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [useCase, setUseCase] = useState("");
  const [wantsDemo, setWantsDemo] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [didSubmit, setDidSubmit] = useState(false);

  const resetForm = () => {
    setIntegrationName("");
    setWorkEmail("");
    setUseCase("");
    setWantsDemo(false);
    setErrorMessage(null);
    setDidSubmit(false);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setIsOpen(nextOpen);
    if (!nextOpen) {
      resetForm();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);

    const trimmedIntegrationName = integrationName.trim();
    const trimmedWorkEmail = workEmail.trim();
    const trimmedUseCase = useCase.trim();

    if (!trimmedIntegrationName || !trimmedWorkEmail) {
      setErrorMessage("Integration name and work email are required.");
      return;
    }

    const subject = `New integration request: ${trimmedIntegrationName}`;
    const bodyLines = [
      `Integration: ${trimmedIntegrationName}`,
      `Work email: ${trimmedWorkEmail}`,
      trimmedUseCase ? `Use case: ${trimmedUseCase}` : null,
      `Wants demo call: ${wantsDemo ? "Yes" : "No"}`,
    ].filter((line): line is string => line !== null);

    const mailtoUrl = `mailto:${REQUEST_EMAIL_ADDRESS}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n\n"))}`;

    window.location.href = mailtoUrl;
    setDidSubmit(true);

    window.setTimeout(() => {
      handleOpenChange(false);
    }, 1800);
  };

  const trigger = isValidElement(children)
    ? cloneElement(children, { onClick: () => setIsOpen(true) })
    : children;

  return (
    <>
      {trigger}
      <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
          <Dialog.Popup
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-lg bg-white border border-[#e0e0e3] shadow-[0_10px_40px_rgba(0,0,0,0.18)] p-8 transition-all duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 data-[ending-style]:scale-[0.98] data-[starting-style]:scale-[0.98] focus:outline-none"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <Dialog.Title className="text-xl font-semibold tracking-tight text-foreground">
                  Request an integration
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-sm text-muted leading-relaxed">
                  Tell us what you&apos;d like Sentra to connect with. We&apos;ll
                  follow up over email.
                </Dialog.Description>
              </div>
              <Dialog.Close
                className="inline-flex items-center justify-center w-8 h-8 -mt-1 -mr-2 text-muted hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </Dialog.Close>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-foreground">
                  Integration name
                </span>
                <input
                  name="integrationName"
                  type="text"
                  value={integrationName}
                  onChange={(event) => setIntegrationName(event.target.value)}
                  className={inputClasses}
                  placeholder="e.g. Monday, HubSpot, Airtable"
                  required
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-foreground">
                  Work email
                </span>
                <input
                  name="workEmail"
                  type="email"
                  autoComplete="email"
                  value={workEmail}
                  onChange={(event) => setWorkEmail(event.target.value)}
                  className={inputClasses}
                  placeholder="you@company.com"
                  required
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-foreground">
                  How would you use it?{" "}
                  <span className="text-muted font-normal">(optional)</span>
                </span>
                <textarea
                  name="useCase"
                  value={useCase}
                  onChange={(event) => setUseCase(event.target.value)}
                  className={textareaClasses}
                  placeholder="A sentence or two on what you'd want Sentra to learn from or write to."
                />
              </label>

              <label className="flex items-start gap-3 mt-1 cursor-pointer select-none">
                <input
                  name="wantsDemo"
                  type="checkbox"
                  checked={wantsDemo}
                  onChange={(event) => setWantsDemo(event.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-brand cursor-pointer"
                />
                <span className="text-[13px] text-foreground leading-relaxed">
                  I&apos;d also like to set up a demo call with the Sentra team.
                </span>
              </label>

              {errorMessage && (
                <p className="text-xs text-[#b42318]">{errorMessage}</p>
              )}
              {didSubmit && (
                <p className="text-xs text-muted">
                  Thanks — your email draft is ready. We&apos;ll be in touch at{" "}
                  {workEmail || "your inbox"}.
                </p>
              )}

              <div className="mt-2 flex items-center justify-end gap-3">
                <Button
                  variant="tertiary"
                  size="sm"
                  className="h-10 px-4"
                  onClick={() => handleOpenChange(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  type="submit"
                  className="h-10 px-4"
                >
                  Send request
                </Button>
              </div>
            </form>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default RequestIntegrationDialog;
