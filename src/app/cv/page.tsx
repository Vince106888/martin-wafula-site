export const metadata = {
  title: "Curriculum Vitae",
};

export default function CVPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-6">
      <h1 className="text-4xl font-bold">Curriculum Vitae</h1>

      <a
        href="/Martin_Wafula_CV.pdf"
        target="_blank"
        className="underline"
      >
        Download CV (PDF)
      </a>
    </main>
  );
}
