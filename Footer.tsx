export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 py-10" role="contentinfo">
      <div className="container-narrow">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1L13 4.5V10.5L7 14L1 10.5V4.5L7 1Z" fill="white" fillOpacity="0.9"/>
                <path d="M7 4L10.5 6V10L7 12L3.5 10V6L7 4Z" fill="white"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">
              Apex Striker Technologies
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-400">
            © {year} Apex Striker Technologies. All Rights Reserved.
          </p>

          {/* Domain */}
          <a
            href="https://apexstriker.tech"
            className="text-xs font-mono text-gray-400 hover:text-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            apexstriker.tech
          </a>
        </div>
      </div>
    </footer>
  );
}
