import { errorState, listPeopleState } from "../atom";
import { useSetRecoilState, useRecoilValue } from "recoil";

export const useAddPerson = () => {
  const setList = useSetRecoilState(listPeopleState)
  const listFull = useRecoilValue(listPeopleState)
  const setError = useSetRecoilState(errorState)
  return (namePerson: string) => {
    if(listFull.includes(namePerson)){
      setError('Nomes duplicados não são aceitos.')
      setTimeout(() => {
        setError("")
      }, 5000)
      return
    }
    return setList(list => [...list, namePerson])
  }
};
