const capabilities = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 9l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Salesforce Development",
    description:
      "Custom Apex development, Lightning Web Components, and tailored platform features built to match your exact business processes.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 1L16 5V13L9 17L2 13V5L9 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 5L13 7.5V12.5L9 15L5 12.5V7.5L9 5Z" fill="currentColor" fillOpacity="0.12"/>
      </svg>
    ),
    title: "AppExchange Solutions",
    description:
      "Designing and building managed packages for the Salesforce AppExchange marketplace, following ISV best practices from day one.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M3 9H15M9 3V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Platform Customization",
    description:
      "Deep configuration and customization of Sales Cloud, Service Cloud, and Experience Cloud to align Salesforce with how your team works.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M3 4h12M3 9h8M3 14h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M13 9h2M14 8v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Automation & Integrations",
    description:
      "Flow, Process Builder modernization, and REST/SOAP integrations that connect Salesforce with the rest of your technology stack.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50/60"
      aria-labelledby="about-heading"
    >
      <div className="container-narrow">
        <div className="mb-14">
          <p className="section-label mb-3">About</p>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4 max-w-xl"
          >
            What we do
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl font-light">
            We are a Salesforce-focused technology company. Our work spans the full
            breadth of the Salesforce platform — from first-line development to
            marketplace-ready products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-gray-200 rounded-xl overflow-hidden border border-gray-200">
          {capabilities.map((cap) => (
            <article
              key={cap.title}
              className="bg-white p-8 hover:bg-blue-50/30 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5">
                {cap.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-base">{cap.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{cap.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
