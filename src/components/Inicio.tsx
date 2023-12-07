// import React from 'react'
// import SidebarMobile from './mobile/SidebarMobile'
import SidebarDesktop from './mobile/SidebarDesktop';

const Inicio = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  console.log('uawe', userAgent)
  return (
    <div>{userAgent.includes('mobile') ? <h1>Aca</h1> : <SidebarDesktop/>}</div>
  )
}

export default Inicio