import { ThemeProvider } from "@/context/ThemeProvider";
import Image from "next/image";

 interface User {
  name: string,
  age: number,
 }
let user: User = { 
  name: "John",
  age: 34,
}

export default function Home() {
  return (
    <main className=" bg-secondary flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeProvider/>

      
      <h1  className="   text-blue-500    "> Next JS HERE WE COME  </h1>
    </main>
  );
}
