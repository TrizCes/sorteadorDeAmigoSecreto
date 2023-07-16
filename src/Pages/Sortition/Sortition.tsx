import React, { useState } from "react"
import { useListParticipants } from "../../state/hooks/useListParticipants"
import { usePickResult } from "../../state/hooks/usePickResult"

const Sortition = ()=>{

  const participants = useListParticipants()

  const [participantNow, setParticipantNow] = useState('')
  const [secretSanta, setSecretSanta] = useState('')

  const result = usePickResult();

  const pick = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    if(result.has(participantNow)){
      const participant = result.get(participantNow)
      if(participant !== undefined){
      setSecretSanta(participant)
      }
    }
  }

  return (
    <section>
      <form onSubmit={pick}>
        <select 
        required
        name='participantNow' 
        id='participantNow' 
        placeholder="Select your name"
        value={participantNow}
        onChange={event => setParticipantNow(event.target.value)}>
          {participants.map(participant=> <option key={participant}>{participant}</option>)}
        </select>
        <button>Sortear</button>
      </form>
      {secretSanta && <p role="alert">{secretSanta}</p>}
    </section>
  )

}

export default Sortition