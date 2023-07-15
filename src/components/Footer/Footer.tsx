import { useNavigate } from "react-router-dom"
import { useListParticipants } from "../../state/hooks/useListParticipants"

const Footer = () => {

  const participants = useListParticipants()
  const goTo = useNavigate()
  const start = () => {
    goTo('/sort')
  }
  
  return (
    <footer>
      <button 
      disabled={participants.length < 3}
      onClick={start}
      > Iniciar brincadeira </button>
    </footer>
  )
}

export default Footer
