import "@/styling/globals.css"

import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"

import Navbar from "@/components/app/navbar"
import ScrollToTop from "@/components/app/scroll-to-top"
import SetStylingPref from "@/components/app/set-styling-pref"
import { ThemeProvider } from "@/components/app/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: {
    default:
      "Shatcn components - Start making poop-inspired layouts today",
    template: `%s - Shatcn components`,
  },
  description:
    "A collection of poop and fart-inspired styled components based on shadcn/ui.",
  keywords: [
    "shatcn",
    "shatcn components",
    "poop components",
    "fart components",
    "react tailwind components",
    "shadcn components",
    "shadcn poop",
  ],
  authors: [{ name: "Samuel Breznjak", url: "https://github.com/ekmas" }],
  openGraph: {
    type: "website",
    description:
      "A collection of poop and fart-inspired styled components based on shadcn/ui.",
    images: ["https://www.shatcn.dev/preview.png"],
    url: "https://www.shatcn.dev/",
    title: "Shatcn components",
  },
  metadataBase: new URL("https://www.shatcn.dev/"),
  twitter: {
    card: "summary_large_image",
    title: "Shatcn components - Start making poop-inspired layouts",
    description:
      "A collection of poop and fart-inspired styled components based on shadcn/ui.",
    images: ["https://www.shatcn.dev/preview.png"],
    creator: "@samuelbreznjak",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" suppressHydrationWarning lang="en">
      <body className={dmSans.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <SetStylingPref />
            <ScrollToTop />
            <Toaster />
          </ThemeProvider>
      </body>
    </html>
  )
}