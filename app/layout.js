import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://cannonbelles.vercel.app"),
  title: "CannonBelles | Coffee, Ice Cream & Artisanal Cheese · Cannon Falls, MN",
};

// Latin subsets cover every character on the site; preload them so text renders in the right font immediately.
const PRELOAD_FONTS = [
  "/fonts/inter-UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2",
  "/fonts/playfair-nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgA.woff2",
  "/fonts/playfair-nuFkD-vYSZviVYUb_rj3ij__anPXDTnogkk7.woff2",
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {PRELOAD_FONTS.map((href) => (
          <link key={href} rel="preload" href={href} as="font" type="font/woff2" crossOrigin="" />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
