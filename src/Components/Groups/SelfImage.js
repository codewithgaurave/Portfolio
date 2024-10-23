import React from 'react'
import circleTape from "../SVGs/circle-tape.svg";
import gauravGolden from "../SVGs/gaurav-golden.svg";

export default function SelfImage() {
  return (
    <div className='selfImage mt-5  '>
        <img src={circleTape} alt="circleTape" />
        <img src={gauravGolden} alt="gaurav" />
    </div>
  )
}
