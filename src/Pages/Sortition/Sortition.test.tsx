import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { useListParticipants } from "../../state/hooks/useListParticipants"
import Sortition from "./Sortition"
import { usePickResult } from "../../state/hooks/usePickResult"

jest.mock('../../state/hooks/useListParticipants.ts', () =>{
  return {
    useListParticipants: jest.fn()
  }
})

jest.mock('../../state/hooks/usePickResult.ts', () =>{
  return {
    usePickResult: jest.fn()
  }
})

describe('Na página de sorteio', ()=>{

  const participants = [
    'Ana',
    "Nini",
    "Luna",
    "Maria"
  ]

  const result = new Map([
    ['Ana', "Luna"],
    ["Luna", "Nini"],
    ["Nini", "Maria"],
    ["Maria", "Ana"]
  ])

  beforeEach(() =>{
    (useListParticipants as jest.Mock).mockReturnValue(participants);
    (usePickResult as jest.Mock).mockReturnValue(result);
  });
  
  test('todos os participantes podem exibir o seu amigo secreto', ()=>{
    render(
      <RecoilRoot>
        <Sortition/>
      </RecoilRoot>
    )

    const option = screen.queryAllByRole('option');
    expect(option).toHaveLength(participants.length +1)
  })

  test('O amigo secreto é exibido quando solicitado.', ()=>{
    render(
      <RecoilRoot>
        <Sortition/>
      </RecoilRoot>
    )

    const select = screen.getByPlaceholderText('Select your name')

    fireEvent.change(select,
      {
        target:{
          value: participants[0]
        }
      }
    )
    const button = screen.getByRole('button')

    fireEvent.click(button)

    const secretyFriend = screen.getByRole('alert')

    expect(secretyFriend).toBeInTheDocument()
  })
})