import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import Form from "./Form";
import { RecoilRoot } from "recoil";
import { act } from "react-dom/test-utils";

describe('Comportamento do Form:', () => {

  test("Quando o input está vazio, novos participantes não podem ser adicionados", () => {
    render(
    <RecoilRoot>
      <Form/>
    </RecoilRoot> );
    //Reserva o input do DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    //Reserva o BUTTON
    const button = screen.getByRole('button');
    //Garante o input no documento
    expect(input).toBeInTheDocument();
    //Verifica se o button está desabilitado
    expect(button).toBeDisabled();
  })
  
  test('Adiciona um participante caso o input esteja preenchido', () =>{
    render(
    <RecoilRoot>
      <Form/>
    </RecoilRoot> 
    );
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const button = screen.getByRole('button');
  
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    });
  
    fireEvent.click(button);
  
    expect(input).toHaveFocus();
  
    expect(input).toHaveValue('');
  
  })
  
  test('Nomes duplicados não podem ser adicionados na lista', () =>{
    render(
    <RecoilRoot>
      <Form/>
    </RecoilRoot> 
    );
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const button = screen.getByRole('button');
  
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    });
    fireEvent.click(button);
  
    const messageError = screen.getByRole('alert')
  
    expect(messageError.textContent).toBe('Nomes duplicados não são aceitos.');
  })
  
  test('A mensagem de erro deve sumir após o timer', () =>{
    jest.useFakeTimers();
    render(
    <RecoilRoot>
      <Form/>
    </RecoilRoot> 
    );
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const button = screen.getByRole('button');
  
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    });
    fireEvent.click(button);
    let messageError: HTMLElement | null = screen.getByRole('alert')
    expect(messageError.textContent).toBe('Nomes duplicados não são aceitos.');
  
    act(()=>{
      jest.runAllTimers()
    })
    
    messageError = screen.queryByRole('alert')
    expect(messageError).toBeNull();
  });

});

