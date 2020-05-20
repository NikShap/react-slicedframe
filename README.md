![](example/public/demo.gif)

# slicedframe

> Component for showing set of sliced images

<!-- [![NPM](https://img.shields.io/npm/v/slicedframe.svg)](https://www.npmjs.com/package/slicedframe) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) -->

## Install

```bash
npm install --save slicedframe
```

## Usage

```tsx
import React, { Component } from 'react'

import SlicedFrame from 'slicedframe'

const images = [
  // set of images
]

const Example = () => {
  return (
    <SlicedFrame
      images={images}
      template="/"
      width={600},
      height={280},
    />
  )
}
```

<!-- ## License

MIT © [NikShap](https://github.com/NikShap) -->
