import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    const ctx = gsap.context(() => {

      // =====================================
      // HERO ENTRANCE
      // =====================================

      const tl = gsap.timeline({
        delay: 0.15,
      });

      tl.from(".hero-kicker", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power4.out",
      })

        .from(
          ".hero-intro",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )

        .from(
          ".hero-title-line",
          {
            yPercent: 110,
            opacity: 0,
            duration: 1,
            stagger: 0.14,
            ease: "power4.out",
          },
          "-=0.3"
        )

        .from(
          ".hero-role",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.5"
        )

        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )

        .from(
          ".hero-buttons",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        )

        .from(
          ".hero-stats",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );


      // =====================================
      // AVATAR ENTRANCE
      // =====================================

      gsap.fromTo(
        ".hero-avatar",
        {
          x: 220,
          y: 100,
          scale: 0.78,
          opacity: 0,
          rotation: 3,
        },
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.8,
          delay: 0.2,
          ease: "power4.out",
        }
      );


      // =====================================
      // AVATAR FLOAT
      // =====================================

      gsap.to(".hero-avatar", {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });


      // =====================================
      // AVATAR GLOW
      // =====================================

      gsap.to(".avatar-glow", {
        scale: 1.15,
        opacity: 0.7,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });


      // =====================================
      // TECH CARDS
      // =====================================

      gsap.from(".tech-label", {
        scale: 0,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        delay: 1.2,
        ease: "back.out(1.7)",
      });


      // =====================================
      // TECH CARD FLOAT
      // =====================================

      gsap.to(".react-label", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".dotnet-label", {
        y: 10,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".gsap-label", {
        y: -8,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".design-label", {
        y: 9,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });


      // =====================================
      // MOUSE PARALLAX
      // =====================================

      const handleMouseMove = (event) => {

        const mouseX =
          event.clientX /
            window.innerWidth -
          0.5;

        const mouseY =
          event.clientY /
            window.innerHeight -
          0.5;


        gsap.to(".hero-avatar", {
          x: mouseX * 20,
          rotationY: mouseX * 4,
          rotationX: mouseY * -3,
          duration: 1,
          ease: "power3.out",
        });


        gsap.to(".avatar-glow", {
          x: mouseX * 35,
          y: mouseY * 25,
          duration: 1.2,
          ease: "power3.out",
        });


        gsap.to(".react-label", {
          x: mouseX * 30,
          y: mouseY * 20,
          duration: 1,
        });

        gsap.to(".dotnet-label", {
          x: mouseX * -25,
          y: mouseY * -15,
          duration: 1.2,
        });

        gsap.to(".gsap-label", {
          x: mouseX * 20,
          y: mouseY * 25,
          duration: 1,
        });

      };


      window.addEventListener(
        "mousemove",
        handleMouseMove
      );


      // =====================================
      // BUTTON MAGNETIC EFFECT
      // =====================================

      const buttons =
        hero.querySelectorAll(
          ".hero-btn"
        );

      buttons.forEach((button) => {

        button.addEventListener(
          "mousemove",
          (event) => {

            const rect =
              button.getBoundingClientRect();

            const x =
              event.clientX -
              rect.left -
              rect.width / 2;

            const y =
              event.clientY -
              rect.top -
              rect.height / 2;

            gsap.to(button, {
              x: x * 0.12,
              y: y * 0.12,
              duration: 0.3,
            });

          }
        );

        button.addEventListener(
          "mouseleave",
          () => {

            gsap.to(button, {
              x: 0,
              y: 0,
              duration: 0.6,
              ease: "elastic.out(1,0.4)",
            });

          }
        );

      });


      // =====================================
      // SCROLL INDICATOR
      // =====================================

      gsap.to(".scroll-mouse::after", {
        y: 8,
        duration: 1,
        repeat: -1,
        yoyo: true,
      });


      return () => {
        window.removeEventListener(
          "mousemove",
          handleMouseMove
        );
      };

    }, hero);

    return () => ctx.revert();

  }, []);


  return (
    <section
      ref={heroRef}
      className="hero"
      id="home"
    >

      {/* BACKGROUND */}

      <div className="hero-background">

        <div className="background-grid"></div>

        <div className="background-glow glow-one"></div>

        <div className="background-glow glow-two"></div>

      </div>


      {/* LEFT CONTENT */}

      <div className="hero-content">

        <div className="hero-kicker">

          <span className="code-symbol">
            &lt;/&gt;
          </span>

          CREATIVE DEVELOPER

          <span className="kicker-dot"></span>

          DESIGNER

        </div>


        <p className="hero-intro">
          HI, I'M
        </p>


        <h1 className="hero-title">

          <span className="hero-title-line">
            HARAM
          </span>

          <span className="hero-title-line hero-purple">
            YASEEN<span>.</span>
          </span>

        </h1>


        <div className="hero-role">

          FRONTEND DEVELOPER

          <span>•</span>

          ASP.NET DEVELOPER

          <span>•</span>

          GRAPHIC DESIGNER

        </div>


        <p className="hero-description">

          I create stunning digital experiences
          where design meets code. From interactive
          websites to powerful systems, I build,
          design and develop with passion.

        </p>


        <div className="hero-buttons">

          <a
            href="#work"
            className="hero-btn primary"
          >
            VIEW MY WORK

            <span>
              →
            </span>

          </a>


          <a
            href="#about"
            className="hero-btn video-btn"
          >

            <span className="play-icon">
              ▶
            </span>

            WATCH INTRO

          </a>

        </div>


        <div className="hero-stats">

          <div className="stat">
            <strong>10+</strong>
            <span>PROJECTS</span>
          </div>

          <div className="stat">
            <strong>3+</strong>
            <span>CERTIFICATIONS</span>
          </div>

          <div className="stat">
            <strong>∞</strong>
            <span>PASSION</span>
          </div>

        </div>

      </div>


      {/* AVATAR */}

      <div className="avatar-container">

        <div className="avatar-glow"></div>

        <img
          src="/avatar.png"
          alt="Haram Yaseen"
          className="hero-avatar"
        />


        <div className="tech-label react-label">
          <span>⚛</span>
          React
        </div>


        <div className="tech-label dotnet-label">
          <span>◆</span>
          .NET
        </div>


        <div className="tech-label gsap-label">
          <span>✦</span>
          Html/css
        </div>


        <div className="tech-label design-label">
          <span>✦</span>
          Design
        </div>

      </div>


      {/* SOCIAL */}

      <div className="hero-social">

        <a href="#">
          GH
        </a>

        <a href="#">
          IN
        </a>

        <a href="#">
          IG
        </a>

      </div>


      {/* SCROLL */}

      <div className="hero-scroll">

        <span className="scroll-mouse"></span>

        SCROLL TO EXPLORE

        <b>
          ↓
        </b>

      </div>

    </section>
  );
}

export default Hero;