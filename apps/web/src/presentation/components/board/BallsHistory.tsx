import React from 'react'
import Ball from './Ball'
import style from './BallsHistory.module.css'
export default function BallsHistory() {
  return (
    <div className={style.ballsHistory}>
      <div className={style.latestBall}>
        <Ball size={5}>1</Ball>
      </div>
      <div className={style.lastBalls}>
        {[...Array(3)].map((_, index) => {
          return (
              <Ball key={index} size={4}>{index}</Ball>
          )
        })}
      </div>
    </div>
  )
}
