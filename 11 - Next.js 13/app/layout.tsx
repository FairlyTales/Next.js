import Link from "next/link";
import './styles.css';

export default function RootLayout({
 children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
    <head/>

    <body>
    <nav>
      <Link href="/">
        Home
      </Link>
      <Link href="/cards">
        Cards
      </Link>
    </nav>
    {children}
    </body>
    </html>
  )
}
