import './globals.css';

export const metadata = {
  title: 'Kesho Angavu – Empowering Out-of-School Tanzanian Youth for a Brighter Future',
  description:
    'Kesho Angavu by TUCASA MUHAS is a youth-led initiative equipping out-of-school Tanzanian youth with life skills, digital literacy, health education, and sustainable economic opportunities for self-employment.',
  keywords: [
    'Kesho Angavu',
    'youth empowerment Tanzania',
    'TUCASA MUHAS',
    'out-of-school youth',
    'digital skills Tanzania',
    'youth health education',
    'entrepreneurship training Tanzania',
    'community development'
  ],
  authors: [{ name: 'TUCASA MUHAS – Kesho Angavu Initiative' }],
  creator: 'TUCASA MUHAS – Kesho Angavu Initiative',
  openGraph: {
    type: 'website',
    title: 'Kesho Angavu – Empowering Out-of-School Tanzanian Youth',
    description: 'Training, mentorship, and opportunity for a brighter tomorrow. Join our mission to uplift Tanzanian youth.',
    url: 'https://keshoangavu.org',
    siteName: 'Kesho Angavu',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kesho Angavu Open Graph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kesho Angavu – Youth Empowerment in Tanzania',
    description: 'Empowering out-of-school youth with skills, values, and opportunities to thrive.',
    site: '@KeshoAngavu',
    images: ['/assets/twitter-card.jpg'],
  },
  applicationName: 'Kesho Angavu',
  manifest: '/manifest.json',
  metadataBase: new URL('https://keshoangavu.org'),
};

export const viewport = {
  themeColor: "#3b82f6",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-region="TZ">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        {/* Favicon and Manifest */}
        <link rel="icon" type="image/png" href="/assets/kesho-angavu-icon2.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Kesho Angavu",
              url: "https://keshoangavu.org",
              logo: "https://keshoangavu.org/kesho-angavu.png",
              sameAs: [
                "https://www.tucasamuhas.blogspot.com"
              ],
              description:
                "Kesho Angavu by TUCASA MUHAS is an initiative focused on empowering out-of-school youth in Tanzania through life skills, entrepreneurship, digital literacy, and health education.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "P.O. Box 65007",
                addressLocality: "Dar es Salaam",
                addressCountry: "TZ"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+255 757 346 979",
                contactType: "Project Chairperson",
              }
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
