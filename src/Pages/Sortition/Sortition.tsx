import React, { useState } from 'react';
import { useListParticipants } from '../../state/hooks/useListParticipants';
import { usePickResult } from '../../state/hooks/usePickResult';
import styles from './Sortition.module.scss';
import Card from '../../components/Card';

const Sortition = () => {
  const participants = useListParticipants();

  const [participantNow, setParticipantNow] = useState('');
  const [secretSanta, setSecretSanta] = useState('');

  const result = usePickResult();

  const pick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (result.has(participantNow)) {
      const participant = result.get(participantNow);
      if (participant !== undefined) {
        setSecretSanta(participant);
      }
    }
  };

  return (
    <Card>
      <section className={styles.sortition}>
        <form onSubmit={pick}>
          <select
            className={styles.selection}
            required
            name="participantNow"
            id="participantNow"
            placeholder="Select your name"
            value={participantNow}
            onChange={(event) => setParticipantNow(event.target.value)}
          >
            <option>Selecione seu nome</option>
            {participants.map((participant) => (
              <option key={participant}>{participant}</option>
            ))}
          </select>
          <p className={styles.warning}>Click para descobrir seu amigo secreto</p>
          <button className={styles.buttonPick}>Sortear</button>
        </form>
        {secretSanta && (
          <p className={styles.result} role="alert">
            {secretSanta}
          </p>
        )}
      </section>
    </Card>
  );
};

export default Sortition;
