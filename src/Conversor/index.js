import React, { useState, useEffect } from 'react';
import './styles.css';

import api from '../services/api';

export default function Conversor(props){
    // moeda escolhida
    const [moeda, setMoeda] = useState(props.moeda);
    // informações sobre a cotação da moeda escolhida
    const [cotacao, setCotacao] = useState([]);
    // valor convertido em Real
    const [valor, setValor] = useState(0);

    // chamada da api
    useEffect(() => {
        api.get(moeda + '-BRL').then(response => {
            setCotacao(response.data);
        }).catch(err => {
            console.log(err);
        })
    }, [moeda]);

    return(
        <div>
            <div className="conversor">
                    { cotacao.map(c => (
                        <div key={c.code}>
                            <strong className="coin">1 {c.name} é igual a: </strong><br></br>
                            <p className="brl">{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL' }).format(c.low)} Real brasileiro</p>

                            <hr></hr>

                            <p className="brl-valor">{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(valor * c.low)}</p>

                            <label onInput={(e) => setValor(e.target.value)}>{c.name}: 
                                <input type="number" min="1"/>
                            </label><br></br>
                        </div>
                    ))}
            </div>
        </div>
    );
}