import React from 'react';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  slices: '\\' | '/' | '/\\' | '\\/';
  vertical?: boolean;
  customClass?: string;
  index: number;
  length: number;
  onImageClick?: (index?: number, image?: string) => void;
};

export interface Coord {
  x: number;
  y: number;
};

