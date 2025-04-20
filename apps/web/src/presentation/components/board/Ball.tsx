import { PropsWithChildren } from "react";
import style from './Ball.module.css'

type BallProps = {
  onGlow?: boolean;
  size?: number;
} & React.HTMLAttributes<HTMLDivElement>;	

export default function Ball ({ onGlow, size=3, children }: PropsWithChildren<BallProps>) {

const textSize = size * 0.75;
  return (
    <div 
      className={`${style.ball} ${onGlow ? style.glow : ''}`}
      style={{ fontSize: `${textSize}rem`, width: `${size}rem`, height: `${size}rem` }}
    >
      {children}
    </div>
  );

}