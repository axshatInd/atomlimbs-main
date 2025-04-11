"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function AboutUsPage() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  // Function to handle navigation with a clean refresh
  const handleNavigation = (path) => {
    // Clear any animations or state before navigation
    if (window.anime) {
      window.anime.remove(".title .letter");
    }
    
    // Kill any GSAP animations
    gsap.killTweensOf(".navbar > div");
    gsap.killTweensOf(".site-menu > div");
    gsap.killTweensOf(".title");
    gsap.killTweensOf(".info");
    
    // Navigate to the path
    window.location.href = path;
  };

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Store animations for cleanup
    const animations = [];

    // Text animation using the global anime variable
    const textwrapper = document.querySelector(".title");
    if (textwrapper && window.anime) {
      textwrapper.innerHTML = textwrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      const animeAnimation = window.anime({
        targets: ".title .letter",
        translateY: [-200,0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 500 + 50 * i,
      });
    }

    // GSAP Animations
    animations.push(
      gsap.from(".navbar > div", {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "power2.out",
        delay: 0.3,
        stagger: 0.1,
      })
    );

    animations.push(
      gsap.from(".site-menu > div", {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "power2.out",
        delay: 0.5,
        stagger: 0.1,
      })
    );

    animations.push(
      gsap.from(".info", {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power2.out",
        delay: 1,
      })
    );

    // Cleanup function
    return () => {
      window.removeEventListener("resize", checkMobile);
      
      // Kill all GSAP animations
      animations.forEach(anim => {
        if (anim && anim.kill) {
          anim.kill();
        }
      });
      
      // Clear anime.js animations
      if (window.anime) {
        window.anime.remove(".title .letter");
      }
    };
  }, []);
  
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <div className="navbar">
        <div className="site-info">atomlimbs</div>
        <div className="site-menu">
          <div 
            className="menu-item cursor-pointer hover:text-gray-300 transition-colors" 
            onClick={() => handleNavigation('/')}
          >
            home
          </div>
        </div>
      </div>
      <p className="title">ABOUT US</p>
      <div className="info mt-8 px-6 max-w-4xl mx-auto">
        <p>
          AtomLimbs is a project focused on the development of advanced
          prosthetic technologies. We specialize in creating innovative,
          high-performance prosthetic limbs that incorporate cutting-edge
          technologies like artificial intelligence and robotics to provide
          users with enhanced mobility, comfort, and control.
        </p>
      </div>
    </main>
  );
}