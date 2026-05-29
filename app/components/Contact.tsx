"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message ?? "Impossible d'envoyer le message.");
      }

      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Impossible d'envoyer le message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#f4f7fa] dark:bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#fe6e00" }}>
            Contact
          </span>
          <h2 className="text-4xl font-extrabold mt-2 text-black dark:text-white">Parlons de votre projet</h2>
          <p className="text-gray-500 dark:text-slate-400 mt-4 max-w-xl mx-auto text-lg">
            Notre équipe est disponible pour répondre à vos questions et vous accompagner
            dans la définition de vos besoins technologiques.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info Panel */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Company info card */}
            <div className="rounded-3xl p-8 text-white" style={{ backgroundColor: "#1a4f6e" }}>
              <h3 className="text-xl font-bold mb-6">OKAPI TECH SARL</h3>
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: "Adresse",
                    value: "Yaoundé, Cameroun",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: "Téléphone",
                    value: "+237 6XX XXX XXX",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: "Email",
                    value: "contact@okapitech.cm",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: "Horaires",
                    value: "Lun – Ven : 8h – 18h",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(254,110,0,0.2)" }}>
                      <span style={{ color: "#fe6e00" }}>{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs text-blue-300 mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex flex-col items-center justify-center h-48 gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(26,79,110,0.1)" }}>
                <svg className="w-6 h-6" fill="none" stroke="#1a4f6e" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <p className="text-sm text-gray-400 dark:text-slate-400 font-medium">Yaoundé, Cameroun</p>
              <a
                href="https://maps.google.com/?q=Yaoundé,Cameroun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold px-4 py-1.5 rounded-full border transition-colors hover:bg-gray-50"
                style={{ borderColor: "#1a4f6e", color: "#1a4f6e" }}
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white dark:bg-[#1e293b] rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-slate-700">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-16">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(26,79,110,0.1)" }}>
                  <svg className="w-8 h-8" fill="none" stroke="#1a4f6e" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Message envoyé !</h3>
                <p className="text-gray-500 dark:text-slate-400">Nous vous répondrons dans les meilleurs délais.</p>
                <button
                  onClick={() => { setSent(false); setError(""); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-2 text-sm font-semibold px-6 py-2 rounded-lg text-white"
                  style={{ backgroundColor: "#1a4f6e" }}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Envoyez-nous un message</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700 dark:text-slate-300">Nom complet <span style={{ color: "#fe6e00" }}>*</span></label>
                    <input
                      type="text" name="name" value={form.name} onChange={handleChange} required
                      placeholder="Jean Dupont"
                      className="px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-black dark:text-white placeholder-gray-400 dark:placeholder-slate-400 outline-none focus:border-[#1a4f6e] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700 dark:text-slate-300">Email <span style={{ color: "#fe6e00" }}>*</span></label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange} required
                      placeholder="jean@exemple.cm"
                      className="px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-black dark:text-white placeholder-gray-400 dark:placeholder-slate-400 outline-none focus:border-[#1a4f6e] transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700 dark:text-slate-300">Objet <span style={{ color: "#fe6e00" }}>*</span></label>
                  <select
                    name="subject" value={form.subject} onChange={handleChange} required
                    className="px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-black dark:text-white outline-none focus:border-[#1a4f6e] transition-colors"
                  >
                    <option value="">Sélectionner un sujet</option>
                    <option>Conseil en ingénierie technologique</option>
                    <option>Conception de solutions informatiques</option>
                    <option>Développement de systèmes et applications</option>
                    <option>Accompagnement et intégration</option>
                    <option>Autre demande</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700 dark:text-slate-300">Message <span style={{ color: "#fe6e00" }}>*</span></label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    className="px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-black dark:text-white placeholder-gray-400 dark:placeholder-slate-400 outline-none focus:border-[#1a4f6e] transition-colors resize-none"
                  />
                </div>
                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="self-start px-8 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
                  style={{ backgroundColor: "#1a4f6e" }}
                >
                  {sending ? "Envoi en cours..." : "Envoyer le message"}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
