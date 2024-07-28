import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialized`}>{children}
        <p className={`${lusitana.className} antialized`} >Test over new font here!</p>
      </body>
    </html>
  );
}
