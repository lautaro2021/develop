import React, {useLayoutEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

function index() {
  const section = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: 'top-=200 top',
        }
      }).fromTo('#h1', {opacity: 0, y: '50%'}, {opacity: 1, y: '0%', ease: 'elastic', duration: 1})
    })

    return () => ctx.revert()

  }, [])

  return (
    <section ref = {section}>
      <div>
        <h1 id = 'h1'>SEE OUR WORK</h1>
      </div>
    <style jsx>{`
        section{
            width: 100vw;
            height: 100vh;
            background-color: lightblue;
            display: flex;
            align-items: center;
            justify-content: center;
            color: black;
            font-family: 'Montserrat', sans-serif;
            font-size: 110px;
        }

    `}</style>
    </section>
  )
}

export default index