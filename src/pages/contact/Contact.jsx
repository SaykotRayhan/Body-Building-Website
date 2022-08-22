import React from 'react'
import './contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'

const Contact = () => {
  return (
    <>
      <Header title='Get In Touch' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        praesentium facere culpa dolorum voluptatibus ex vitae corrupti
        assumenda sint id?
      </Header>
      <section className='contact'>
        <div className='container contact__container'>
          <div className='contact__wrapper'>
            <a
              href='mailto:saykotrayhan199@gmail.com'
              target='_blank'
              rel='noreffer noopener'
            >
              <MdEmail />
            </a>
            <a href='#' target='_blank' rel='noreffer noopener'>
              <BsMessenger />
            </a>
            <a href='#' target='_blank' rel='noreffer noopener'>
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
