import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full h-20 md:h-24 px-5 md:px-10 flex justify-between items-center font-['Neue_Montreal'] text-xs md:text-sm font-normal tracking-tight uppercase z-10">
      <Link href="/" className="logo text-white">
        ATOMLIMBS
      </Link>
      <div className="flex">
        <Link href="/goal" className="ml-5 md:ml-14">
          GOAL
        </Link>
        <Link href="/about-us" className="ml-5 md:ml-14">
          ABOUT US
        </Link>
        <Link href="/contact" className="ml-5 md:ml-14">
          CONTACT
        </Link>
      </div>
    </div>
  );
}