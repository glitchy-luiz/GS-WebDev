import { faker } from '@faker-js/faker';


function Info(){

    const randomName = faker.person.fullName();
    const custo = faker.finance.accountNumber(4)
    const empresa = faker.company.buzzAdjective()

    const randomName2 = faker.person.fullName();
    const custo2 = faker.finance.accountNumber(4)
    const empresa2 = faker.company.buzzAdjective()

    const randomName3 = faker.person.fullName();
    const custo3 = faker.finance.accountNumber(4)
    const empresa3 = faker.company.buzzAdjective()

    return(
        <>
            <section id="informações" class="container text-center py-5">
                <h2 class="titinfo">Informações</h2>
                        <div class="todo-curiosidades">
                            <div class="info">
                                <h4 class="tit-curi">Energia Solar</h4>
                                <p>A energia solar é obtida pela captação da luz do sol, transformada em eletricidade por meio de células fotovoltaicas, geralmente organizadas em painéis solares. Esses painéis absorvem a luz e convertem-na diretamente em eletricidade, sendo uma solução altamente sustentável e renovável. </p>
                                <p>Embora a energia solar ajude a reduzir as emissões de carbono e precise de pouca manutenção após a instalação, ela depende das condições climáticas e da intensidade de luz solar, tornando-a menos eficiente em dias nublados ou locais com menos exposição solar.</p>
                                <img src="/mostra-solar.png" class="infoimg" alt=""/>
                                <h6>Vantagens:</h6>
                                <ul class="tags">
                                    <li class="lista-tag">Renovável</li>
                                    <li class="lista-tag">0 CO₂</li>
                                    <li class="lista-tag">Pouca manutenção</li>
                                </ul>
                                <h5>Dados</h5>
                                <p>Inventado por: {randomName}</p>
                                <p>Custo médio: {custo}R$</p>
                                <p>Distribuido por: {empresa}</p>
                            </div>
                            <div class="info">
                                <h4 class="tit-curi">Energia Eólica</h4>
                                <p>A energia eólica aproveita a força do vento para gerar eletricidade. As turbinas eólicas possuem hélices que giram ao serem impulsionadas pelo vento, acionando um gerador que converte essa energia mecânica em elétrica. É uma fonte renovável e limpa que ocupa relativamente pouco espaço, podendo ser instalada tanto em terra quanto no mar (offshore).</p>
                                <p>Entretanto, a geração de energia eólica pode ser instável, dependendo da velocidade constante do vento, além de que as turbinas podem gerar impactos visuais e sonoros para as áreas próximas.</p>
                                <img src="/mostra-eolica.jpg" class="infoimg" alt=""/>
                                <h6>Vantagens:</h6>
                                <ul class="tags">
                                    <li class="lista-tag">Renovável</li>
                                    <li class="lista-tag">Pouco espaço necessário</li>
                                    <li class="lista-tag">Baixo custo</li>
                                </ul>
                                <h5>Dados</h5>
                                <p>Inventado por: {randomName2}</p>
                                <p>Custo médio: {custo2}R$</p>
                                <p>Distribuido por: {empresa2}</p>
                            </div>
                            <div class="info">
                                <h4 class="tit-curi">Energia Hidrelétrica</h4>
                                <p>A energia hidrelétrica é gerada pelo movimento da água em rios e quedas d'água, que aciona turbinas em grandes usinas. É uma das principais fontes de energia no Brasil devido à grande quantidade de rios no país.</p>
                                <p>Esse tipo de energia é confiável e pode fornecer grandes volumes de eletricidade, mas também apresenta desafios ambientais, como o impacto nos ecossistemas aquáticos, deslocamento de comunidades e a dependência de rios com fluxo constante. Mesmo assim, é uma alternativa importante na matriz de energia renovável global.</p>
                                <img src="/mostra-hidre.avif" class="infoimg" alt=""/>
                                <h6>Vantagens:</h6>
                                <ul class="tags">
                                    <li class="lista-tag">Renovável</li>
                                    <li class="lista-tag">Estável e Confiável</li>
                                    <li class="lista-tag">Muita geração de energia</li>
                                </ul>
                                <h5>Dados</h5>
                                <p>Inventado por: {randomName3}</p>
                                <p>Custo médio: {custo3}R$</p>
                                <p>Distribuido por: {empresa3}</p>
                            </div>
                        </div>
            </section>
        </>
    )
}
export default Info