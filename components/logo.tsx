// Sightline logo for the navbar: three screens in an arc, the center one lit.
// The center follows the site's highlight color (rdx.css), so it matches the
// theme; the side screens use the darker Sightline blue.
export const Logo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className} role="img" aria-label="Sightline">
    <path d="M3 15 L15 22 L15 42 L3 49 Z" fill="#0a76a6" stroke="#0a76a6" strokeWidth="2" strokeLinejoin="round" />
    <rect x="19" y="21" width="26" height="22" rx="2.5" fill="var(--rdx-highlighting, #28c8ff)" />
    <path d="M61 15 L49 22 L49 42 L61 49 Z" fill="#0a76a6" stroke="#0a76a6" strokeWidth="2" strokeLinejoin="round" />
  </svg>
)
