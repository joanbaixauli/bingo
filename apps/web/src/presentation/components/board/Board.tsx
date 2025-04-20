import Ball from './Ball';
import style from './board.module.css';

const Board = () => {
  const game = 90;
  const balls = Array.from({ length: game }, (_, i) => i + 1);

  return (
    <div className={style.board}>
      {balls.map((ball) => {
        return (
          <Ball
            key={ball}
            onGlow={false}
          >
            {ball}
          </Ball>
        );
      })}
    </div>
  )
}

export default Board