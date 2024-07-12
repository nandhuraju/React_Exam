import React from 'react'
// import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SearchBookings from '../components/SearchBookings'
// import CourseCards from '../components/CourseCards'
// import CourseButton from '../components/CourseButton'

const Homepage = () => {
  return (
    <>
        
        <Hero/>
        {/* <CourseCards isHome= {true}/>
        <CourseButton/> */}
        <SearchBookings/>
    </>
  )
}

export default Homepage