import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pilem.Io",
  description:
    "Pilem.Io is a web application that provides you with recommendations based on your preferences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="w-full min-h-screen antialiased bg-background">
            <div className="flex flex-col">
              <Navbar />
              <main className="w-full min-h-screen">
                <div className="px-4 mx-auto my-4 max-w-7xl">{children}</div>
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
