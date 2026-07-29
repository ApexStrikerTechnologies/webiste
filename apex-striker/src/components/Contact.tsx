const contactLinks = [
  {
    label: "Email",
    value: "contact@apexstriker.tech",
    href: "mailto:contact@apexstriker.tech",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="1" y="3" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M1 6l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Website",
    value: "https://apexstriker.tech",
    href: "https://apexstriker.tech",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M1 9h16M9 1c-2 2-3 5-3 8s1 6 3 8M9 1c2 2 3 5 3 8s-1 6-3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Coming soon",
    href: undefined,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 8v5M5 5.5v.5M8 13V9.5c0-1 .8-1.5 1.5-1.5S11 9 11 10v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "Coming soon",
    href: undefined,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 1C4.58 1 1 4.58 1 9c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.33c-2.23.48-2.7-1.07-2.7-1.07-.36-.93-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.71 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.7 7.7 0 019 5.83c.68 0 1.36.09 2 .27 1.52-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8.013 8.013 0 0017 9c0-4.42-3.58-8-8-8z" fill="currentColor" fillOpacity="0.7"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-50/60"
      aria-labelledby="contact-heading"
    >
      <div className="container-narrow">
        <div className="max-w-3xl">
          <p className="section-label mb-3">Contact</p>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4"
          >
            Get in touch
          </h2>
          <p className="text-gray-500 text-lg font-light leading-relaxed mb-12">
            Whether you have a Salesforce challenge, want to discuss a project, or
            just want to connect — we'd be glad to hear from you.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.map((link) => {
              const isPlaceholder = !link.href;
              const Tag = link.href ? "a" : "div";
              return (
                <Tag
                  key={link.label}
                  {...(link.href
                    ? {
                        href: link.href,
                        target: link.label === "Website" ? "_blank" : undefined,
                        rel: link.label === "Website" ? "noopener noreferrer" : undefined,
                      }
                    : {})}
                  className={[
                    "flex items-center gap-4 p-5 rounded-xl border bg-white transition-colors",
                    isPlaceholder
                      ? "border-gray-100 opacity-50 cursor-default select-none"
                      : "border-gray-200 hover:border-blue-200 hover:bg-blue-50/20 group",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 transition-colors",
                      isPlaceholder
                        ? "bg-gray-50 border-gray-100 text-gray-400"
                        : "bg-blue-50 border-blue-100 text-blue-600 group-hover:bg-blue-100",
                    ].join(" ")}
                  >
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 mb-0.5">{link.label}</p>
                    <p
                      className={[
                        "text-sm font-medium truncate",
                        isPlaceholder ? "text-gray-400 italic" : "text-gray-900",
                      ].join(" ")}
                    >
                      {link.value}
                    </p>
                  </div>
                  {!isPlaceholder && (
                    <svg
                      className="ml-auto text-gray-300 group-hover:text-blue-400 transition-colors flex-shrink-0"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 7h10M7 2l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Tag>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
