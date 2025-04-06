import './globals.css';

export const metadata = {
  title: 'Product Landing Page',
  description: 'Animated product landing page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
