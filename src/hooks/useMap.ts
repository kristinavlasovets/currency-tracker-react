import { Map, Marker } from 'maplibre-gl'
import { useEffect, useRef } from 'react'

export const useMap = (searchCode: string) => {
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const map = new Map({
      container: mapContainerRef.current as HTMLDivElement,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${process.env.REACT_APP_MAPTILER_API_KEY}`,
      center: [27.5589176, 53.8977799],
      zoom: 13,
    })

    if (searchCode === 'BYN') {
      new Marker({ color: '#185CFF' })
        .setLngLat([27.5451778, 53.9017282])
        .addTo(map)
      new Marker({ color: '#185CFF' })
        .setLngLat([27.5160956, 53.8962595])
        .addTo(map)
      new Marker({ color: '#185CFF' })
        .setLngLat([27.5595258, 53.9000003])
        .addTo(map)
    }
    if (searchCode === 'USD') {
      new Marker({ color: '#37ff18' })
        .setLngLat([27.5451778, 53.9017282])
        .addTo(map)
      new Marker({ color: '#37ff18' })
        .setLngLat([27.5160956, 53.8962595])
        .addTo(map)
      new Marker({ color: '#37ff18' })
        .setLngLat([27.5595258, 53.9000003])
        .addTo(map)
    }
    if (searchCode === 'ARS') {
      new Marker({ color: '#37ff18' })
        .setLngLat([27.5451778, 53.9017282])
        .addTo(map)
      new Marker({ color: '#37ff18' })
        .setLngLat([27.5160956, 53.8962595])
        .addTo(map)
    }
    if (searchCode === 'AUD') {
      new Marker({ color: '#37ff18' })
        .setLngLat([27.5451778, 53.9017282])
        .addTo(map)
      new Marker({ color: '#37ff18' })
        .setLngLat([27.5160956, 53.8962595])
        .addTo(map)
    }
    if (searchCode === 'JPY') {
      new Marker({ color: '#37ff18' })
        .setLngLat([27.5595258, 53.9000003])
        .addTo(map)
    }
    if (searchCode === 'CAD') {
      new Marker({ color: '#37ff18' })
        .setLngLat([27.5451778, 53.9017282])
        .addTo(map)
      new Marker({ color: '#37ff18' })
        .setLngLat([27.5160956, 53.8962595])
        .addTo(map)
      new Marker({ color: '#37ff18' })
        .setLngLat([27.5595258, 53.9000003])
        .addTo(map)
    }
    if (searchCode === 'CNY') {
      new Marker({ color: '#37ff18' })
        .setLngLat([27.5160956, 53.8962595])
        .addTo(map)
    }
    if (searchCode === 'EUR') {
      new Marker({ color: '#37ff18' })
        .setLngLat([27.5160956, 53.8962595])
        .addTo(map)
    }

    return () => {
      map.remove()
    }
  }, [searchCode])

  return mapContainerRef
}
