export default {
  repository: 'https://github.com/rayhanadev/replapi-it-docs',
  docsRepository: 'https://github.com/rayhanadev/replapi-it-docs',
  branch: 'master',
  path: '/',
  titleSuffix: ' | ReplAPI.it',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null,
  darkMode: true,
  footer: true,
  footerText: <>Copyright © {new Date().getFullYear()} RayhanADev. Built with Nextra.</>,
  footerEditOnGitHubLink: true,
  logo:
    <>
      <span className="mr-2 font-extrabold hidden md:inline">ReplAPI.it</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        A Package for NodeJS
      </span>
    </>,
  head: 
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en-US" />
      <meta name="description" content="The home of the ReplAPI.it Docs." />
      
      <meta name="og:title" content="ReplAPI.it Documentation" />
      <meta name="og:description" content="The home of the ReplAPI.it Docs." />
      /* <meta name="og:image" content="https://nextra.vercel.app/og.png" /> */
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://replapi-it-docs.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="replapi-it-docs.vercel.app" />
      <meta name="twitter:url" content="https://replapi-it-docs.vercel.app" />
      
      <meta name="apple-mobile-web-app-title" content="ReplAPI.it Docs" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      /* <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" /> */
      
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="256x256" href="/favicon-256x256.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      <link rel="manifest" href="/manifest.json" />
      
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </>
}