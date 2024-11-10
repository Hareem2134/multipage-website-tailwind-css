import Image from "next/image";
import Footer from "../../../components/Footer";

export default function About(){
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-blend-hard-light w-full h-[50vh] mt-[-65px] bg-[url('/about-heroimage.png')]">

      <div>

        <h1 className="flex justify-center text-center text-white text-4xl font-extrabold py-[170px] pb-[100px]">About Urban Worn Clothing Co.</h1>

        <div>
          <p className="text-center pt-8 w-[65vw] mx-auto text-lg font-bold text-black">Urban Worn Clothing Co. is more than just a brand; it's a lifestyle. We're passionate about crafting unique, high-quality pieces that capture the raw energy and authentic vibe of urban streetwear. Our designs are inspired by the dynamic pulse of city life, blending comfort with bold, modern styles that make a statement wherever you go.</p>

          <h1 className="text-center text-2xl font-semibold py-2">Our Story</h1>

          <Image className="w-[50vw] mx-auto rounded-lg shadow-lg" src="/factory.jpg" alt="factory" width="450" height="450" />

          <p className="text-center pt-8 w-[65vw] mx-auto text-lg font-bold text-black">Founded with the vision of redefining street fashion, Urban Worn Clothing Co. offers an exclusive collection of carefully curated apparel that speaks to the trendsetters and style icons who crave originality. Each item in our lineup is made with premium materials and meticulous craftsmanship, ensuring that you don't just wear a look—you wear an attitude.</p>

          <h1 className="text-center text-2xl font-semibold py-2">Our Style</h1>

          <Image className="w-[50vw] mx-auto rounded-lg shadow-lg" src="/urban.jpg" alt="factory" width="450" height="450" />

          <p className="text-center pt-8 w-[65vw] mx-auto text-lg font-bold text-black">Every collection we release embodies the energy of the urban landscape—bold, edgy, and effortlessly cool. Our designs are for those who want their clothes to tell a story. From graphic tees to hoodies, outerwear to essentials, each piece is created with you in mind. Every item combines street-ready style with ultimate comfort, allowing you to move through the city with confidence.</p>

          <p className="text-center pt-8 w-[65vw] mx-auto text-lg font-bold text-black"><i>Why choose Urban Worn Clothing Co.?</i>
          We pride ourselves on delivering premium, long-lasting fabrics and meticulous craftsmanship in each piece. You won't just see the difference; you'll feel it.</p>
        </div>

        <h1 className="text-center text-2xl font-semibold py-2">Our Promise</h1>

        <Image className="w-[50vw] mx-auto rounded-lg shadow-lg" src="/vibrant.jpg" alt="factory" width="450" height="450" />

        <p className="text-center pt-8 w-[65vw] mx-auto text-lg font-bold text-black">At Urban Worn Clothing Co., quality is non-negotiable. We source sustainable, durable materials that not only look great but also respect the environment. With our commitment to responsible fashion, you can be sure that each piece you own is made with integrity.</p>

        <p className="text-center pt-8 w-[65vw] mx-auto text-lg font-bold text-black"><i>Our sustainable mission:</i>
        We believe that fashion should be sustainable, not disposable. Our focus on eco-friendly practices means we're creating fashion with a smaller footprint—without sacrificing the style you love.</p>
      </div>

      <Footer />
    </div>
  );
}