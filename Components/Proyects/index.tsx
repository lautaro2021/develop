import React, {useLayoutEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

function index() {

  const section:any = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const contentDiv = gsap.utils.toArray("#proyectContent");
    const sectionDimensions = section.current.offsetWidth;

    const ctx = gsap.context(() => {

      gsap.set(contentDiv, {xPercent: -100 * (contentDiv.length - 1)})

      gsap.to(contentDiv, {
        xPercent: 0,
        ease: "none",
        scrollTrigger:{
          trigger: "#proyectSection",
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=" + sectionDimensions,
        }
      })
    })

    return () => ctx.revert();

  }, [])
  return (
    <section id = "proyectSection" ref = {section}>
      <div id = "proyectContent">1</div>
      <div id = "proyectContent">2</div>
      <div id = "proyectContent">3</div>
    <style jsx>{`
        section{
            width: 100vw;
            height: 100vh;
            background: black;
            display: flex;
            overflow: hidden;
        }
        div{
          border: 2px solid red;
          min-width: 100%;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 200px;
        }
    `}</style>
    </section>
  )
}

export default index