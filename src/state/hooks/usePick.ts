import { useListParticipants } from "./useListParticipants"
import { useSetRecoilState } from "recoil";
import { resultSecretSanta } from "../atom";
import { DoPick } from "../../Pages/Sortition/helpers/doPick";

export const usePick = () => {

  const participants = useListParticipants();
  const setResult = useSetRecoilState(resultSecretSanta);

  return () => {

    setResult(DoPick(participants));

  }
}
