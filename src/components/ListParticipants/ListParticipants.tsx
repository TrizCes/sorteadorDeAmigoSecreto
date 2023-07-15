import { useListParticipants } from "../../state/hooks/useListParticipants";

const ListParticipants = () => {
  const participants: string[] = useListParticipants();
  return (
    <ul>
      {participants.map(participant=> 
        <li key={participant}>{participant}</li>
      )}
    </ul>
  )
}

export default ListParticipants