import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins" 
})

export const metadata: Metadata = {
  title: "Levion Studio - The Freelance Agency for YOU",
  description: "Levion Studio is a full-stack creative and software development agency offering end-to-end digital solutions — from communication to deployment.",
  openGraph: {
    title: "Levion Studio - The Freelance Agency for YOU",
    description: "We turn your ideas into impactful digital experiences. Design, Development, and Marketing excellence in one ecosystem.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
