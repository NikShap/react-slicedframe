import { createUseStyles } from 'react-jss';
import Props from './interface';

const getWidthHeight = (type: string, defaultValue: string | number) => (
  props: Props
) => {
  if (/^\d*$/gm.test(props[type])) {
    return `${props[type]}px`;
  }
  if (!props[type]) return defaultValue;
  return props[type];
};

const useStyles = createUseStyles({
  frame: {
    display: 'flex',
    flexDirection: (props: Props) => (props.vertical ? 'column' : 'row'),
    position: 'relative',
    width: getWidthHeight('width', 600),
    height: getWidthHeight('height', 300),
    overflow: 'hidden',
  },
});

export default useStyles;
