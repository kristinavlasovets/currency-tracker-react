import 'maplibre-gl/dist/maplibre-gl.css'

import React, { FC } from 'react'

import { useMap } from '../../hooks/useMap'
import { Map, Wrapper } from './styles'
import { MapComponentProps } from './types'

const MapComponent: FC<MapComponentProps> = ({ searchCode }) => {
  const mapContainerRef = useMap(searchCode)

  return (
    <Wrapper>
      <Map ref={mapContainerRef} />
    </Wrapper>
  )
}

export default MapComponent
