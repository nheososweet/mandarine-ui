import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";

// 1. Cấu hình Fonts
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// 2. Cấu hình SEO chuẩn
export const metadata: Metadata = {
  // Thay domain thật của bạn vào đây
  metadataBase: new URL("http://www.nheososweet.me"),

  title: {
    default: "Nheo So Sweet | Fullstack Developer & AI Engineer", // Updated Title
    template: "%s | Nheo So Sweet",
  },
  description:
    "Portfolio của Nguyễn Văn Tân (Nheo So Sweet) - Fullstack Developer & AI Engineer. Chuyên xây dựng các giải pháp công nghệ toàn diện từ Backend, Frontend Next.js đến tích hợp AI thông minh.", // Updated Description

  keywords: [
    "Nheo So Sweet",
    "nheososweet",
    "Nguyen Van Tan",
    "Nguyễn Văn Tân",
    "Fullstack Developer", // Updated Keyword
    "AI Engineer",
    "Next.js Developer",
    "React Developer Vietnam",
    "RAG System",
    "Lập trình viên AI",
    "Web Developer",
  ],

  authors: [{ name: "Nguyen Van Tan", url: "http://www.nheososweet.me" }],
  creator: "Nguyen Van Tan",

  // Cấu hình Open Graph
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "http://www.nheososweet.me",
    title: "Nheo So Sweet | Fullstack Developer & AI Engineer", // Updated OG Title
    description:
      "Khám phá Portfolio của Nguyễn Văn Tân - Kết hợp tư duy sản phẩm Fullstack với sức mạnh của AI & Next.js.", // Updated OG Desc
    siteName: "Nheo So Sweet Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nheo So Sweet Portfolio",
      },
    ],
  },

  // Cấu hình Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Nheo So Sweet | Fullstack Developer & AI Engineer", // Updated Twitter Title
    description:
      "Portfolio của Nguyễn Văn Tân - Chuyên gia Fullstack & AI Integration.", // Updated Twitter Desc
    images: ["/og-image.png"],
    creator: "@nheososweet",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

// 3. Schema JSON-LD (Updated Job Title)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nguyen Van Tan",
  alternateName: "Nheo So Sweet",
  url: "http://www.nheososweet.me",
  image: "http://www.nheososweet.me/og-image.png",
  sameAs: [
    "https://github.com/your-github",
    "https://linkedin.com/in/your-linkedin",
    "https://facebook.com/your-facebook",
  ],
  jobTitle: "Fullstack Developer & AI Engineer", // Updated Job Title
  worksFor: {
    "@type": "Organization",
    name: "Freelance / Open for Work",
  },
  knowsAbout: [
    "Software Development",
    "Fullstack Development", // Added
    "Next.js",
    "Artificial Intelligence",
    "RAG Systems",
    "React",
    "Python",
    "Backend Engineering", // Added
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Inject JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}
      </body>
    </html>
  );
}
