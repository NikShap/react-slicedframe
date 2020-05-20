import React from 'react';

interface CustomClasses {
  frame: string;
  image: string;
}

interface SelectHandler {
  (index?: number, image?: string): void;
}

export default interface Props extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
  template?: '\\' | '/' | '/\\' | '\\/';
  vertical?: boolean;
  customClasses?: CustomClasses;
  width: string | number;
  height: string | number;
  onImageClick?: SelectHandler;
  onImageHover?: SelectHandler;
  zoomOnHover?: boolean;
};
