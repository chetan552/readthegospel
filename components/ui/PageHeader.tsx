export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="page-intro narrow">
      <p className="kicker">{kicker}</p>
      <h1>{title}</h1>
      <p>{lede}</p>
    </section>
  );
}
