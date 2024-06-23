import Image from "next/image";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <main className=" min-h-screen flex-col items-center justify-between">
      <Navbar/>
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20">
  <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">

    <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start">
      <span className="relative">Discover the Art of Flavour</span>
    </h1> 
    <p className="text-lg opacity-80 leading-relaxed">
    Discover delicious recipes, cooking tips, and culinary inspiration to elevate your kitchen experience. 
    </p>
    <div className="space-y-4">
      <button className="btn btn-primary p-3  bg-white group btn-wide plausible-event-name=Checkout" style={{border: "1px #f78a6b"}}>
        Learn More
      </button>
    </div>
    
  </div>
  <div className="relative max-md:-m-4 lg:w-full">Content here</div>

</section>


    </main>
  );
}
