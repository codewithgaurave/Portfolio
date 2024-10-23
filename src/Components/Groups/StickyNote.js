import React from 'react'

export default function StickyNote({tape, bgVar,height,elements,rotate,top}) {
    const stick = {

        background:`var(${bgVar})`,
        transform:`rotate(${rotate}deg)`,
        height:`${height}px !important,`
      }
    const stickImg = {
      top:`${top}px`
    }
  return (
    <div className='StickyNote' style={stick}>
        <img src={tape} style={stickImg} alt="tape"  />
        {elements}
    </div>
  )
}
