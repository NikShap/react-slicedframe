import { createUseStyles } from 'react-jss';
import { Props, Coord } from './interface';

const getPoint = ({ x, y }: Coord) => `${x}% ${y}%`;

const slicesTemplates = {
  '/': {
    top: ['center', 'right'],
    bottom: ['left', 'center'],
  },
  '\\': {
    top: ['left', 'center'],
    bottom: ['center', 'right'],
  },
  '\\/': {
    top: ['left', 'right'],
    bottom: ['center', 'center'],
  },
  '/\\': {
    top: ['center', 'center'],
    bottom: ['left', 'right'],
  },
};

const getPolygon = (props: Props) => {
  const { length, template } = props;
  const distance = 100 / (length + 1);
  const center = 50;
  const left = center - distance;
  const right = center + distance;
  const points = {
    top: {
      left: getPoint({ x: left, y: 0 }),
      center: getPoint({ x: center, y: 0 }),
      right: getPoint({ x: right, y: 0 }),
    },
    bottom: {
      left: getPoint({ x: left, y: 100 }),
      center: getPoint({ x: center, y: 100 }),
      right: getPoint({ x: right, y: 100 }),
    },
  };

  const templatePoints = slicesTemplates[template];

  const polygonPoints =
    points.top[templatePoints.top[0]] +
    ', ' +
    points.top[templatePoints.top[1]] +
    ', ' +
    points.bottom[templatePoints.bottom[1]] +
    ', ' +
    points.bottom[templatePoints.bottom[0]];

  return `polygon(${polygonPoints})`;
};

const getLeftPosition = (props: Props) => {
  const { length, index } = props;
  const distance = 100 / (length + 1);
  const left = distance * index - (distance * (length - 1)) / 2;

  return `${left}%`;
};

const useStyles = createUseStyles({
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: getLeftPosition,
    cursor: 'pointer',
    transition: '200ms',
    backgroundImage: ({ image }: Props) => `url(${image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    'clip-path': getPolygon,

    '&:hover': {
      transform: ({ zoomOnHover }: Props) => {
        return zoomOnHover ? 'scale(1.02)' : 'none';
      },
      zIndex: '10',
    }
  }
});

export default useStyles;
