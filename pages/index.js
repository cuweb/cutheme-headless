import { Masthead, TextImage } from '@marceloglacial/rds-beta';
import PageLayout from '../components/PageLayout/PageLayout';
import { getData } from '../functions/getData';

const Home = (props) => {
  const { frontPage } = props;

  const { blocks } = frontPage;
  const banner = blocks[0].attrs;

  return (
    <>
      <Masthead title='Sprott School of Business' />
      <PageLayout banner={{ ...banner }}></PageLayout>
    </>
  );
};

export async function getStaticProps() {
  const allData = (await getData()) || {};
  const {
    frontPage = [],
    headerMenu = [],
    footerMenu = [],
    subscribeMenu = [],
    socialMenu = [],
  } = allData;
  return {
    props: {
      frontPage,
      headerMenu,
      footerMenu,
      subscribeMenu,
      socialMenu,
    },
    revalidate: 30,
  };
}

export default Home;
