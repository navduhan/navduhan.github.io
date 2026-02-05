"use client";

import { useState } from "react";
import profile from "@/data/profile.json";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(formData.subject || "Research collaboration inquiry");
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      formData.message
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-soft rounded-3xl p-6 shadow-soft space-y-5">
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-muted">Full Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-2 w-full rounded-2xl border border-soft bg-white/80 px-4 py-3 text-sm"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-muted">Email Address</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-2 w-full rounded-2xl border border-soft bg-white/80 px-4 py-3 text-sm"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-muted">Subject</label>
        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="mt-2 w-full rounded-2xl border border-soft bg-white/80 px-4 py-3 text-sm"
          placeholder="Collaboration, speaking, or tool inquiry"
        />
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-muted">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="mt-2 w-full rounded-2xl border border-soft bg-white/80 px-4 py-3 text-sm"
          placeholder="Share the context of your message..."
        />
      </div>
      <div className="flex flex-wrap gap-3 items-center">
        <button
          type="submit"
          className="px-6 py-3 rounded-full bg-[color:var(--accent)] text-white font-semibold shadow-crisp"
        >
          Send Message
        </button>
        <p className="text-xs text-muted">This opens your default email client with the message pre-filled.</p>
      </div>
    </form>
  );
}
