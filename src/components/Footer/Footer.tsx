import { useNavigate } from "react-router-dom";
import styles from './Footer.module.scss';
import { useListParticipants } from "../../state/hooks/useListParticipants"
import { usePick } from "../../state/hooks/usePick";

const Footer = () => {

  const participants = useListParticipants()
  const goTo = useNavigate()
  const pick = usePick()

  const start = () => {
    goTo('/sort')
    pick()
  }

  return (
    <footer className={styles.footerConfig}>
      <button 
      className={styles.button}
      disabled={participants.length < 3}
      onClick={start}
      > Iniciar brincadeira </button>
      <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>
  )
}

export default Footer
