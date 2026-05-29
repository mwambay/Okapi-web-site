const values = [
  {
    title: "Innovation",
    desc: "Nous intégrons les dernières technologies pour offrir des solutions à la pointe de l'ingénierie.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    desc: "Chaque projet est traité avec rigueur et professionnalisme pour dépasser les attentes de nos clients.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Intégrité",
    desc: "Transparence et honnêteté sont au cœur de chacune de nos relations avec nos partenaires et clients.",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=200&fit=crop&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    desc: "Nous co-construisons les solutions avec nos clients pour garantir l'adéquation avec leurs besoins réels.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const expertises = [
  "Ingénierie logicielle & systèmes",
  "Architecture d'entreprise & SI",
  "Transformation numérique",
  "Intégration ERP / CRM",
  "Développement d'applications web & mobile",
  "Sécurité informatique & conformité",
];

export default function About() {
  return (
    <section id="apropos" className="py-24 bg-white dark:bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#fe6e00" }}>
            À Propos de nous
          </span>
          <h2 className="text-4xl font-extrabold mt-2 text-black dark:text-white">
            Qui sommes-nous ?
          </h2>
          <p className="text-gray-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            OKAPI TECH SARL est une société de conseil et d'ingénierie technologique dédiée à
            l'accompagnement des entreprises dans leur transition vers le numérique.
          </p>
        </div>

        {/* Vision / Mission / Positioning */}
        <div className="grid md:grid-cols-3 gap-0 mb-20">
          {[
            {
              label: "Notre Vision",
              text: "Être le partenaire technologique de référence en Afrique centrale, en aidant les organisations à tirer pleinement parti des outils numériques.",
              icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15.25A3.25 3.25 0 1012 8.75a3.25 3.25 0 000 6.5z" />
                </svg>
              ),
            },
            {
              label: "Notre Mission",
              text: "Concevoir et déployer des solutions informatiques robustes, adaptées aux réalités locales et alignées sur les standards internationaux.",
              icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 21s7.5-4.5 7.5-11.25V5.25L12 3 4.5 5.25v4.5C4.5 16.5 12 21 12 21z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12.25l2 2 4-4.5" />
                </svg>
              ),
            },
            {
              label: "Notre Positionnement",
              text: "Un acteur local à forte expertise technique, alliant proximité client, réactivité et maîtrise des technologies émergentes.",
              icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 7v5l3.5 2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.5 12h3M16.5 12h3M12 4.5v2M12 17.5v2" />
                </svg>
              ),
            },
          ].map((item, index) => (
            <div
              key={item.label}
              className={`border-[#dfe7f0] dark:border-slate-700 bg-white dark:bg-[#1e293b] p-8 transition-all duration-300 hover:bg-[#fbfdff] dark:hover:bg-[#263547] ${
                index === 1 ? "border-t-0 md:border-t md:border-l-0" : ""
              } ${
                index === 2 ? "border-t-0 md:border-t md:border-l-0" : ""
              } border`}
            >
              <div className="mb-8 flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-[#eef5ff] dark:bg-slate-700 text-[#4f67ff] dark:text-sky-400">
                {item.icon}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-[#101828] dark:text-white">
                {item.label}
              </h3>
              <p className="leading-relaxed text-[#667085] dark:text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-black dark:text-white mb-10">Nos Valeurs</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="group overflow-hidden rounded-[10px] border border-[#e5e7eb] dark:border-slate-700 bg-white dark:bg-[#1e293b] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={v.image} alt={v.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#1a4f6e]/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-[#1a4f6e] shadow-md transition-all duration-300 group-hover:bg-[#1a4f6e] group-hover:text-white">
                      {v.icon}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="mb-4 font-bold text-black dark:text-white">{v.title}</h4>
                  <p className="mb-5 text-sm leading-relaxed text-gray-500 dark:text-slate-400">{v.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-black dark:text-slate-300">
                    Lire plus
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div className="rounded-3xl p-10 text-white" style={{ backgroundColor: "#1a4f6e" }}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#fe6e00" }}>
                Domaines d'expertise
              </span>
              <h3 className="text-3xl font-extrabold mt-2 mb-4">
                Une expertise technique multidimensionnelle
              </h3>
              <p className="text-blue-200 leading-relaxed">
                Notre équipe combine des compétences transverses pour répondre aux défis
                technologiques les plus complexes, de la stratégie à l'exécution.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-3">
              {expertises.map((e) => (
                <li key={e} className="flex items-center gap-3 text-sm text-blue-100">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#fe6e00" }}>
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
