import React from 'react';

interface SelectHandler {
  (index?: number, image?: string): void;
}

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  template: '\\' | '/' | '/\\' | '\\/';
  vertical?: boolean;
  customClass?: string;
  index: number;
  length: number;
  onImageClick?: SelectHandler;
  onImageHover?: SelectHandler;
  zoomOnHover?: boolean;
};

export interface Coord {
  x: number;
  y: number;
};

