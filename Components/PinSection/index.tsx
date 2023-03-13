import React, {useLayoutEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

function index() {

  const section:any = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const contentDiv = gsap.utils.toArray("#content");
    const sectionDimensions = section.current.offsetWidth;

    const ctx = gsap.context(() => {
      gsap.to(contentDiv, {
        xPercent: -100 * (contentDiv.length - 1),
        ease: "none",
        scrollTrigger:{
          trigger: "#section",
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
    <section id = "section" ref = {section}>
      <div id = "content">1</div>
      <div id = "content">2</div>
      <div id = "content">3</div>
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