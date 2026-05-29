const projects = [
  {
    title: "Système ERP Modulaire",
    category: "Développement",
    status: "Livré",
    statusColor: "#1a4f6e",
    desc: "Conception et développement d'un ERP modulaire pour une entreprise de distribution, intégrant la gestion des stocks, des commandes et de la facturation.",
    tags: ["ERP", "Web App", "Base de données"],
    year: "2024",
  },
  {
    title: "Plateforme de gestion RH",
    category: "Conception & Dev.",
    status: "Livré",
    statusColor: "#1a4f6e",
    desc: "Développement d'une plateforme RH complète permettant la gestion des employés, des congés, des évaluations et de la paie pour une administration publique.",
    tags: ["RH", "Dashboard", "API REST"],
    year: "2024",
  },
  {
    title: "Audit & Migration SI",
    category: "Conseil",
    status: "Livré",
    statusColor: "#1a4f6e",
    desc: "Audit du système d'information d'une institution financière et pilotage de la migration vers une architecture cloud hybride sécurisée.",
    tags: ["Audit", "Cloud", "Sécurité"],
    year: "2023",
  },
  {
    title: "Application Mobile de Suivi",
    category: "Développement",
    status: "En cours",
    statusColor: "#fe6e00",
    desc: "Développement d'une application mobile cross-platform permettant le suivi en temps réel des interventions terrain pour une société de services.",
    tags: ["Mobile", "React Native", "Temps réel"],
    year: "2025",
  },
  {
    title: "Intégration CRM Salesforce",
    category: "Intégration",
    status: "Livré",
    statusColor: "#1a4f6e",
    desc: "Accompagnement à l'intégration de Salesforce CRM dans l'écosystème d'une PME, avec formation des équipes commerciales et configuration avancée.",
    tags: ["CRM", "Salesforce", "Formation"],
    year: "2023",
  },
  {
    title: "Portail Client & E-commerce",
    category: "Conception & Dev.",
    status: "En cours",
    statusColor: "#fe6e00",
    desc: "Conception et développement d'un portail client B2B avec fonctionnalités e-commerce, tableau de bord de suivi de commandes et intégration paiement.",
    tags: ["E-commerce", "B2B", "UX/UI"],
    year: "2025",
  },
];

export default function Projects() {
  return (
    <section id="realisations" className="py-24 bg-white dark:bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#fe6e00" }}>
            Réalisations
          </span>
          <h2 className="text-4xl font-extrabold mt-2 text-black dark:text-white">
            Nos projets récents
          </h2>
          <p className="text-gray-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            Un aperçu de quelques-uns des projets que nous avons réalisés ou qui sont
            actuellement en cours de développement.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-gray-100 dark:border-slate-700 p-6 hover:shadow-xl transition-all duration-300 bg-white dark:bg-[#1e293b] hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(26,79,110,0.08)", color: "#1a4f6e" }}>
                  {p.category}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5"
                  style={{ backgroundColor: `${p.statusColor}15`, color: p.statusColor }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.statusColor }} />
                  {p.status}
                </span>
              </div>

              <h3 className="text-lg font-bold text-black dark:text-white mb-2 group-hover:text-[#1a4f6e] dark:group-hover:text-sky-400 transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-4">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-700">
                <span className="text-xs text-gray-400 dark:text-slate-500 font-medium">{p.year}</span>
                <span className="text-xs font-semibold flex items-center gap-1 transition-colors group-hover:text-[#fe6e00]"
                  style={{ color: "#1a4f6e" }}>
                  Voir le détail
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "50+", label: "Projets réalisés" },
            { value: "30+", label: "Clients satisfaits" },
            { value: "4", label: "Secteurs d'activité" },
            { value: "100%", label: "Taux de satisfaction" },
          ].map((s) => (
            <div key={s.label} className="text-center rounded-2xl p-6 border border-gray-100 dark:border-slate-700">
              <div className="text-3xl font-extrabold mb-1" style={{ color: "#1a4f6e" }}>{s.value}</div>
              <div className="text-sm text-gray-500 dark:text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
