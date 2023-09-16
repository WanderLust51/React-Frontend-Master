import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from './header.js'
import Condicional from './condicional'
import Arreglos from './arreglos'
import Hooks from './hooks';
import Answer from './answer';
import UsingRef from './ref';

export default function Home() {
  return (
    <div>
      
      <Header />
      {/* <Condicional /> */}

      <div className='centerDiv'>
        {/* <Hooks /> */}
        {/* <Answer /> */}
        <UsingRef />
      </div>



      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        .centerDiv{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 2rem;
        }
      `}</style>
    </div>
  )
}
