import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - CruiseBrains',
    default: 'CruiseBrains - Innovative Software Development Agency',
  },
  description:
    'At CruiseBrains, we create innovative software solutions using cutting-edge technologies and agile methodologies to help businesses thrive.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
    <head>
      <link
        rel="icon"
        href="/favicon.ico?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
    </head>
    <body className="flex min-h-full flex-col">
    <RootLayout>{children}</RootLayout>
    </body>
    </html>
  )
}
