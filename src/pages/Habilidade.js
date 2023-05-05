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
            <h2>Front-end.</h2>
            <div className='linguagens'>
                <div className='control-img-left'>
                    <img src={Html} alt={Html} />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, optio et quia veniam sequi omnis reiciendis! Obcaecati velit, quidem mollitia blanditiis, similique, neque quis hic reprehenderit eius ullam id qui.</p>
                </div>
                <div className="control-img-right">
                    <img src={Css} alt={Css} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid quibusdam fugiat placeat, mollitia labore voluptatem, autem perferendis dolorem, sapiente eligendi necessitatibus facilis tempore dolor ea temporibus eos odit maxime?</p>
                </div>
                <div className="control-img-right">
                    <img src={Javascript} alt={Javascript} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid quibusdam fugiat placeat, mollitia labore voluptatem, autem perferendis dolorem, sapiente eligendi necessitatibus facilis tempore dolor ea temporibus eos odit maxime?</p>
                </div>
                <div className="control-img-right">
                    <img src={Reactjs} alt={Reactjs} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid quibusdam fugiat placeat, mollitia labore voluptatem, autem perferendis dolorem, sapiente eligendi necessitatibus facilis tempore dolor ea temporibus eos odit maxime?</p>
                </div>
                <div className="control-img-right">
                    <img src={Typescript} alt={Typescript} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid quibusdam fugiat placeat, mollitia labore voluptatem, autem perferendis dolorem, sapiente eligendi necessitatibus facilis tempore dolor ea temporibus eos odit maxime?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Habilidade