import Head from 'next/head';
import {
  Layout,
  Main,
  Banner,
  FooterBrand,
  ButtonCTA,
  FooterSimple,
} from '@marceloglacial/rds-beta';

const siteInfo = {
  siteTitle: 'Sprott School of Busness',
  siteDescription:
    'RDS, Carleton University’s design system, is a living digital organism uniting campus wide teams around a common visual language. ',
  siteKeywords: 'rds, design system',
  siteImage: {
    formats: {
      small: {
        url: 'https://cu-rds.s3.amazonaws.com/docs/assets/home-hero-3.png',
      },
    },
  },
  siteFavicon: {
    url: 'https://carleton.ca/favicon.ico',
  },
};

const PageLayout = (props) => {
  const { banner, children } = props;
  const { siteTitle, siteDescription, siteKeywords, siteImage, siteFavicon } =
    siteInfo;

  console.log(banner);
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name='robots' content='index, follow' />
        <meta name='description' content={siteDescription} />
        <meta name='keywords' content={siteKeywords} />
        <meta property='og:title' content={siteTitle} />
        <meta property='og:description' content={siteDescription} />
        <meta property='og:image' content={siteImage?.formats.small.url} />
        <link rel='apple-touch-icon' href={siteImage?.formats.small.url} />
        <link rel='icon' type='image/png' href={siteFavicon.url}></link>
      </Head>

      {banner && (
        <header>
          <Banner title={banner.imageTitle} imageUrl={banner.imageSrc}>
            {banner.button1Text && (
              <ButtonCTA text={banner.button1Text} link={banner.button1Url} />
            )}
            {banner.button2Text && banner.numOfButtons === 2 && (
              <ButtonCTA text={banner.button2Text} link={banner.button2Url} />
            )}
          </Banner>
        </header>
      )}
      <Layout>
        <Main>{children}</Main>
      </Layout>
      <footer>
        <FooterSimple
          name='Sprott School of Business'
          address='7007 Nicol'
          map='7007 Nicol'
          phone='613-520-2388'
          contact='https://sprott.carleton.ca/contact-us/'
        />
        <FooterBrand />
      </footer>
    </>
  );
};
export default PageLayout;
