import { useRecoilValue } from "recoil"
import { resultSecretSanta } from "../atom"

export const usePickResult = () => {
  return useRecoilValue(resultSecretSanta)
}
