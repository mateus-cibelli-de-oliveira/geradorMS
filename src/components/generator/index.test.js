import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Numbers from "./index";
import gerarNumeros from "./generate";

// mock da função que gera números
jest.mock("./generate");

describe("Numbers Component", () => {
  test("não renderiza nada quando quantidade é nula", () => {
    const { container } = render(<Numbers quantidade={null} />);
    expect(container.firstChild).toBeNull();
  });

  test("chama gerarNumeros com a quantidade correta", () => {
    gerarNumeros.mockReturnValue([1, 2, 3]); // retorno fake

    render(<Numbers quantidade={3} />);

    expect(gerarNumeros).toHaveBeenCalledWith(3);
  });

  test("renderiza os spans dos números retornados", () => {
    gerarNumeros.mockReturnValue([10, 20, 30]);

    render(<Numbers quantidade={3} />);

    expect(screen.getAllByText(/10|20|30/)).toHaveLength(3);
  });
});