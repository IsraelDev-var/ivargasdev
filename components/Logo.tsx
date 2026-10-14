/** Logo i/dev: "ı" con punto naranja, barra con degradado azul→verde y "dev". */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`logo ${className}`} role="img" aria-label="i/dev">
      <span className="logo-i" aria-hidden="true">ı</span>
      <span className="logo-s" aria-hidden="true" />
      <span aria-hidden="true">dev</span>
    </span>
  );
}
