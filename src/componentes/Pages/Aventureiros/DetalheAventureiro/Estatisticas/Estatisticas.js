import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Doughnut, Bar, defaults, Line } from 'react-chartjs-2';


import './Estatisticas.css'

function Estatisticas() {
    const usuario = useSelector(state => state.Aventureiro.userSelecionado);

    // primeiro grafico
    defaults.global.defaultFontFamily = 'Teko-Light';
    defaults.global.defaultFontSize = 20;
    const data1 = {
        labels: ['desempenho e proatividade', 'desenvolvimento', 'conquistas'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    '#60b23e',
                    '#8FBC8F',
                    '#9ACD32',
                ],
                borderWidth: 0,
            }
        ]
    };

    //segundo grafico
    const data2 = {
        labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
        datasets: [
            {
                label: 'pontuações',
                data: [90, 50, 70, 98, 30, 40, 50, 40, 80, 75, 62, 41],
                backgroundColor: '#60b23e',
                borderWidth: 0,
            }
        ]
    };

    //terceiro grafico
    const data3 = {
        labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
        datasets: [
            {
                label: 'desempenho e proatividade',
                data: [90, 50, 70, 98, 30, 40, 50, 40, 80, 75, 62, 41],
                borderWidth: 2,
                fill: false,
                borderColor: '#60b23e',
                pointBackgroundColor: '#60b23e',
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#60b23e',
                pointHoverBorderWidth: 2,


            },
            {
                label: 'desenvolvimento',
                data: [20, 58, 75, 93, 39, 47, 51, 41, 81, 70, 60, 46],
                borderWidth: 2,
                fill: false,
                borderColor: '#8FBC8F',
                pointBackgroundColor: '#8FBC8F',
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#8FBC8F',
                pointHoverBorderWidth: 2,


            },
            {
                label: 'conquistas',
                data: [10, 60, 40, 58, 36, 48, 20, 48, 50, 45, 92, 51],
                borderWidth: 2,
                fill: false,
                borderColor: '#9ACD32',
                pointBackgroundColor: '#9ACD32',
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#9ACD32',
                pointHoverBorderWidth: 2,


            }
        ]
    };

    //quarto grafico
    const data4 = {
        labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
        datasets: [
            {
                label: 'comprometimento',
                data: [0, 5, 7, 9, 3, 4, 5, 4, 8, 7, 6, 4],
                borderWidth: 2,
                fill: false,
                borderColor: '#60b23e',
                pointBackgroundColor: '#60b23e',
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#60b23e',
                pointHoverBorderWidth: 2,


            },
            {
                label: 'participação',
                data: [2, 5, 7, 9, 3, 4, 5, 4, 8, 7, 6, 4],
                borderWidth: 2,
                fill: false,
                borderColor: '#8FBC8F',
                pointBackgroundColor: '#8FBC8F',
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#8FBC8F',
                pointHoverBorderWidth: 2,


            },
            {
                label: 'disponibilidade',
                data: [1, 6, 4, 8, 3, 4, 2, 4, 5, 5, 2, 1],
                borderWidth: 2,
                fill: false,
                borderColor: '#9ACD32',
                pointBackgroundColor: '#9ACD32',
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#9ACD32',
                pointHoverBorderWidth: 2,


            }
        ]
    };

    return (
        <div className="background">
            <div className="responsive animation">

                <header className="cabecalho">
                    <span>aventureiros&nbsp;&nbsp; > &nbsp;&nbsp;{usuario.usuario} &nbsp;&nbsp; > &nbsp;&nbsp; estatísticas</span>
                    <span>
                        <Link to="/aventureiros/detalhe-aventureiro">voltar</Link>
                    </span>
                </header>

                <div className="prim-grafico">
                    <span>fevereiro de 2020</span>

                    <div className="flex justify-center align-center wrap">
                        <div className="pontos-heroi">+999 de xp</div>
                        <div className="grafico-stats">
                            <Doughnut data={data1}
                                height={281}
                                width={430}
                                options={{
                                    responsive: true,
                                    legend: {
                                        position: 'right'
                                    }

                                }} />
                        </div>
                    </div>
                </div>

                <div className="titulo-com-linha" style={{ width: '100%' }}>
                    <h1 style={{ minWidth: '127px' }}>histórico de xp</h1>
                    <div className="linha"></div>
                </div>

                <div className="flex justify-center wrap" style={{ padding: "40px 0" }}>
                    <div className="grafico-stats">
                        <Bar data={data2}
                            height={281}
                            width={430}
                            options={{
                                responsive: true,
                            }} />
                    </div>
                    <div className="grafico-stats">
                        <Line data={data3}
                            height={281}
                            width={430}
                            options={{
                                responsive: true
                            }} />
                    </div>
                </div>

                <div className="titulo-com-linha" style={{ width: '100%' }}>
                    <h1 style={{ minWidth: '207px' }}>histórico de indicativos</h1>
                    <div className="linha"></div>
                </div>

                <div className="grafico-stats">
                    <Line data={data4}
                        height={331}
                        width={500}
                        options={{
                            responsive: true,
                            legend: {
                                position: 'bottom'
                            }
                        }} />
                </div>

            </div>
        </div>
    )
}

export default Estatisticas
