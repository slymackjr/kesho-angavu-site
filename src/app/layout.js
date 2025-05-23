import Head from 'next/head';
import './globals.css';

export const metadata = {
  title: 'Kesho Angavu – Empowering Out-of-School Tanzanian Youth for a Brighter Future',
  description:
    'Kesho Angavu by TUCASA MUHAS is a youth-led initiative equipping out-of-school Tanzanian youth with life skills, digital literacy, health education, and sustainable economic opportunities for self-employment.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-region="TZ">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Kesho Angavu, youth empowerment Tanzania, TUCASA MUHAS, out-of-school youth, digital skills Tanzania, youth health education, entrepreneurship training Tanzania, community development" />
        <meta name="author" content="TUCASA MUHAS – Kesho Angavu Initiative" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="application-name" content="Kesho Angavu" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kesho Angavu – Empowering Out-of-School Tanzanian Youth" />
        <meta property="og:description" content="Training, mentorship, and opportunity for a brighter tomorrow. Join our mission to uplift Tanzanian youth." />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <meta property="og:url" content="https://keshoangavu.org" />
        <meta property="og:site_name" content="Kesho Angavu" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kesho Angavu – Youth Empowerment in Tanzania" />
        <meta name="twitter:description" content="Empowering out-of-school youth with skills, values, and opportunities to thrive." />
        <meta name="twitter:image" content="/assets/twitter-card.jpg" />
        <meta name="twitter:site" content="@KeshoAngavu" />

        {/* Favicon and Manifest */}
        <link rel="icon" href="/favicon.ico" />
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
              logo: "https://keshoangavu.org/assets/og-image.jpg",
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
      </Head>
      <body>{children}</body>
    </html>
  );
}
