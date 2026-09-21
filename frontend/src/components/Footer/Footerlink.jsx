import React from 'react'

const Footerlink = ({ links }) => {
  return (
    <>
    {links.map((link , index) => {
      return (
        <li
        key={index}
        className='cursor-pointer transition-all duration-300 hover:translate-x-[2px]'
        >
          <a href={link.link}>{link.name}</a>
        </li>
      )
    })}
    </>
  )
}

export default Footerlink
