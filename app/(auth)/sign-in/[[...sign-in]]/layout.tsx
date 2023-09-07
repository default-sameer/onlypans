export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col">
      <main className="container mx-auto max-w-7xl px-6 flex-grow">
        <div className="flex justify-center items-center">{children}</div>
      </main>
    </section>
  );
}
