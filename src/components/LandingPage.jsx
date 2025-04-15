"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import FloatingDrone from "./FloatingDrone";

export default function LandingPage() {
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
    gsap.killTweensOf(".info");
    gsap.killTweensOf(".run-now-cta");
    gsap.killTweensOf(".prev-imgs > div");
    gsap.killTweensOf(".marquee");
    
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
    const textWrapper = document.querySelector(".title");
    if (textWrapper && window.anime) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      window.anime({
        targets: ".title .letter",
        translateY: [-200, 0],
        easing: "easeOutExpo",
        duration: 1500,
        delay: (el, i) => 3500 + 50 * i,
      });
    }
    
    // Rest of animations remain the same
    animations.push(
      gsap.from(".navbar > div", {
        duration: 1.6,
        opacity: 0,
        y: -100,
        ease: "expo.inOut",
        delay: 3,
        stagger: 0.08,
      })
    );

    animations.push(
      gsap.from(".site-menu > div", {
        duration: 1,
        opacity: 0,
        y: -100,
        ease: "power2.out",
        delay: 2.5,
        stagger: 0.2,
      })
    );

    animations.push(
      gsap.from(".info, .run-now-cta, .prev-imgs > div, .marquee", {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power2.out",
        delay: 4,
        stagger: 0.1,
      })
    );

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkMobile);
      
      // Kill all GSAP animations on unmount
      animations.forEach(anim => {
        if (anim && anim.kill) {
          anim.kill();
        }
      });
      
      // Reset any anime.js animations
      if (window.anime) {
        window.anime.remove(".title .letter");
      }
    };
  }, [isMobile]);

  const handleRunNow = () => {
    fetch('http://localhost:3001/run-unity')
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <main>
      <div className="navbar">
        <div className="site-info">atomlimbs</div>
        <div className="site-menu">
          <div 
            className="menu-item cursor-pointer hover:text-gray-300 transition-colors" 
            onClick={() => handleNavigation('/goal')}
          >
            Goal
          </div>
          <div 
            className="menu-item cursor-pointer hover:text-gray-300 transition-colors" 
            onClick={() => handleNavigation('/about-us')}
          >
            about us
          </div>
          <div 
            className="menu-item cursor-pointer hover:text-gray-300 transition-colors" 
            onClick={() => handleNavigation('/contact')}
          >
            contact
          </div>
        </div>
      </div>
      <FloatingDrone />
      <p className="title">REACH THE FULLEST</p>
      <div className="info">
        <p>
          AtomLimbs is a project focused on the development of advanced
          prosthetic technologies. We specialize in creating innovative,
          high-performance prosthetic limbs that incorporate cutting-edge
          technologies like artificial intelligence and robotics to provide
          users with enhanced mobility, comfort, and control. Our goal is to
          improve the quality of life for individuals with limb loss by offering
          more functional and intuitive prosthetic solutions.
        </p>
      </div>
      <div className="run-now-cta">
        <button onClick={handleRunNow}>Run Now</button>
      </div>
      <div className="prev-imgs">
        <div className="prev-img prev-1"></div>
        <div className="prev-img prev-2"></div>
        <div className="prev-img prev-3"></div>
      </div>
      <div className="marquee">
        <span>
          how it works ↗ try now ↗ how it works ↗ try now ↗ how it works ↗ try
          now ↗ how it works ↗ try now ↗ how we works ↗ try now ↗ how it works ↗
          try now ↗ how it works ↗ try now ↗ how it works ↗ try now ↗
        </span>
      </div>
    </main>
  );
}
