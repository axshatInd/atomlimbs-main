"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Navbar from '@/components/Navbar';

export default function AboutUsPage() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

   const textwrapper = document.querySelector(".title");
   if (textwrapper && window.anime) {
    textwrapper.innerHTML = textwrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    window.anime({
      targets: ".title .letter",
      translateY: [-200,0],
      easing: "easeOutExpo",
      duration: 1500,
      delay: (el, i) => 3500 + 50 * i,
    });
   } 

   // Cleanup function
   return () => {
     window.removeEventListener("resize", checkMobile);
   };
   // GSAP Animations

  }, []);
  
  return (
    <>
    <div className="navbar">
        <div className="site-info">atomlimbs</div>
        <div className="site-menu">
          <div 
            className="menu-item cursor-pointer hover:text-gray-300 transition-colors" 
            onClick={() => router.push('/')}
          >
            home
          </div>
        </div>
      </div>
      <p className="title">ABOUT US</p>
      </>
  );
}