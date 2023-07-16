import { useListParticipants } from "../../state/hooks/useListParticipants";
import style from './ListParticipants.module.scss';

const ListParticipants = () => {
  const participants: string[] = useListParticipants();
  return (
    <ul className={style.list}>
      {participants.map(participant=> 
        <li key={participant}>{participant}</li>
      )}
    </ul>
  )
}

export default ListParticipants