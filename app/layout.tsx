import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3, Ubuntu,Roboto, Bokor, Molle } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

const sourceSans = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400","700"],
})

const playfairDisplay = Bokor({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "Abdullah Rasheed",
  description:
    "Modern portfolio showcasing development skills, projects, and experience with stunning animations and responsive design",
  generator: "v0.app",
  icons: {
    icon: [
      {url: "/icon64.ico",sizes:"32x32"},
      {url: "/icon64.ico",sizes:"64x64"}],
    shortcut: "/icon.ico",
    apple: "/icon.ico",
  },
  keywords: ["portfolio", "developer", "full-stack", "react", "nextjs", "typescript", "web development"],
  authors: [{ name: "Professional Developer" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sourceSans.variable} ${playfairDisplay.variable}`}
    >
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
