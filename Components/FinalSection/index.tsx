import React, {useLayoutEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

function index() {
    const section = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: section.current,
                    start: 'top top',
                    markers: true,
                }
            }).fromTo('#FSTitle', {opacity: 0}, {opacity: 1, duration: 2, ease: 'SlowMo.easeOut'})
        })

        return () => ctx.revert()

    }, [])

  return (
    <section ref = {section}>
        <h1 id = 'FSTitle'>GOOD IDEAS ARE BETTER WITH US</h1>
    <style jsx>{`
        section{
            width: 100vw;
            height: 100vh;
            background-color: lightblue;
            font-family: 'Montserrat', sans-serif;
            font-size: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: black;
        }
    `}</style>
    </section>
  )
}

export default index