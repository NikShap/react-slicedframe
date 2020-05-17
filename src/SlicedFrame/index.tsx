import * as React from 'react';
import classNames from 'classnames';

import Props from './interface';
import useStyles from './useStyles';
import ImagePolygon from '../ImagePolygon';

const SlicedFrame = (props: Props) => {
  const {
    images,
    slices = '/',
    customClasses = { frame: '', image: '' },
    onImageClick,
  } = props;
  const classes = useStyles(props);
  const mergedClasses = {
    frame: classNames(customClasses.frame, classes.frame),
  };

  return (
    <div className={mergedClasses.frame}>
      {images.map((image, i) => {
        let imageSlices = slices;
        if (imageSlices === '/\\' && i % 2 !== 0) {
          imageSlices = '\\/';
        } else if (imageSlices === '\\/' && i % 2 !== 0) {
          imageSlices = '/\\';
        }

        return (
          <ImagePolygon
            key={i}
            slices={imageSlices}
            image={image}
            index={i}
            length={images.length}
            customClass={customClasses.image}
            onImageClick={onImageClick}
          />
        );
      })}
    </div>
  );
};

export default SlicedFrame;
