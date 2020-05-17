import React from 'react'

import SlicedFrame from 'slicedframe'
import 'slicedframe/dist/index.css'

const App = () => {
  const images = [
    'https://avatars.mds.yandex.net/get-pdb/405945/295e1cc9-8bfc-493e-af25-4ca1bbaf14d2/s1200?webp=false',
    'https://w-dog.ru/wallpapers/11/2/492347194319040/yaponiya-tokio-utro-solnce-luchi-vosxod-park-prud-derevya-cvety-muskari-sinie-tyulpany-raznocvetnye.jpg',
    'https://avatars.mds.yandex.net/get-pdb/225396/b42d7dc3-e39f-44b1-bdbe-d222f860e426/s1200?webp=false',
    'https://avatars.mds.yandex.net/get-pdb/1866711/59aca736-3c0f-4711-85d1-dcc8ed514636/s1200?webp=false',
  ]

  return (
    <SlicedFrame
      images={images}
      slices="/"
      className="test"
    />
  )
}

export default App
