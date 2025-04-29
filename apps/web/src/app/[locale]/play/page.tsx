import style from "./page.module.css"
import Modal from "@/presentation/components/ui/Modal";
import CreateSessionForm from "@/presentation/components/CreateSession/CreateSessionForm";


export default async function Page() {
  return (
    <div className={style.playPage}>
      <Modal isOpen={true} size="small">
        <CreateSessionForm />
      </Modal>
    </div>
  );
}
