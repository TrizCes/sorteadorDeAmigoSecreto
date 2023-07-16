import styles  from './Form.module.scss';
import { useRef, useState } from 'react';
import { useAddPerson } from '../../state/hooks/useAddPerson';
import { useErrorMessage } from '../../state/hooks/useErrorMessage';
import personAddIcon from './person_add.svg';

const Form = () => {

  const [name, setName] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const addList = useAddPerson()

  const addPerson = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addList(name)
    setName('')
    inputRef.current?.focus()
  };

  const messageError = useErrorMessage();

  return (
    <form  
    className={styles.formGroup}
    onSubmit={addPerson}>
      <div className={styles.inputGroup}>
        <img className={styles.inputImg} src={personAddIcon} alt="ícone pessoa" />
        <input 
          ref={inputRef}
          value={name}
          className={styles.input} 
          onChange={event => setName(event.target.value)}
          type="text" 
          placeholder="Insira os nomes dos participantes" />
      </div>
      <button className={styles.button} disabled={!name}>Adicionar</button>
      {messageError && <p role='alert'>{messageError}</p>}
    </form>
  )
}

export default Form;