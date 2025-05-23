import { getTranslations } from "next-intl/server";
import style from "./page.module.css"
import Card from "@/presentation/components/ui/Card";
import CurrentGames from "@/development/components/currentGames";
import Image from "next/image";
import SessionPlayers from "@/presentation/components/waitingRoom/SessionPlayers";

type Props = { params: { sessionCode: string } };
export default async function JoinPage({ params }: Props) {
  const { sessionCode } = await params;
  
  const currentGame = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/game/${sessionCode}`, {
    method: 'GET',
    cache: 'no-store'
  }).then((res) => res.json());

  const t = await getTranslations('Waiting');

  let content;
  console.log(currentGame);

  if (currentGame.statusCode === 404) {
    content = (
      <div>
        <h2>{t('gameNotFound')}</h2>
      </div>
    );
  } else {
    content = (
      <>
        <h2 className={style.waitingForPlayers}>{t('waitingForPlayers')}</h2>
        <div className={style.gameCode}>
          <h3 className={style.gameCodeLabel}>{t('gameCodeLabel')}</h3>
          <h1 className={style.sessionCode}>{sessionCode}</h1>
        </div>
        <div className={style.playersList}>
          <SessionPlayers host={currentGame.host} players={Object.keys(currentGame.players)} />
        </div>
        <div className={style.qrCode}>
          <Image src={"/qr.png"} alt="QR Code" width={200} height={200} />
        </div>
      </>
    );
  }

  return (
    <div className={style.pageWrapper}>
      <CurrentGames />
      <Card size="large">
        {content}
      </Card>
    </div>
  );
}
