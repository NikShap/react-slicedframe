import React from 'react';

interface CustomClasses {
  frame: string;
  image: string;
}

export default interface Props extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
  slices?: '\\' | '/' | '/\\' | '\\/';
  vertical?: boolean;
  customClasses?: CustomClasses;
  width: string | number;
  height: string | number;
  onImageClick?: (index?: number, image?: string) => void;
};
