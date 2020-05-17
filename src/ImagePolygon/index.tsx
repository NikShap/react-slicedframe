import * as React from 'react';
import classNames from 'classnames';

import { Props } from './interface';
import useStyles from './useStyles';

const ImagePolygon = (props: Props) => {
  const classes = useStyles(props);
  const mergedClasses = classNames(props.customClass, classes.image);
  const handleClick = React.useCallback(() => {
    if (typeof props.onImageClick === 'function') {
      props.onImageClick(props.index, props.image);
    }
  }, [props.index, props.image, props.onImageClick]);

  return <div className={mergedClasses} onClick={handleClick} />;
};

export default ImagePolygon;
