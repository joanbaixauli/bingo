export default async function CurrentGames() {
  const games = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/game`, {
    method: 'GET',
    cache: 'no-store',
  }).then((res) => res.json());

  return (
    <div style={{ background: 'green', display: 'none' }}>
      {games.length > 0 ?
        <>
          Current games:
          <ul>
            {games.map((game: string) => (
              <li key={game}>
                {game}
              </li>
            ))}
          </ul>
        </>
        : <>No games available</>}
    </div>
  )
}
