import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";
import type { Metadata } from "next";
import { SyncClerkUser } from "@/components/sync-clerk-user";

export const metadata: Metadata = {
  title: "Flowbase",
  description: "A cozy productivity workspace for notes, boards, tasks, and AI-assisted planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body style={{ margin: 0, padding: 0 }}>
          <SyncClerkUser />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
