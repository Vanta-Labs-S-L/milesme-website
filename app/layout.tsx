import type { Metadata } from "next";
import "../css/app.css";

export const metadata: Metadata = {
  title: "MilesMe",
  description: "Admin dashboard for MilesMe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
