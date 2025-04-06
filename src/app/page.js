'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function Home() {
  useEffect(() => {
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

    // GSAP animations remain unchanged
    gsap.to(".container", {
      duration: 2,
      top: "50vh",
      ease: "expo.inOut",
      delay: 0.5,
    });

    gsap.to(".container", {
      duration: 2,
      scale: 1,
      top: "25vh",
      ease: "expo.inOut",
      delay: 3,
    });

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

    gsap.from(".info, .buy-now-cta, .prev-imgs > div, .marquee", {
      duration: 1,
      opacity: 0,
      y: 100,
      ease: "power2.out",
      delay: 4,
      stagger: 0.1,
    });
  }, []);

  // Return statement remains unchanged
  return (
    <main>
      <div className="navbar">
        <div className="site-info">elevated</div>
        <div className="site-menu">
          <div className="menu-item">projects</div>
          <div className="menu-item">about</div>
          <div className="menu-item">contact</div>
        </div>
      </div>
      <div className="container">
        <div className="hero-img">
          <img src="/images/drone-hero.png" alt="Drone" />
        </div>
      </div>
      <p className="title">Reach The Fullest</p>
      <div className="info">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
          accusantium. Eveniet cupiditate at quae molestias, ipsa cumque quidem
          vitae quas nam iusto fugit id accusantium tenetur nesciunt ducimus?
        </p>
      </div>
      <div className="buy-now-cta">
        <button>Buy Now</button>
      </div>
      <div className="prev-imgs">
        <div className="prev-img prev-1"></div>
        <div className="prev-img prev-2"></div>
        <div className="prev-img prev-3"></div>
      </div>
      <div className="marquee">
        <span>
          how we work ↗ try now ↗ how we work ↗ try now ↗ how we work ↗ try now ↗
          how we work ↗ try now ↗ how we work ↗ try now ↗ how we work ↗ try now ↗
          how we work ↗ try now ↗ how we work ↗ try now ↗
        </span>
      </div>
    </main>
  );
}
