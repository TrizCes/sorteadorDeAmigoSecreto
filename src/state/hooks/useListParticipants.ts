import { listPeopleState } from "../atom";
import { useRecoilValue } from "recoil"

export const useListParticipants = () => {
  return useRecoilValue(listPeopleState)
}