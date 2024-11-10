import Footer from '../../components/Footer';
import ProductSection from '../../components/ProductSection';


export default function Home() {
  return (
    <div className="w-full">

      <div className="w-screen h-screen bg-cover bg-center -mt-[65px]" 
           style={{ backgroundImage: 'url(/heroimage.png)' }}>
      </div>
    
      <ProductSection />
      <Footer />
    </div>
  );
}