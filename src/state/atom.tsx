import { atom } from "recoil";

export const listPeopleState = atom<string[]>({
  key: 'listPeopleState',
  default: []
});

export const errorState = atom<string>({
  key: 'errorState',
  default: ''
})

export const resultSecretSanta = atom<Map<string, string>>({
  key: 'resultSecretSanta',
  default: new Map()
})