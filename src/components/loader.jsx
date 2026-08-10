import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Loader.css";

function Loader({ onComplete }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) {
          onComplete();
        }
      },
    });

    tl.to(".loader-number", {
      innerText: 100,
      duration: 1.8,
      snap: {
        innerText: 1,
      },
      ease: "power2.inOut",
    })

      .to(
        ".loader-progress",
        {
          width: "100%",
          duration: 1.8,
          ease: "power2.inOut",
        },
        0
      )

      .to(".loader-name", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      })

      .to(".loader-content", {
        scale: 0.95,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
      })

      .to(loader, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="loader"
    >
      <div className="loader-content">

        <div className="loader-top">
          <span>PORTFOLIO</span>

          <span>
            2026
          </span>
        </div>

        <div className="loader-center">

          <p className="loader-small">
            CREATIVE DEVELOPER
          </p>

          <h1 className="loader-name">
            HARAM YASEEN<span>.</span>
          </h1>

        </div>

        <div className="loader-bottom">

          <div className="loader-line">
            <div className="loader-progress"></div>
          </div>

          <div className="loader-percent">
            <span className="loader-number">
              0
            </span>
            %
          </div>

        </div>

      </div>
    </div>
  );
}

export default Loader;