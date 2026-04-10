import Link from 'next/link'

export default function Root({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/page-1">Page 1</Link>
            </li>
            <li>
              <Link href="/page-2">Page 2</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
