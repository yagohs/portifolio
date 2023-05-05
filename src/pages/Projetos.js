import './Projetos.css'

// images
import Calcimc from '../image/projetos/calcimc.png'

const Projetos = () => {
  return (
    <div id='projetos'>
        <div>
            <h2>Projetos.</h2>
            <div className='project'>
                <div className='project-left'>
                    <img src={Calcimc} alt={Calcimc} />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, optio et quia veniam sequi omnis reiciendis! Obcaecati velit, quidem mollitia blanditiis, similique, neque quis hic reprehenderit eius ullam id qui.</p>
                </div>
                <div className="project-left">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid quibusdam fugiat placeat, mollitia labore voluptatem, autem perferendis dolorem, sapiente eligendi necessitatibus facilis tempore dolor ea temporibus eos odit maxime?</p>
                    <div>
                      <img src={Calcimc} alt={Calcimc} />
                    </div>
                </div>
                <div className='project-left'>
                    <img src={Calcimc} alt={Calcimc} />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, optio et quia veniam sequi omnis reiciendis! Obcaecati velit, quidem mollitia blanditiis, similique, neque quis hic reprehenderit eius ullam id qui.</p>
                </div>
                <div className="project-left">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid quibusdam fugiat placeat, mollitia labore voluptatem, autem perferendis dolorem, sapiente eligendi necessitatibus facilis tempore dolor ea temporibus eos odit maxime?</p>
                    <div>
                      <img src={Calcimc} alt={Calcimc} />
                    </div>
                </div>
                <div className='project-left'>
                    <img src={Calcimc} alt={Calcimc} />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, optio et quia veniam sequi omnis reiciendis! Obcaecati velit, quidem mollitia blanditiis, similique, neque quis hic reprehenderit eius ullam id qui.</p>
                </div>
                <div className="project-left">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid quibusdam fugiat placeat, mollitia labore voluptatem, autem perferendis dolorem, sapiente eligendi necessitatibus facilis tempore dolor ea temporibus eos odit maxime?</p>
                    <div>
                      <img src={Calcimc} alt={Calcimc} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projetos