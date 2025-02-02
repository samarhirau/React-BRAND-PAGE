import React from 'react'
import Navbar from '../components/Navbar'
import Text from '../components/Text'

function Home() {
  return (
    <div className='bg-[url(./images/bg-Image.png)] bg-cover bg-center h-screen'>
      <Navbar />
      <Text />
    </div>
  )
}

export default Home
