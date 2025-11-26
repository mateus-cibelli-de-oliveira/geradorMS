function gerarNumeros(quantidade) {
  const numerosSorteados = new Set();
  while (numerosSorteados.size < quantidade) {
    const numero = Math.floor(Math.random() * 60) + 1;
    numerosSorteados.add(numero);
  }
  return Array.from(numerosSorteados).sort((a, b) => a - b);
}

export default gerarNumeros;
