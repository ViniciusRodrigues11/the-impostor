import React from 'react'

import './News.css'
import news01 from '../../images/news_01.png'
import news02 from '../../images/news_02.png'
import news03 from '../../images/news_03.png'
import news04 from '../../images/news_04.png'
import news05 from '../../images/news_05.png'
import add from '../../images/add.png'

export default function News() {
    return (
        <main className="container">
            <div className="headline">
                <img src={news01} alt="" />
                <div className="text">
                    <h2>Cresce número de crimes em naves espaciais</h2>
                    <p>Os “impostores” como estão sendo chamados invadem naves, sabotam e cometem graves crimes contra os tripulantes.</p>
                </div>
            </div>

            <div className="news">
                <ul>
                    <li>
                        <img src={news02} alt="Procurado" />
                        <h3>Procurado</h3>
                        <p>Visto pela ultima vez entrando em um tubo de ventilação.</p>
                    </li>
                    <li>
                        <img src={news03} alt="Procurado" />
                        <h3>Viagem espacial</h3>
                        <p>Astronautas informam novidades através da sala de comunicação.</p>
                    </li>
                    <li>
                        <img src={news04} style={{ borderRadius: 5 }} alt="Procurado" />
                        <h3>Moda</h3>
                        <p>Veja as tendências intergaláticas para o próximo verão.</p>
                    </li>
                </ul>
            </div>

            <div className="add">
                <p className="addhead">Anúncio</p>
                <div className="add-box">
                    <div className="title">
                        <h1>
                            Instalação e reparos de sistemas de ventilação e exaustão
                        </h1>
                    </div>
                    <div className="contact">
                        <p>(99) 98989-5959</p>
                        <p>vent@amongmail.com</p>
                        <p>Avenida dos Ventiladores 0101</p>
                    </div>
                    <img src={add} alt="" style={{ height: 120 }} />
                </div>
            </div>

            <div className="headline" style={{marginTop: 80}}>
            
                <div className="text">
                    <h2>Curso em elétrica avançada</h2>
                    <p>O curso de nível técnico em elétrica avançada visa instruir alunos ao dominío completo das práticas exercidas por um profissional da área.</p>
                </div>

                <img src={news05} alt="" />
            </div>

        </main>
    );

}