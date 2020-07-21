import Head from 'next/head'
import Layout, { siteTitle} from '../components/layout/layout';
import utilStyles from '../styles/utils.module.css';

// export async function getStaticProps() {
//   return {
//     props: {

//     }
//   }
// }

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

        </section> 

      </Layout>

  )
}
