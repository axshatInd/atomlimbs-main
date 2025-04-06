"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function LandingPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

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

    // GSAP animations
    gsap.to(".container", {
      duration: 2,
      top: isMobile ? "40vh" : "50vh",
      ease: "expo.inOut",
      delay: 0.5,
    });

    gsap.to(".container", {
      duration: 2,
      scale: 1,
      top: isMobile ? "15vh" : "20vh", // Adjusted to reduce gap
      ease: "expo.inOut",
      delay: 3,
    });

    // Rest of animations remain the same
    gsap.from(".navbar > div", {
      duration: 1.6,
      opacity: 0,
      y: -100,
      ease: "expo.inOut",
      delay: 3,
      stagger: 0.08,
    });

    gsap.from(".site-menu > div", {
      duration: 1,
      opacity: 0,
      y: -100,
      ease: "power2.out",
      delay: 2.5,
      stagger: 0.2,
    });

    gsap.from(".info, .run-now-cta, .prev-imgs > div, .marquee", {
      duration: 1,
      opacity: 0,
      y: 100,
      ease: "power2.out",
      delay: 4,
      stagger: 0.1,
    });

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <main>
      <div className="navbar">
        <div className="site-info">atomlimbs</div>
        <div className="site-menu">
          <div className="menu-item">Goal</div>
          <div className="menu-item">about us</div>
          <div className="menu-item">contact</div>
        </div>
      </div>
      <div className="container">
        <div className="hero-img">
          <img src="/images/drone-hero.png" alt="Drone" />
        </div>
      </div>
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
        <button>Run Now</button>
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
