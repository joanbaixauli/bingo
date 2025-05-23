import { getTranslations } from 'next-intl/server';
import React from 'react'
type Props = {
  host: string;
  players: string[];
}

export default async function SessionPlayers({ host, players }: Props) {
  const t = await getTranslations('Waiting');

  return (
    players.length > 0 ?
      <ul>
        {players.map((player: { name: string, host: boolean }) => (
          <li key={player.name} style={player.host ? { fontWeight: 'bold' } : {}}>
            {player.name}
          </li>
        ))}
      </ul>
      : <p>{t("noPlayersYet")}</p>
  )
}
