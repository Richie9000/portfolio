import React from 'react'
import { Canvas } from '@react-three/fiber'

import ContactForm from './ContactForm'
import Stars from '../Home/Stars'

const ContactMarkup = () => {
  return (
    <div className="Container" >
      <ContactForm />  
      <Canvas camera={{ position: [0, 0, 1] }} style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%'  } }>
        <Stars />
      </Canvas>
        </div>
  )
}

export default ContactMarkup