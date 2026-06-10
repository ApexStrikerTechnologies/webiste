export default function Focus() {
  return (
    <section
      id="focus"
      className="py-24"
      aria-labelledby="focus-heading"
    >
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="section-label mb-3">Current Focus</p>
            <h2
              id="focus-heading"
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-6"
            >
              Where we are now
            </h2>
            <p className="text-gray-500 leading-relaxed text-lg font-light mb-6">
              We are currently building innovative Salesforce-native solutions and
              preparing our first AppExchange products.
            </p>
            <p className="text-gray-500 leading-relaxed text-base">
              As a newly launched company, our focus is on laying strong technical
              foundations — writing clean, maintainable code, following Salesforce
              ISV standards, and designing solutions that scale with our clients'
              needs.
            </p>
          </div>

          {/* Status card */}
          <div className="relative">
            <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
              {/* Card header */}
              <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="w-3 h-3 rounded-full bg-gray-200" />
                  <span className="w-3 h-3 rounded-full bg-gray-200" />
                  <span className="w-3 h-3 rounded-full bg-gray-200" />
                </div>
                <span className="text-xs font-mono text-gray-400">status.json</span>
              </div>

              {/* Card body */}
              <div className="p-6 font-mono text-sm space-y-3">
                <div className="text-gray-400">{"{"}</div>
                <div className="pl-4 space-y-2">
                  <div>
                    <span className="text-blue-500">&quot;company&quot;</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-green-600">&quot;Apex Striker Technologies&quot;</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="text-blue-500">&quot;stage&quot;</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-green-600">&quot;newly launched&quot;</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="text-blue-500">&quot;platform&quot;</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-green-600">&quot;Salesforce&quot;</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="text-blue-500">&quot;building&quot;</span>
                    <span className="text-gray-400">: [</span>
                    <div className="pl-4 space-y-1">
                      <div>
                        <span className="text-green-600">&quot;AppExchange products&quot;</span>
                        <span className="text-gray-400">,</span>
                      </div>
                      <div>
                        <span className="text-green-600">&quot;native solutions&quot;</span>
                      </div>
                    </div>
                    <span className="text-gray-400">],</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">&quot;status&quot;</span>
                    <span className="text-gray-400">: </span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                      &quot;active&quot;
                    </span>
                  </div>
                </div>
                <div className="text-gray-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
