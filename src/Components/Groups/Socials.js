import React from 'react'

import linkedin from '../SVGs/Linkedin.svg'
import instagram from '../SVGs/Instagram.svg'
import github from '../SVGs/Github.svg'
import facebook from '../SVGs/Facebook.svg'
import { Link } from 'react-router-dom'

export default function Socials() {
  return (
    <div className='Socials'>
        <ul >
            <li><Link to={"https://github.com/codewithgaurave"} ><img src={instagram} alt="instagram" /></Link></li>
            <li><Link to={"https://www.linkedin.com/in/gaurav-gupta-3a1256286/"} ><img src={linkedin} alt="linkedin" /></Link></li>
            <li><Link to={"https://github.com/codewithgaurave"} ><img src={github} alt="github" /></Link></li>
            <li><Link to={"https://github.com/codewithgaurave"} ><img src={facebook} alt="facebook" /></Link></li>
        </ul>
    </div>
  )
}
