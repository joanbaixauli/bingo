import { redirect } from "next/navigation";
import { CreateGameSchema } from "./createGameSchema";

interface CreateGamePayload {
  // hostId: string;
  hostName?: string;
  cardsNumber?: number;
}

export async function createGameAction(formData: FormData) {
  const raw = Object.fromEntries(formData.entries());
  const parsed = CreateGameSchema.safeParse(raw);
  if (!parsed.success) {
    console.error('Validation error:', parsed.error);
    return;
  }
  const data = await createGame(parsed.data);
  // TODO: hostId retrieval and storage in context for later host-only actions and authentication at the backend
  debugger;
  redirect(`/wait/${data.code}`);
}

export async function createGame(payload: CreateGamePayload) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/game/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error('Failed to create game');

  return res.json();
}