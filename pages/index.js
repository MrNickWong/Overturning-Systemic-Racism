import Head from 'next/head';
import styles from '../styles/Home.module.css';

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          mattis, dui non rhoncus euismod, odio purus faucibus nulla, non
          pellentesque risus purus id neque. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nunc varius eros in nibh posuere congue.
          Cras luctus, ligula vel auctor placerat, magna metus venenatis nulla,
          et dictum justo est ac magna. Etiam dignissim imperdiet facilisis.
          Nulla augue velit, iaculis non mi eu, elementum molestie lacus. Cras
          ac lacinia dolor. Vivamus non sapien metus. Donec sodales odio vitae
          hendrerit egestas.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>
              Cras pellentesque mattis magna ac fermentum. Ut sed erat tempus
              felis lobortis malesuada eget ac justo. Phasellus non libero sit
              amet leo porttitor varius. Cras auctor luctus sapien et maximus.
              Aenean finibus, libero non placerat gravida, ex metus congue
              justo, et interdum leo mi et nisi. Aenean condimentum lorem ut
              dolor pulvinar, ac posuere ipsum dapibus. Pellentesque id ultrices
              neque, eget porttitor sem. Nulla non molestie tellus.
            </p>
          </div>

          <a href='#' className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>
              Cras pellentesque mattis magna ac fermentum. Ut sed erat tempus
              felis lobortis malesuada eget ac justo. Phasellus non libero sit
              amet leo porttitor varius. Cras auctor luctus sapien et maximus.
              Aenean finibus, libero non placerat gravida, ex metus congue
              justo, et interdum leo mi et nisi. Aenean condimentum lorem ut
              dolor pulvinar, ac posuere ipsum dapibus. Pellentesque id ultrices
              neque, eget porttitor sem. Nulla non molestie tellus.
            </p>
          </a>

          <a href='#' className={styles.card}>
            <h3>Examples &rarr;</h3>
            <p>
              Cras pellentesque mattis magna ac fermentum. Ut sed erat tempus
              felis lobortis malesuada eget ac justo. Phasellus non libero sit
              amet leo porttitor varius. Cras auctor luctus sapien et maximus.
              Aenean finibus, libero non placerat gravida, ex metus congue
              justo, et interdum leo mi et nisi. Aenean condimentum lorem ut
              dolor pulvinar, ac posuere ipsum dapibus. Pellentesque id ultrices
              neque, eget porttitor sem. Nulla non molestie tellus.
            </p>
          </a>

          <a href='#' className={styles.card}>
            <h3>Deploy &rarr;</h3>
            <p>
              Cras pellentesque mattis magna ac fermentum. Ut sed erat tempus
              felis lobortis malesuada eget ac justo. Phasellus non libero sit
              amet leo porttitor varius. Cras auctor luctus sapien et maximus.
              Aenean finibus, libero non placerat gravida, ex metus congue
              justo, et interdum leo mi et nisi. Aenean condimentum lorem ut
              dolor pulvinar, ac posuere ipsum dapibus. Pellentesque id ultrices
              neque, eget porttitor sem. Nulla non molestie tellus.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>@</footer>
    </div>
  );
}
