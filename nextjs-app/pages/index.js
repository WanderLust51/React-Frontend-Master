import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from './header.js'
import Condicional from './condicional';

export default function Home() {
  return (
    <div>
      
      <Header />
      <Condicional />

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
      `}</style>
    </div>
  )
}
