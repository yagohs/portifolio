import './Home.css'

import teste from '../image/teste.png'

const Home = () => {
  return (
    <div id='home'>
        <section className='intro'>
            <div className='text'>
                <p>Olá, eu sou o</p>
                <h1 className='name'>Yago Santos</h1>
                <p>Develop Front-end</p>
            </div>
        </section>

        <section className='sobre'>
            <div className='sobre-text'>
                <h2>Sobre min.</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel earum facilis iure velit consectetur nostrum. Quisquam quam ratione nemo deserunt impedit omnis cum quia adipisci. Iusto praesentium harum ex laborum!</p>
            </div>
            <div className='image'>
                <img src={teste} alt="" />
            </div>
        </section>
    </div>
  )
}

export default Home