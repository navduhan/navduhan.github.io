"use client";

import { useState } from "react";
import profile from "@/data/profile.json";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      <div className="space-y-3 border-b border-sky-100 pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-800">
          <span className="w-2.5 h-1 rounded bg-sky-500" />
          Get In Touch &bull; Faculty Collaborations &amp; Mentorship
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900">
          Contact, CV &amp; Mentoring
        </h1>
        <p className="text-slate-600 max-w-3xl">
          I welcome inquiries from research collaborators, prospective graduate students, postdocs, and academic departments.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Direct Contact Info & CV Download */}
        <div className="lg:col-span-5 space-y-6">
          <div className="card-colorful p-7 space-y-4">
            <h3 className="font-display font-bold text-slate-900 text-lg">Official Office &amp; Laboratory</h3>

            <div className="text-sm text-slate-600 space-y-1.5">
              <p className="font-bold text-slate-900 text-base">{profile.name}, {profile.degree}</p>
              <p className="text-sky-800 font-semibold">{profile.title}</p>
              <p className="text-slate-800 font-medium">{profile.department}</p>
              <p>{profile.institution}</p>
              <p>{profile.university}</p>
              <div className="pt-2 text-xs text-slate-500 font-mono space-y-0.5">
                <p><span className="font-semibold text-slate-700">Office:</span> {profile.office}</p>
                <p><span className="font-semibold text-slate-700">Mailing:</span> {profile.mailingAddress}</p>
                <p>{profile.location}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-sky-100 space-y-2.5 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-700">
                <span className="font-bold text-sky-800">Phone:</span>
                <a href={`tel:${profile.phone.replace(/[^0-9]/g, "")}`} className="hover:underline font-semibold text-slate-900">
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sky-800">
                <span className="font-bold">Email:</span>
                <a href={`mailto:${profile.email}`} className="hover:underline font-semibold">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span className="font-bold">Alt Email:</span>
                <a href={`mailto:${profile.personalEmail}`} className="hover:underline">
                  {profile.personalEmail}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span className="font-bold">GitHub:</span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 hover:underline"
                >
                  @navduhan
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span className="font-bold">LinkedIn:</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 hover:underline"
                >
                  in/navduhan
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span className="font-bold">ORCID:</span>
                <a
                  href={`https://orcid.org/${profile.orcid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:underline"
                >
                  {profile.orcid}
                </a>
              </div>
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-gradient-to-br from-sky-700 via-sky-800 to-cyan-800 text-white space-y-3.5 shadow-xl">
            <h4 className="font-display font-bold text-xl">Official Curriculum Vitae</h4>
            <p className="text-xs text-sky-100 leading-relaxed">
              Complete document containing the full 34 peer-reviewed publications, $2.27M active grant portfolio ($1.97M USDA-APHIS Co-PI), software packages, and deployed web resources.
            </p>
            <a
              href="/Naveen_Duhan_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-sky-900 font-bold text-xs hover:bg-sky-50 transition shadow-md"
            >
              <span>Download Naveen_Duhan_CV.pdf</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mentoring Statement & Collaboration Form */}
        <div className="lg:col-span-7 space-y-6">
          <div className="card-colorful p-8 space-y-5">
            <h3 className="font-display font-bold text-slate-900 text-xl">
              Research Collaboration &amp; Mentoring
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              At South Dakota State University's Animal Disease Research and Diagnostic Laboratory (ADRDL),
              I lead computational genomics research on avian viral pathogens, design analytical pipelines,
              and mentor graduate students in bioinformatics methods and translational project design.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              My instructional and mentoring background includes teaching Bioinformatics and Big Data Mining
              (PSC 4150/6150) at Utah State University, delivering practical workshops on NGS Data Analysis,
              Linux for Biologists, and Machine Learning, assisting in graduate and undergraduate computational
              courses at Punjab Agricultural University, and lecturing in bioinformatics at Guru Nanak Girls College.
            </p>

            <div className="pt-4 border-t border-sky-100 space-y-4">
              <h4 className="font-display font-semibold text-slate-900 text-sm">
                Send a Direct Collaboration Inquiry
              </h4>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono">
                  ✓ Thank you! In production this connects directly to naveen.duhan@sdstate.edu.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      className="p-2.5 rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Your Email"
                      className="p-2.5 rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <textarea
                    required
                    rows={4}
                    placeholder="Brief outline of research question, collaboration interest, or student inquiry..."
                    className="w-full p-2.5 rounded-lg border border-sky-200 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />

                  <button type="submit" className="btn-gradient text-xs py-2 px-5">
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
