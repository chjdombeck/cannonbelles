import { SOCIAL } from "@/lib/site";

const ICONS = {
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  tiktok: <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />,
};

// Row of social icons. `variant`: "header" (charcoal on cream), "light" (cream footer), "dark" (dark footer).
export default function SocialLinks({ variant = "header", className = "" }) {
  return (
    <div className={`social-links social-${variant} ${className}`}>
      {SOCIAL.map((s) => (
        <a key={s.name} href={s.href} target="_blank" rel="noopener" aria-label={`CannonBelles on ${s.name}`} title={s.name} className="social-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {ICONS[s.icon]}
          </svg>
        </a>
      ))}
    </div>
  );
}
