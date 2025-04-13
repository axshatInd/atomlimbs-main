import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'AtomLimbs',
  description: 'Virtual Limb Controlled by AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Use Next.js Script component for better client-side loading */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" strategy="beforeInteractive" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
