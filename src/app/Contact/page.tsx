import Footer from "../../../components/Footer";

export default function Contact(){
  return(
    <div className="bg-cover bg-center bg-no-repeat bg-blend-hard-light w-full h-[50vh] mt-[-65px] bg-[url('/about-heroimage.png')]">
      <div>
        <h1 className="text-center text-white text-4xl font-extrabold py-[170px] pb-[100px]">Contact Us</h1>

        <form className="grid justify-center p-4 mt-10" action="/submit-form" method="POST">

          <div className="flex items-center mb-6">
            <label htmlFor="name" className="w-[100px] font-bold text-left">Name:</label>
            <input className="w-[50vw] text-lg font-bold p-6 mt-2 rounded-lg shadow-lg" type="text" id="name" name="name" placeholder="Name" required />
          </div>

          <div className="flex items-center mb-6">
            <label htmlFor="email" className="w-[100px] font-bold text-left">Email:</label>
            <input className="w-[50vw] text-lg font-bold p-6 mt-2 rounded-lg shadow-lg" type="email" id="email" name="email" placeholder="Email" required />
          </div>

          <div className="flex items-center mb-6">
            <label htmlFor="message" className="w-[100px] font-bold text-left">Message:</label>
            <textarea className="w-[50vw] text-lg font-bold p-6 mt-2 rounded-lg shadow-lg" id="message" name="message" rows={4} placeholder="Message" required></textarea>
          </div>

          <button type="submit" className="w-[200px] mx-auto p-4 bg-[#005dc0] text-[#dbdbdb] text-lg font-semibold rounded-lg shadow-lg hover:bg-[#2c91fd] hover:text-white transform hover:translate-y-[-5px] transition-all duration-300">Send Message</button>
        </form>

      </div>

      <Footer />
    </div>
  );
}