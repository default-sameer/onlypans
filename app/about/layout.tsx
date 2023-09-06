export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col">
      <main className="container mx-auto max-w-7xl px-6 flex-grow">
        {children}
      </main>
    </section>
  );
}
