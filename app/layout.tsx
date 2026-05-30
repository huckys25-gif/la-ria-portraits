import "./globals.css";

export const metadata = {
  title: "La Ria Portraits",
  description: "Moderní foto web – pestřejší, elegantní a méně růžový.",
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
