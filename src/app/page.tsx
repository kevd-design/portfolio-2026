import Image from "next/image";
import logo from "../assets/kevd.design-logo.png" 



export default function Home() {
  return (
    <div>
      <p className="font-regular">Hello, world!</p>
      <Image 
        src= {logo}
        alt="kevd.design logo" 
      />
    </div>
  );
}
