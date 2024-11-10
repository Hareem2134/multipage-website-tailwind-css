export default function ProductSection() {
    return (
      <section className="py-12 text-center">
        
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Shop by Category</h2>

        <div className="flex justify-center gap-5">
          <div 
            className="w-64 h-72 rounded-lg flex items-center justify-center bg-cover bg-center text-white text-2xl font-bold shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ backgroundImage: "url('/men.png')" }}>

            <h3 className="category-title">Men</h3>
          </div>

          <div 
            className="w-64 h-72 rounded-lg flex items-center justify-center bg-cover bg-center text-white text-2xl font-bold shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ backgroundImage: "url('/women.png')" }}>

            <h3 className="category-title">Women</h3>
          </div>

          <div 
            className="w-64 h-72 rounded-lg flex items-center justify-center bg-cover bg-center text-white text-2xl font-bold shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ backgroundImage: "url('/kid.png')" }}>

            <h3 className="category-title">Kids</h3>
          </div>


        </div>
      </section>
    );
  }
