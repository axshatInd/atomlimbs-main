import Navbar from '@/components/Navbar';

export default function GoalPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Navbar />
      <div className="pt-32 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase text-center mb-16 font-['Monument_Extended']">
          GOAL
        </h1>
        <div className="text-lg leading-relaxed font-['Neue_Montreal']">
          <p>Our goal is to revolutionize prosthetic technologies and enhance the quality of life for individuals with limb loss.</p>
          <p className="mt-6">We are focused on the development of advanced prosthetic technologies, specializing in creating innovative, high-performance prosthetic solutions using cutting-edge technologies.</p>
        </div>
      </div>
    </div>
  );
}