import React, { useState } from 'react'
import Numbers from '../generator/index'
import './app.css'

const PerguntaComOpcoes = () => {
    const [quantidade, setQuantidade] = useState(null)
    const [refreshKey, setRefreshKey] = useState(0)

    const opcoes = [
        'Opção 6', 'Opção 7', 'Opção 8', 'Opção 9', 'Opção 10',
        'Opção 11', 'Opção 12', 'Opção 13', 'Opção 14', 'Opção 15',
        'Opção 16', 'Opção 17', 'Opção 18', 'Opção 19', 'Opção 20'
    ]

    const handleChange = (event) => {
        const opcaoSelecionada = event.target.value;
        const index = opcoes.indexOf(opcaoSelecionada);
        if (index !== -1) {
            setQuantidade(index + 6)
        } else {
            setQuantidade(null)
        }
    };

    const handleRefresh = () => {
        setRefreshKey(prevKey => prevKey + 1)
    }

    return (
        <div className='container'>
            <div className='container-min-1'>
                <h2>Quantos números você quer apostar?</h2>
                <select value={quantidade ? `Opção ${quantidade}` : ''} onChange={handleChange}>
                    <option value="">Selecione uma opção</option>
                    {opcoes.map((opcao, index) => (
                        <option key={index} value={opcao}>
                            {opcao}
                        </option>
                    ))}
                </select>
            </div>
            <div className='container-min-2'>
                {quantidade && (
                    <div className="numbers-section">
                        <Numbers key={refreshKey} quantidade={quantidade} />
                        <button onClick={handleRefresh} className="refresh-button">
                            <strong>Atualizar números</strong>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PerguntaComOpcoes
