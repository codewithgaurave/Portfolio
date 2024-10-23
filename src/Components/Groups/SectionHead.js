import React from 'react'

export default function SectionHead({img1,img2,text}) {
  return (
    <span className="headText my-2">
          {img1?<><img src={img1} alt="butterfly" /></>:<></>}
            
            {text}
            {img2?<><img src={img2} alt="butterfly" /></>:<></>}
            </span>
  )
}
