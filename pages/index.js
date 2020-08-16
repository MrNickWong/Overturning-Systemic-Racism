import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Typist from 'react-typist';
import { getData } from './api/keywords';
import ReactHtmlParser from 'react-html-parser';

export async function getStaticProps() {
  var shuffle = require('shuffle-array'),
    myData = await getData();
  shuffle(myData);
  return {
    props: {
      myData,
    },
  };
}

export default function Home({ myData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Lucky Country</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>The Lucky Country</h1>
        <p className={styles.description}>
          <Typist>
            {myData.map((post) => (
              <p>{ReactHtmlParser(post)}</p>
            ))}
          </Typist>
        </p>
      </main>
      <footer className={styles.footer}>@</footer>
    </div>
  );
}
