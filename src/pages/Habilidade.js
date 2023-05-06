import './Habilidades.css'

// images
import Css from '../image/css.png'
import Html from '../image/html.png'
import Javascript from '../image/javascript.png'
import Reactjs from '../image/reactjs.png'
import Typescript from '../image/typescript.png'

const Habilidade = () => {
  return (
    <div className='container'>
        <div>
            <h2 className='text-principal'>Front-end.</h2>
            <div className='linguagens'>
                <div className='control-detalhe'>
                    <div className='control-img'>
                        <img src={Html} alt={Html} />
                    </div>
                    <div className="control-text">
                        <h2>HTML5</h2>
                        <p>Sigla para HyperText Markup Language — Linguagem de Marcação de Hipertexto —, o HTML é o componente base da web. Isso quer dizer que ele permite a construção de websites e a inserção de novos conteúdos, como imagens e vídeos, por meio dos hipertextos</p>
                    </div>
                </div>
                <div className="control-detalhe">
                    <div className="control-img">
                        <img src={Css} alt={Css} />
                    </div>
                    <div className="control-text">
                        <h2>CSS</h2>
                        <p>CSS é a sigla para Cascading Style Sheets, ou seja, Folhas de Estilo em Cascatas. É uma maneira de dar estilo ao código criado por linguagens como HTML, XML ou XHTML, por exemplo. De forma prática, ela funciona como uma camada de personalização ao conteúdo visível.</p>
                    </div>
                </div>
                <div className="control-detalhe">
                    <div className="control-img">
                        <img src={Javascript} alt={Javascript} />
                    </div>
                    <div className="control-text">
                        <h2>Javascript</h2>
                        <p>JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc.</p>
                    </div>
                </div>
                <div className="control-detalhe">
                    <div className="control-img">
                        <img src={Reactjs} alt={Reactjs} />
                    </div>
                    <div className="control-text">
                        <h2>Reactjs</h2>
                        <p>React JS é uma biblioteca JavaScript para a criação de interfaces de usuário — ou UI (user interface). Criado em 2011 pelo time do Facebook, o React surgiu com o objetivo de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social, entre eles chat, status, listagem de contatos e outros.</p>
                    </div>
                </div>
                <div className="control-detalhe">
                    <div className="control-img">
                        <img src={Typescript} alt={Typescript} />
                    </div>
                    <div className="control-text">
                        <h2>Typescript</h2>
                        <p>TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que é uma extensão do JavaScript. Ela adiciona recursos avançados ao JavaScript, como a tipagem estática e interfaces, tornando mais fácil detectar e prevenir erros durante a fase de desenvolvimento.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Habilidade