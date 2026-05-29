const links = {
  Services: [
    "Conseil technologique",
    "Conception de solutions",
    "Développement d'applications",
    "Accompagnement & intégration",
  ],
  Entreprise: ["À propos", "Réalisations", "Contact"],
  Légal: ["Mentions légales", "Politique de confidentialité"],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0d3348" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img src="/logo-dark.png" alt="OKAPI TECH" className="h-10" />
            </div>
            <p className="text-sm text-blue-300 leading-relaxed mb-4">
              Votre partenaire en ingénierie technologique et transformation numérique.
            </p>
            <div className="flex gap-3">
              {[
                {
                  label: "LinkedIn",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: "Twitter",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-blue-300 hover:text-white transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#fe6e00" }}>
                {title}
              </h4>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-blue-300 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="text-xs text-blue-400">
            © {new Date().getFullYear()} OKAPI TECH SARL. Tous droits réservés.
          </p>
          <p className="text-xs text-blue-400">
            Yaoundé, Cameroun
          </p>
        </div>
      </div>
    </footer>
  );
}
