import React, { useRef, useEffect, useState } from 'react'
import { isBrowser } from 'is-in-browser'
import mapboxgl from '!mapbox-gl/dist/mapbox-gl.js'

const MAPBOX_TOKEN = process.env.GATSBY_MAPBOX_API_KEY
const MAPBOX_MAP_STYLE =
  process.env.GATSBY_MAPBOX_MAP_STYLE ||
  'mapbox://styles/lukethedev/ckn11i6n91npn17n6xgari5w0'

export const Map = () => {
  const mapContainerRef = useRef(null)

  const [map, setMap] = useState(null)

  useEffect(() => {
    if (!MAPBOX_TOKEN) {
      console.error(`No 'MAPBOX_TOKEN' provided`)
      return null
    }

    if (!isBrowser) {
      console.error('No window here')
      return null
    }

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: MAPBOX_TOKEN,
      style: MAPBOX_MAP_STYLE,
      center: [149.12746798202738, -35.311222512692076],
      zoom: 12.4,
      pitch: 0,
      interactive: true,
      hash: true,
    })
    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    setMap(map)

    return () => map.remove()
  }, [])

  return (
    <div className='flex' style={{ flex: '1 0' }}>
      <div
        ref={mapContainerRef}
        className='w-full h-screen'
        style={{ flex: '1 0' }}
      />
    </div>
  )
}
