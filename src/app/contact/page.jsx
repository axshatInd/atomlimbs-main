import Navbar from '@/components/Navbar';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Navbar />
      <div className="pt-32 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase text-center mb-16 font-['Monument_Extended']">
          CONTACT
        </h1>
        <div className="text-lg leading-relaxed font-['Neue_Montreal']">
          <p>Get in touch with our team to learn more about our prosthetic solutions.</p>
          
          <form className="mt-12 space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-opacity-10 bg-white border border-white/20 p-4 text-white font-['Neue_Montreal'] focus:outline-none focus:border-white/50"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-opacity-10 bg-white border border-white/20 p-4 text-white font-['Neue_Montreal'] focus:outline-none focus:border-white/50"
              />
            </div>
            <div>
              <textarea 
                placeholder="Message" 
                rows="5"
                className="w-full bg-opacity-10 bg-white border border-white/20 p-4 text-white font-['Neue_Montreal'] focus:outline-none focus:border-white/50 resize-y"
              ></textarea>
            </div>
            <div>
              <button 
                type="submit"
                className="bg-[#1c1c1c] text-white uppercase font-['Neue_Montreal'] py-4 px-8 text-sm hover:bg-[#323232] transition-colors duration-300"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}