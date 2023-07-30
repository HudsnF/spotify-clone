import './globals.css'


export const metadata = {
  title: 'Spotify Clone',
  description: 'Listen to Music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg bg-neutral-950 text-neutral-400">{children}</body>
    </html>
  )
}
