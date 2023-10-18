import "@/styles/globals.css";
import "react-cmdk/dist/cmdk.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { ClerkLoading, ClerkProvider, ClerkLoaded } from "@clerk/nextjs";
import LoadingComponent from "./loading";
import { ThemeSwitch } from "@/components/theme-switch";
import CommandPaletteComponent from "@/components/Command-Palette";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ClerkProvider>
          <ClerkLoading>
            <Providers
              themeProps={{ attribute: "class", defaultTheme: "light" }}
            >
              <div className="relative flex flex-col h-screen">
                <Navbar />
                <main className="container mx-auto max-w-7xl md:px-6 px-2 flex-grow">
                  <LoadingComponent />
                </main>
                <footer className="w-full flex items-center justify-evenly py-3">
                  <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://github.com/default-sameer/onlypans"
                    title="nextui.org homepage"
                    target="_blank"
                  >
                    <span className="text-default-600"> 🏗 Made by</span>
                    <p className="text-primary">Sameer Joshi</p>
                  </Link>
                  <ThemeSwitch />
                </footer>
              </div>
            </Providers>
          </ClerkLoading>
          <ClerkLoaded>
            <Providers
              themeProps={{ attribute: "class", defaultTheme: "light" }}
            >
              <div className="relative flex flex-col h-screen">
                {/* <CommandPaletteComponent /> */}
                <Navbar />
                <main className="container mx-auto max-w-7xl md:px-6 px-2 flex-grow py-8">
                  {children}
                </main>
                <footer className="w-full flex items-center justify-evenly py-3">
                  <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://github.com/default-sameer/onlypans"
                    title="nextui.org homepage"
                    target="_blank"
                  >
                    <span className="text-default-600"> 🏗 Made by</span>
                    <p className="text-primary">Sameer Joshi</p>
                  </Link>
                  <ThemeSwitch />
                </footer>
              </div>
            </Providers>
          </ClerkLoaded>
        </ClerkProvider>
      </body>
    </html>
  );
}
