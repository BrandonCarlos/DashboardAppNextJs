import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}
      <h1 className="text-blue-500">I'm blue!</h1>
      </body>
    </html>
  );
}
