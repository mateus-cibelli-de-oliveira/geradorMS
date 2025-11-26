import '@testing-library/jest-dom';
import gerarNumeros from "./generate";

describe("gerarNumeros", () => {
  test("gera a quantidade correta de números", () => {
    const quantidade = 6;
    const numeros = gerarNumeros(quantidade);

    expect(numeros.length).toBe(quantidade);
  });

  test("todos os números são únicos", () => {
    const numeros = gerarNumeros(10);
    const set = new Set(numeros);

    expect(set.size).toBe(numeros.length);
  });

  test("todos os números estão entre 1 e 60", () => {
    const numeros = gerarNumeros(20);

    const todosValidos = numeros.every((n) => n >= 1 && n <= 60);

    expect(todosValidos).toBe(true);
  });

  test("os números retornam ordenados em ordem crescente", () => {
    const numeros = gerarNumeros(10);

    // Cria uma cópia e ordena para comparar
    const ordenados = [...numeros].sort((a, b) => a - b);

    expect(numeros).toEqual(ordenados);
  });

  test("gera um conjunto diferente em chamadas diferentes (alta probabilidade)", () => {
    const numeros1 = gerarNumeros(10);
    const numeros2 = gerarNumeros(10);

    // Pode acontecer de serem iguais, mas é estatisticamente muito improvável
    expect(numeros1).not.toEqual(numeros2);
  });
});