import Navbar from "@/ui/componets/Navbar";




export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body >
          <Navbar/>
          
          {children} 
          
          </body>
      </html>
    );
  }