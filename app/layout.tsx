import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily Rehab & Nutrition Planner",
  description: "Structured daily plan for post-Achilles rehab with nutrition guidance."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
