
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Domenebi.ge',
  description: 'Find Your Domain - იპოვნე სასურველი დომეინი',
  other: {
    "twitter:image": 'https://i.ibb.co/d6TXxB2/homepage-https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZGh9MrLweXKaVRHlRCVA4DgehGUAOVWF5w&usqp=CAU.jpg',
    "twitter:card": "summary_large_image",
    "og:url": "domenebi.ge",
    "og:image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZGh9MrLweXKaVRHlRCVA4DgehGUAOVWF5w&usqp=CAU',
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ background: '#FAFAFB 0% 0% no-repeat padding-box;', height: 'auto' }}>
        {children}
      </body>
    </html>
  )
}
