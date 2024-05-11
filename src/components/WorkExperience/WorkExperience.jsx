import React, { useRef } from 'react'
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick/lib/slider'

const WorkExperience = () => {
const sliderRef = useRef()
    const settings = {
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:2,
        slidesToScroll:1,
        arrows:true,
        responsive:[
            {
                breakpoint:769,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:1,
                }
            }
            ]
        
    }
  return (
   <section className="experience-container">
     <h5>Work Experience</h5>
     <div className="experience-content">


        <div className="arrow-right">
            <span class="material-symbols-outlined">chevron_right</span>
        </div>

        <div className="arrow-left">
            <span class="material-symbols-outlined">chevron_left</span>
        </div>


        <Slider ref={sliderRef} {...settings}>
        {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
            ))}
        </Slider>
        </div>
   </section>
  )
}

export default WorkExperience