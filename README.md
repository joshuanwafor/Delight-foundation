# De_Light Foundation website

Next.js (App Router) + Tailwind CSS v4.

```bash
npm install
npm run dev
```

## Where things live

- `src/lib/site.ts` — contact details, PayPal email, scripture verses, programs, requirements. Edit content here first.
- `src/app/*/page.tsx` — Home, About, Programs, Scholarship, Give, Contact.
- `src/components/give-picker.tsx` — donation tiers ($50 per student) linking to PayPal.
- `src/components/apply-form.tsx` — scholarship application; opens the applicant's email app (no backend yet).
