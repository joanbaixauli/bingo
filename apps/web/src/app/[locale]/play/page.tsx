import PlayForm from "@/presentation/components/play/PlayForm";
import style from "./page.module.css"
import Modal from "@/presentation/components/ui/Modal";

export default function PlayPage() {
  return (
    <div className={style.playPage}>
      <Modal isOpen={true} size="large">
        <PlayForm />
      </Modal>
    </div>
  );
}
