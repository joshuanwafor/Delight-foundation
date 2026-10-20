"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const levels = ["100 level", "200 level", "300 level", "400 level", "500 level", "600 level"];

const field =
  "mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-3.5 py-2.5 text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";
const label = "block text-sm font-medium text-navy";

/**
 * There is no backend yet, so submitting drafts an email to the foundation
 * with the applicant's details; documents are attached in their mail app.
 */
export function ApplyForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const body = [
      `Full name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Institution: ${get("school")}`,
      `Course of study: ${get("course")}`,
      `Level: ${get("level")}`,
      `Church / fellowship: ${get("church")}`,
      "",
      "Letter of motivation:",
      get("motivation"),
      "",
      "Attached: academic transcript (200 level and above), academic recommendation letter, religious leader recommendation letter.",
    ].join("\n");

    const subject = `Scholarship application — ${get("name")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className={label}>Full name</label>
          <input id="name" name="name" required className={field} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" required className={field} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" required className={field} autoComplete="tel" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="school" className={label}>University / institution</label>
          <input id="school" name="school" required className={field} />
        </div>
        <div>
          <label htmlFor="course" className={label}>Course of study</label>
          <input id="course" name="course" required className={field} />
        </div>
        <div>
          <label htmlFor="level" className={label}>Current level</label>
          <select id="level" name="level" required className={field} defaultValue="">
            <option value="" disabled>Select…</option>
            {levels.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="church" className={label}>Church or campus fellowship</label>
          <input id="church" name="church" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="motivation" className={label}>Letter of motivation</label>
          <p className="mt-0.5 text-xs text-muted">Tell us why you should receive this scholarship.</p>
          <textarea id="motivation" name="motivation" required rows={7} className={field} />
        </div>
      </div>

      <p className="rounded-lg bg-gold-pale px-4 py-3 text-sm text-ink">
        Submitting opens your email app with this application filled in. Please attach your transcript (200 level and
        above) and both recommendation letters before you press send.
      </p>

      <button
        type="submit"
        className="w-full rounded-full bg-navy px-6 py-3 font-semibold text-white transition hover:bg-navy-deep"
      >
        Continue to email
      </button>

      {sent && (
        <p className="text-center text-sm text-muted" role="status">
          Your email app should have opened. If it didn’t, send your application to{" "}
          <a className="font-semibold text-navy underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
