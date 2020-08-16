import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Typist from 'react-typist';
import { getData } from './api/keywords';
import ReactHtmlParser from 'react-html-parser';
import { Carousel } from 'react-responsive-carousel';
import { FaGithub, FaReact } from 'react-icons/fa';

export async function getStaticProps() {
  let myData = await getData();
  return {
    props: {
      myData,
    },
  };
}

export default function Home({ myData }) {
  var shuffle = require('shuffle-array'),
    myData;
  shuffle(myData);
  return (
    <div className={styles.container}>
      <Head>
        <title>The Lucky Country</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>The Lucky Country</h1>
        <p className={styles.description}>
          <Typist avgTypingDelay={20} cursor={{ show: false }}>
            {myData.map((post, i) => (
              <div key={i}>{ReactHtmlParser(post)} </div>
            ))}
          </Typist>
        </p>
      </main>
      <footer className={styles.footer}>
        <span>
          <a href='https://github.com/MrNickWong/The-Lucky-Country'>
            <FaGithub />
          </a>{' '}
          @ Team CoCo
        </span>
      </footer>
    </div>
  );
}
