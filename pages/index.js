import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Typist from 'react-typist';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.description}>
          <Typist>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Typist.Delay ms={500} />
            Suspendisse mattis, dui non rhoncus euismod, odio purus faucibus
            nulla, non pellentesque risus purus id neque.
            <Typist.Delay ms={500} />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius
            eros in nibh posuere congue. Cras luctus, ligula vel auctor
            placerat, magna metus venenatis nulla, et dictum justo est ac magna.
            Etiam dignissim imperdiet facilisis.
            <Typist.Delay ms={500} />
            Nulla augue velit, iaculis non mi eu, elementum molestie lacus. Cras
            ac lacinia dolor. Vivamus non sapien metus. Donec sodales odio vitae
            hendrerit egestas.{' '}
          </Typist>
        </p>
      </main>

      <footer className={styles.footer}>@</footer>
    </div>
  );
}
