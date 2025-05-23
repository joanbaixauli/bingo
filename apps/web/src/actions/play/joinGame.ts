import { redirect } from "next/navigation";
import { JoinGameSchema } from "shared-types";

interface JoinGamePayload {
  // hostId: string;
  playerName?: string;
  sessionCode?: string;
}

export async function joinGameAction(formData: FormData) {
  const raw = Object.fromEntries(formData.entries());
  const parsed = JoinGameSchema.safeParse(raw);
  if (!parsed.success) {
    console.error('Validation error:', parsed.error);
    return;
  }
  const data = await joinGame(parsed.data);
  debugger;
  // TODO: hostId retrieval and storage in context for later host-only actions and authentication at the backend
  redirect(`/wait/${data.code}`);
}

export async function joinGame(payload: JoinGamePayload) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/game/join`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res;
    })
    .catch((err) => {
      console.error('Error joining game:', err);
      throw err;
    });

  if (!res.ok) throw new Error('Failed to join game');

  return res.json();
}