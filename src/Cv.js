import React from 'react'
import res from "./photos/resume.pdf"
//<a href={res} download className='https://drive.google.com/file/d/1Bc9-18LoXVBN5ciyOFN3_0vkPNyA3WmI/embeded/drive_link'></a>

export const Cv = () => {
  return (
    <div className='h-[1000px]'>
      <iframe src="https://drive.google.com/file/d/1Bc9-18LoXVBN5ciyOFN3_0vkPNyA3WmI/embeded/drive_link" className='h-[1000px]' frameborder="0"></iframe>
    </div>
  )
}
