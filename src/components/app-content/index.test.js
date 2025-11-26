import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import PerguntaComOpcoes from "./index";

describe("PerguntaComOpcoes Component", () => {
  test("renderiza o título e o select", () => {
    render(<PerguntaComOpcoes />);

    // Verifica se o título aparece
    expect(
      screen.getByText("Quantos números você quer apostar?")
    ).toBeInTheDocument();

    // Verifica se o select aparece
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  test("mostra o componente Numbers ao selecionar uma opção", () => {
    render(<PerguntaComOpcoes />);

    const select = screen.getByRole("combobox");

    // Seleciona a opção 6
    fireEvent.change(select, { target: { value: "Opção 6" } });

    // Agora o botão de atualizar deveria aparecer
    expect(screen.getByText(/Atualizar números/i)).toBeInTheDocument();
  });

  test("botão de atualizar funciona", () => {
    render(<PerguntaComOpcoes />);

    const select = screen.getByRole("combobox");

    fireEvent.change(select, { target: { value: "Opção 6" } });

    const button = screen.getByText(/Atualizar números/i);

    expect(button).toBeInTheDocument();

    fireEvent.click(button);
  });
});
