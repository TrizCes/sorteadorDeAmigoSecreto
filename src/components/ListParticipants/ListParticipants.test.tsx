import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import ListParticipants from "./ListParticipants"
import { useListParticipants } from "../../state/hooks/useListParticipants"

jest.mock('../../state/hooks/useListParticipants.ts', () =>{
  return {
    useListParticipants: jest.fn()
  }
})

describe('Comportamento da lista vazia de participantes', ()=>{
  
  beforeEach(() =>{
    (useListParticipants as jest.Mock).mockReturnValue([])
  });

  test('Lista vazia de participantes deve ser renderizada', ()=>{
    render(
      <RecoilRoot>
        <ListParticipants/>
      </RecoilRoot>
    )

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(0)
  })
})

describe('Comportamento da lista preenchida de participantes', ()=>{

  const participants : string[] = ['Bea', 'Alex', 'Nice'];

  beforeEach(() =>{
    (useListParticipants as jest.Mock).mockReturnValue(participants)
  });

  test('Lista de participantes deve ser renderizada', ()=>{
    render(
      <RecoilRoot>
        <ListParticipants/>
      </RecoilRoot>
    )

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(participants.length)
  })
})