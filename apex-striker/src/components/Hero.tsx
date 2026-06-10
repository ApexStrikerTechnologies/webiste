export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          opacity: 0.4,
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #2563eb 30%, #3b82f6 50%, #2563eb 70%, transparent 100%)",
          opacity: 0.6,
        }}
      />

      <div className="container-narrow relative">
        {/* Tag */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-xs font-medium text-blue-700">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" aria-hidden="true" />
            Salesforce-Focused Technology Company
          </span>
        </div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6 max-w-3xl"
        >
          Building Smarter
          <br />
          <span className="text-blue-600">Salesforce Solutions</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mb-10 font-light">
          Apex Striker Technologies helps organizations simplify complex Salesforce
          challenges through modern applications, automation, and platform innovation.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Contact Us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="mailto:sourabh@apexstriker.tech?subject=Schedule%20a%20Discussion"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Schedule a Discussion
          </a>
        </div>

        {/* Domain badge */}
        <div className="mt-12 pt-12 border-t border-gray-100">
          <p className="text-xs font-mono text-gray-400 tracking-wide">
            apexstriker.tech
          </p>
        </div>
      </div>
    </section>
  );
}
