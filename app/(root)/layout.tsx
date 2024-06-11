import Footer from "@/ui/componets/Footer";
import Navbar from "@/ui/componets/Navbar";



export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">

        <body >
         
        {children} 
       
        </body>
      </html>
    );
  }