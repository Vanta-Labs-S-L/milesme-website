import type { Metadata } from "next";
import "../css/app.css";

export const metadata: Metadata = {
  title: "MilesMe",
  description: "MilesMe - Loop routes tailored to your distance, terrain, and preferences.",
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
