import * as React from 'react'

import '../index.css'
import { Map } from '../components/map'

// style
const mainStyle = {
  height: '100vh',
  display: 'flex',
  backgroundColor: '#030303',
}

// markup
const IndexPage = () => {
  return (
    <main style={mainStyle}>
      <title>Home Page</title>
      <Map />
    </main>
  )
}

export default IndexPage
