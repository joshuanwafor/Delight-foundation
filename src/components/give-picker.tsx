"use client";

import { useState } from "react";
import { paypalLink, site } from "@/lib/site";

const PER_STUDENT = 50;
const GOAL = 10;
const options = [1, 2, 5, 10];

export function GivePicker() {
  const [students, setStudents] = useState(1);
  const [copied, setCopied] = useState(false);
  const amount = students * PER_STUDENT;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.paypalEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the address is visible on the page anyway.
    }
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl shadow-navy/10 sm:p-10">
      <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Choose your gift</p>
      <h2 className="mt-2 font-serif text-2xl font-semibold text-navy sm:text-3xl">How many students will you sponsor?</h2>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4" role="radiogroup" aria-label="Number of students">
        {options.map((n) => {
          const active = n === students;
          return (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setStudents(n)}
              className={`rounded-xl border-2 px-3 py-4 text-center transition ${
                active ? "border-gold bg-gold-pale" : "border-navy/10 hover:border-gold/50"
              }`}
            >
              <span className="block font-serif text-2xl font-semibold text-navy">${n * PER_STUDENT}</span>
              <span className="mt-0.5 block text-xs text-muted">
                {n} student{n > 1 ? "s" : ""}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-sm text-muted">
          <span>
            Your gift covers <strong className="text-navy">{students}</strong> of our {GOAL}-student goal
          </span>
          <span>{Math.min(100, (students / GOAL) * 100)}%</span>
        </div>
        <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-sand">
          <div
            className="h-full rounded-full bg-gold transition-all"
            style={{ width: `${Math.min(100, (students / GOAL) * 100)}%` }}
          />
        </div>
      </div>

      <a
        href={paypalLink(amount)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex w-full items-center justify-center rounded-full bg-navy px-6 py-4 text-base font-semibold text-white transition hover:bg-navy-deep"
      >
        Give ${amount} with PayPal
      </a>
      <p className="mt-3 text-center text-xs text-muted">
        $50–$100 covers one student’s full session fee. Prefer a different amount? You can change it on PayPal.
      </p>

      <div className="mt-8 border-t border-navy/10 pt-6 text-sm text-muted">
        <p>
          Or send directly to our PayPal:{" "}
          <span className="font-semibold break-all text-navy">{site.paypalEmail}</span>{" "}
          <button type="button" onClick={copyEmail} className="font-semibold text-gold underline-offset-2 hover:underline">
            {copied ? "Copied" : "Copy"}
          </button>
        </p>
        <p className="mt-2">
          Giving from Nigeria or need bank details? Call or WhatsApp{" "}
          <a href={site.whatsappHref} className="font-semibold text-navy">
            {site.phone}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
