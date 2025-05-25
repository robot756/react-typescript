import React, { useState } from 'react'
import { FC } from 'react';

export enum CardVariant {
  outlined= 'outlined',
  primary= 'primary',
}

interface CardProps {
  width: string;
  height: string;
  children?: React.ReactNode;
  variant: CardVariant;
}

const MyCard: FC<CardProps> = ({width, height, children, variant}) => {
  const [state, setState] = useState(0);
  return (
    <div style={{
        width,
        height,
        border: variant === 'outlined' ? '2px solid red' : 'none',
        background: variant === 'primary' ? 'gray' : 'none'
    }}
    >
      {children}
    </div>
  )
}

export default MyCard