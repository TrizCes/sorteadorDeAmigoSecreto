import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Footer from "./Footer"
import { useListParticipants } from "../../state/hooks/useListParticipants"

jest.mock('../../state/hooks/useListParticipants.ts', () =>{
  return {
    useListParticipants: jest.fn()
  }
})

const mockNavigate = jest.fn()
const mockPick = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate
  }
})

jest.mock('../../state/hooks/usePick.ts', () => {
  return {
    usePick: () => mockPick
  }
})

describe('Quando não existem participantes suficientes', () => {
  beforeEach(() =>{
    (useListParticipants as jest.Mock).mockReturnValue([])
  });

  test('Não podemos iniciar a brincadeira', () => {
    render(
      <RecoilRoot>
        <Footer/>
      </RecoilRoot>
    )
    const button = screen.getByRole('button')
    expect(button).toBeDisabled();
  })
})

describe('Quando existem participantes suficientes', () => {

  const participants : string[] = ['Bea', 'Alex', 'Nice', 'luna'];
  beforeEach(() =>{
    (useListParticipants as jest.Mock).mockReturnValue(participants)
  });

  test('Podemos iniciar a brincadeira', () => {
    render(
      <RecoilRoot>
        <Footer/>
      </RecoilRoot>
    )
    const button = screen.getByRole('button')

    expect(button).not.toBeDisabled()
  })

  test('A brincadeira começou', () => {
    render(
      <RecoilRoot>
        <Footer/>
      </RecoilRoot>
    )
    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(mockNavigate).toHaveBeenCalledTimes(1)
    expect(mockNavigate).toHaveBeenCalledWith('/sort')
    expect(mockPick).toHaveBeenCalled()

  })
})