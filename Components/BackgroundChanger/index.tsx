import React, {useLayoutEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

function index() {
    const section:any = useRef(null)

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const text:any = document.querySelector('#animation')

        const ctx = gsap.context(() => {
            gsap.set('#animation', {y: '100%'});
            gsap.set('#animation2', {y: '100%', display: 'none'});
            gsap.set('#animation3', {y: '100%', display: 'none'});

            gsap.timeline({
                scrollTrigger: {
                    trigger: '#bgSection',
                    start: 'top top',
                    markers: true,
                    pin: true,
                    scrub: 2,
                    end: '+=' + (section.current.offsetHeight * 2),
                }
            })
            .to('#bgSection', {backgroundColor: "#1966af"})
            .to('#animation', {y: '0%', ease: 'none', stagger: 1})
            .to('#bgSection', {backgroundColor: "#4319af"})
            .to('#animation', {y: '-100%', ease: 'none', stagger: 1})
            .to('#bgSection', {backgroundColor: '#000000'})
            .set('#animation', {display: 'none'})
            .set('#animation2', {display: 'inline-block'})

            .to('#bgSection', {backgroundColor: "#1966af"})
            .to('#animation2', {y: '0%', ease: 'none', stagger: 1})
            .to('#bgSection', {backgroundColor: "#4319af"})
            .to('#animation2', {y: '-100%', ease: 'none', stagger: 1})
            .to('#bgSection', {backgroundColor: '#000000'})
            .set('#animation2', {display: 'none'})
            .set('#animation3', {display: 'inline-block'})

            .to('#bgSection', {backgroundColor: "#1966af"})
            .to('#animation3', {y: '0%', ease: 'none', stagger: 1})
            .to('#bgSection', {backgroundColor: "#4319af"})
            .to('#animation3', {y: '-100%', ease: 'none', stagger: 1})
            .to('#bgSection', {backgroundColor: '#000000'})
            .set('#animation3', {display: 'none'})
        })

        return () => ctx.revert()

    }, [])

  return (
    <section id = 'bgSection' ref = {section}>
        <h1 id = 'bgTitle'>
            <span id='animation'>LET'S</span> <span id='animation'>CREATE</span>
            <span id='animation2'>SOMETHING</span> <span id='animation2'>INCREDIBLE</span>
            <span id='animation3'>TOGETHER</span>
        </h1>
        {/* <h1 id = 'bgTitle'><span id='animation'>CREATE</span></h1>
        <h1 id = 'bgTitle'><span id='animation'>SOMETHING</span></h1>
        <h1 id = 'bgTitle'><span id='animation'>INCREDIBLE</span></h1> */}
    <style jsx>{`
        section{
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 60px;
            font-family: 'monospace', sans-serif;
        }
        h1{
            width: auto;
            text-align: center;
            overflow: hidden;
            margin: 0;
        }
        span{
            display: inline-block;
        }
        #animation3{
            font-size: 200px;
        }
    `}</style>
    </section>
  )
}

export default index