import style from "./page.module.css"
import Card from "@/presentation/components/ui/Card";
import CreateGameForm from "@/presentation/components/createGame/CreateGameForm";
import JoinGameForm from "@/presentation/components/joinGame/JoinGameForm";
import { getTranslations } from "next-intl/server";


export default async function Page() {
  const h = await getTranslations('Helpers');

  return (
    <div className={style.page}>
      <Card size="small">
        <CreateGameForm />
      </Card>

      <p className={style.separator}>- {h('Or').toUpperCase()} -</p>

      <Card size="small">
        <JoinGameForm />
      </Card>
    </div>
  );
}
