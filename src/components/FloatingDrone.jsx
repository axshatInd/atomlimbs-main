"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

export default function FloatingDrone() {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const droneRef = useRef(null);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Create a timeline for better control
    const tl = gsap.timeline();
    
    // Store animations for cleanup
    const animations = [];

    if (isLandingPage) {
      // Only do the full animation sequence on landing page
      
      // Set initial position
      gsap.set(droneRef.current, {
        top: "120vh",
        scale: 0.2,
        opacity: 1
      });
      
      // First animation: move to center
      tl.to(droneRef.current, {
        duration: 2,
        top: isMobile ? "40vh" : "50vh",
        ease: "expo.inOut",
        delay: 0.5
      });
      
      // Second animation: scale up and move to final position
      tl.to(droneRef.current, {
        duration: 2,
        scale: 1,
        top: isMobile ? "25vh" : "30vh", // Lowered position on landing page
        ease: "expo.inOut"
      });
      
      // Third animation: start floating
      tl.to(droneRef.current, {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
      
      animations.push(tl);
    } else {
      // For other pages, skip the intro sequence and just show the floating drone
      // Position it lower to avoid covering the title
      
      // Immediately set to final position and scale
      gsap.set(droneRef.current, {
        top: isMobile ? "25vh" : "30vh", // Positioned lower to avoid covering title
        scale: isMobile ? 0.3 : 0.4,     // Slightly smaller scale
        opacity: 0
      });
      
      // Fade in
      tl.to(droneRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut"
      });
      
      // Start floating immediately
      tl.to(droneRef.current, {
        y: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      }, "<"); // Start at the same time as the fade in
      
      animations.push(tl);
    }

    // Cleanup function
    return () => {
      window.removeEventListener("resize", checkMobile);
      
      // Kill all GSAP animations on unmount
      animations.forEach(anim => {
        if (anim && anim.kill) {
          anim.kill();
        }
      });
    };
  }, [isMobile, isLandingPage]);

  // Add a class based on whether it's the landing page or not
  const containerClass = `drone-container ${isLandingPage ? 'landing-drone' : 'page-drone'}`;

  return (
    <div className={containerClass} ref={droneRef}>
      <div className="hero-img">
        <img src="/images/drone-hero.png" alt="Drone" />
      </div>
    </div>
  );
}