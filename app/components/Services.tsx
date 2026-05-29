const services = [
  {
    title: "Conseil en ingénierie technologique",
    desc: "Nous analysons votre environnement technologique existant et formulons des recommandations stratégiques pour optimiser vos systèmes et aligner votre SI sur vos objectifs métiers.",
    features: ["Audit de systèmes existants", "Stratégie numérique", "Architecture SI", "Gestion des risques IT"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Conception de solutions informatiques",
    desc: "De la modélisation fonctionnelle à la spécification technique, nous concevons des solutions informatiques sur mesure qui répondent précisément aux besoins de votre organisation.",
    features: ["UX/UI Design", "Architecture logicielle", "Spécifications fonctionnelles", "Prototypage & maquettage"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Développement de systèmes et applications",
    desc: "Notre équipe développe des applications web, mobiles et des systèmes d'information robustes en utilisant les technologies les plus adaptées à vos contraintes et objectifs.",
    features: ["Applications web & mobile", "APIs & microservices", "Bases de données", "Tests & qualité logicielle"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Accompagnement et intégration de solutions",
    desc: "Nous assurons le déploiement, la configuration et l'intégration de solutions dans votre écosystème existant, avec une formation des équipes et un support continu.",
    features: ["Déploiement & migration", "Formation des équipes", "Support & maintenance", "Change management"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#f4f7fa] dark:bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#fe6e00" }}>
            Nos Services
          </span>
          <h2 className="text-4xl font-extrabold mt-2 text-black dark:text-white">
            Des solutions adaptées à vos besoins
          </h2>
          <p className="text-gray-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            Quatre axes de service complémentaires pour couvrir l'intégralité de votre
            parcours de transformation technologique.
          </p>
        </div>

        {/* Service Cards — 2×2 fused grid */}
        <div className="grid md:grid-cols-2 border border-[#dfe7f0] dark:border-slate-700 bg-white dark:bg-[#1e293b] rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group p-8 transition-colors duration-300 hover:bg-[#f8fafd] dark:hover:bg-[#263547] ${
                i % 2 === 0 ? "md:border-r border-[#dfe7f0] dark:border-slate-700" : ""
              } ${
                i < 2 ? "border-b border-[#dfe7f0] dark:border-slate-700" : ""
              }`}
            >
              <div
                className="mb-6 flex h-12 w-12 items-center justify-center text-white"
                style={{ backgroundColor: i % 2 === 0 ? "#1a4f6e" : "#fe6e00" }}
              >
                {s.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-black dark:text-white group-hover:text-[#1a4f6e] dark:group-hover:text-sky-400 transition-colors">
                {s.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-gray-500 dark:text-slate-400">{s.desc}</p>
              <ul className="flex flex-col gap-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600 dark:text-slate-400">
                    <span className="h-1.5 w-1.5 flex-shrink-0" style={{ backgroundColor: "#fe6e00" }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #1a4f6e 0%, #0d3348 100%)" }}>
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-2">Besoin d'un service personnalisé ?</h3>
            <p className="text-blue-200">Discutons ensemble de vos défis technologiques et trouvons la meilleure approche.</p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-8 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#fe6e00" }}
          >
            Parlons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
}
