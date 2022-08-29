import React from 'react'

export default function Header() {
  return (
    <nav>
        <div className="logo">Apni Dukan</div>
        <ul>
           <a href="/"><li>Home</li></a> 
          <a href="/"><li>About</li></a>  
           <a href="/"><li>Contact Us</li>
</a>         </ul>
        <div className="search">
        <input type="search" />
        <input type="button" value="Search" />
       </div>
    </nav>
  )
}
