import BallsHistory from "@/presentation/components/board/BallsHistory";
import Board from "@/presentation/components/board/Board";
import style from "./page.module.css"

export default function PlayPage() {
  return (
    <div className={style.playPage}>
      <BallsHistory />
      <Board />
    </div>
  );
}
