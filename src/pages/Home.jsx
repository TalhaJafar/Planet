import { useRef, useEffect, useState } from "react";
import './index.css'
import Parallax from 'parallax-js'
import gsap from 'gsap'

import background from '../images/background.png'
import rock from '../images/rock.png'
import earth from '../images/earth.png'
import mid from '../images/mid.png'
import foreground from '../images/foreground.png'
import mercury from '../images/mercury.png'
import venus from '../images/venus.png'
import earth1 from '../images/earth1.png'
import mars from '../images/mars.png'
import jupiter from '../images/jupiter.png'
import saturn from '../images/saturn.png'
import  uranus from '../images/uranus.png'
import neptune from '../images/neptune.png'

const Home = () => {
    let planets =[
        { title:"Mercury", description:" This simulated view of our solar system at the top of this page (and below) runs on real data. The position of the planets, moons and spacecraft are shown where they are right now. This digital orrery (a model of the solar system) runs on a light, mobile-mobile friendly version", img: mercury},
        { title:"Venus", description:"This simulated view of our solar system at the top of this page (and below) runs on real data. The position of the planets, moons and spacecraft are shown where they are right now. This digital orrery (a model of the solar system) runs on a light, mobile-mobile friendly version ", img: venus},
        { title:"Earth", description:" This simulated view of our solar system at the top of this page (and below) runs on real data. The position of the planets, moons and spacecraft are shown where they are right now. This digital orrery (a model of the solar system) runs on a light, mobile-mobile friendly version", img: earth1},
        { title:"Mars", description:"This simulated view of our solar system at the top of this page (and below) runs on real data. The position of the planets, moons and spacecraft are shown where they are right now. This digital orrery (a model of the solar system) runs on a light, mobile-mobile friendly version", img: mars},
        { title:"Jupiter", description:"This simulated view of our solar system at the top of this page (and below) runs on real data. The position of the planets, moons and spacecraft are shown where they are right now. This digital orrery (a model of the solar system) runs on a light, mobile-mobile friendly version", img: jupiter},
        { title:"Saturn", description:"This simulated view of our solar system at the top of this page (and below) runs on real data. The position of the planets, moons and spacecraft are shown where they are right now. This digital orrery (a model of the solar system) runs on a light, mobile-mobile friendly version", img: saturn},
        { title:"Uranus", description:"This simulated view of our solar system at the top of this page (and below) runs on real data. The position of the planets, moons and spacecraft are shown where they are right now. This digital orrery (a model of the solar system) runs on a light, mobile-mobile friendly version", img: uranus},
        { title:"Neptune", description:"This simulated view of our solar system at the top of this page (and below) runs on real data. The position of the planets, moons and spacecraft are shown where they are right now. This digital orrery (a model of the solar system) runs on a light, mobile-mobile friendly version", img: neptune},
    ]

    const [isSelected, setIsSelected] = useState(0)
    const scene = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(scene.current, {
          relativeInput: true,
          hoverOnly: true
        })
    
        parallaxInstance.enable();
    
        return () => parallaxInstance.disable();
    }, [])

    // 
    useEffect(()=>{
        gsap.from('.planetsImg',{duration:2 , opacity: 1 , x:-100 , ease:'elastic(1 , 0.4)'})
        gsap.from('.planetDescription',{duration:2 , opacity: 1 , y:50 , ease:'elastic(1 , 0.4)'})
        gsap.from('.selected_planet',{duration:2 , opacity: 1, ease:'power2.in'})
        // gsap.to('.non_selected_planet',{opacity: 0.5})
    },[isSelected])

  return (
    <div className="main">
        <section id="sectionOne" className="sectionOne">
            <div ref={scene}>
                <div data-depth="0.1" class="bg">
                    <img src={background} alt="" />
                </div>
                <div data-depth="0.2" class="rock1">
                    <img src={rock} alt="" />
                </div>
                <div data-depth="1" class="earth">
                    <img src={earth} alt="" />
                </div>
                <div data-depth="0.1" class="text">
                    <h1>PLANETS</h1>
                </div>
                <div data-depth="0.4" class="mid">
                    <img src={mid} alt="" />
                </div>
                <div data-depth="0.1" class="fore">
                    <img src={foreground} alt="" />
                </div>
            </div>
            
        </section>

        <section id="sectionTwo" className="sectionTwo">
            <div className="planetDetails">
                    <div className="planetsImg">
                        <img src={planets[isSelected].img} alt=""/>
                    </div>
                    <div className="planetDescription">
                        <h3 className="planet_number"> 0{isSelected + 1}</h3>
                        <h1 className="planet_name">{planets[isSelected].title}</h1>
                        <p className="planet_desc">{planets[isSelected].description}</p>
                    </div>     
            </div>
            

            <div className="planetLinks">
                {
                    planets.map((p,index)=>{
                        return (
                            <div className="link" key={index}>
                                <div className={isSelected === index ? "selected_planet" : "non_selected_planet"} onClick={()=>{setIsSelected(index)}}>{p.title} </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </div>
  );
}

export default Home;
