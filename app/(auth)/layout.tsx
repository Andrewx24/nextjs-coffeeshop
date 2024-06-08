import Navbar from "@/ui/componets/Navbar";




export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body >
         
        <main className="flex min-h-screen w-full items-center justify-center">
      {children}
    </main>
          
          
          </body>
      </html>
    );
  }