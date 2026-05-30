import "./globals.css";

export const metadata = {
  title: "La Ria Portraits | Praha",
  description:
    "Lifestyle & business focení pro jednotlivce i firmy v Praze. Rezervujte si termín online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
