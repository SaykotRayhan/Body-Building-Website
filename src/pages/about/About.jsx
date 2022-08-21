import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
      <Header title='About Us' image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam rem a
        aperiam fuga laboriosam adipisci optio, soluta obcaecati dignissimos
        delectus?
      </Header>
      <section className='about__story'>
        <div className='container about__story-container'>
          <div className='about__section-image'>
            <img src={StoryImage} alt='' />
          </div>
          <div className='about__section-content'>
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              velit maxime tenetur autem omnis recusandae, delectus magnam totam
              voluptatibus, reiciendis nemo iure magni sint excepturi.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              corrupti delectus incidunt dolorum, nisi blanditiis repellendus
              quidem tempora! Numquam
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              pariatur iusto sint. Facere repudiandae molestias
            </p>
          </div>
        </div>
      </section>
      <section className='about__vision'>
        <div className='container about__vision-container'>
          <div className='about__section-content'>
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              velit maxime tenetur autem omnis recusandae, delectus magnam totam
              voluptatibus, reiciendis nemo iure magni sint excepturi. Sunt
              eaque officia nostrum ut ducimus
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              corrupti delectus incidunt dolorum, nisi blanditiis repellendus
              quidem tempora!
            </p>
          </div>
          <div className='about__section-image'>
            <img src={VisionImage} alt='' />
          </div>
        </div>
      </section>
      <section className='about__mission'>
        <div className='container about__mission-container'>
          <div className='about__section-image'>
            <img src={MissionImage} alt='' />
          </div>
          <div className='about__section-content'>
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              velit maxime tenetur autem omnis recusandae, delectus magnam totam
              voluptatibus, reiciendis nemo iure magni sint excepturi.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              corrupti delectus incidunt dolorum,
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              pariatur iusto sint.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
