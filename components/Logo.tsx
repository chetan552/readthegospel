import { site } from "@/lib/site";

// Two variants: the light one is drawn for light paper, the dark one is
// recolored (light lettering, sage leaves) to sit on the dark background.
// CSS shows only the matching variant per theme.
export function Logo({ className }: { className?: string }) {
  const base = `logo-img${className ? ` ${className}` : ""}`;
  return (
    <>
      <img
        className={`${base} logo-img-light`}
        src="/readthegospel-logo.png"
        alt={site.name}
        width={138}
        height={46}
      />
      <img
        className={`${base} logo-img-dark`}
        src="/readthegospel-logo.png"
        alt={site.name}
        width={138}
        height={46}
      />
    </>
  );
}
