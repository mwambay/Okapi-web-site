export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg bg-[#f4f7fa] dark:bg-[#0f172a]"
    >
      {/* Background gradient blobs */}
      <div
        className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #1a4f6e 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #fe6e00 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold leading-[1.08] tracking-tight text-black dark:text-white">
              Propulsez votre{" "}
              <span style={{ color: "#1a4f6e" }}>entreprise</span>
              <br />
              avec une{" "}
              <span style={{ color: "#fe6e00" }}>stratégie tech</span>
              <br />
              de pointe
            </h1>
          </div>

          <div className="max-w-md lg:justify-self-end">
            <p className="text-base text-gray-500 dark:text-slate-400 leading-relaxed mb-7">
              OKAPI TECH SARL accompagne les organisations dans leur transformation numérique grâce
              au conseil en ingénierie, à la conception de solutions informatiques et au développement
              de systèmes sur mesure.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg"
                style={{ backgroundColor: "#1a4f6e" }}
              >
                Découvrir nos services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 transition-all hover:bg-gray-50 dark:hover:bg-slate-800 border-[#1a4f6e] text-[#1a4f6e] dark:border-sky-500 dark:text-sky-400"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-gray-200 dark:border-slate-700 max-w-xl">
          {[
            { value: "10+", label: "Années d'expérience" },
            { value: "50+", label: "Projets réalisés" },
            { value: "30+", label: "Clients satisfaits" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-extrabold" style={{ color: "#1a4f6e" }}>{s.value}</div>
              <div className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
