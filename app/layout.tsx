import type { Metadata } from "next";
import "../css/app.css";
import { ChunkReloadOnError } from "../components/ChunkReloadOnError";

export const metadata: Metadata = {
  title: "MilesMe",
  description:
    "MilesMe - Loop routes tailored to your distance, terrain, and preferences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChunkReloadOnError />
        {children}
      </body>
    </html>
  );
}
