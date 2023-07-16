import { DoPick } from "./doPick";

describe('Dado um sorteio de amigo secreto', () => {
  test('Cada participante não sorteie o próprio nome', () => {
    const participants = ['Ana', 'Nini', 'Luna', 'Maria'];

    const pick = DoPick(participants);
    participants.forEach((participant) => {
      const secretyFriend = pick.get(participant);
      expect(secretyFriend).not.toEqual(participant);
    });
  });
});
