import Page from 'components/Page/Page';
import { getData } from 'functions/getData';

const Pages = (props) => {
  return <Page {...props} />;
};

let site = 'sprott';
if (typeof window !== 'undefined') {
  site = window.location.pathname;
}

export async function getStaticPaths() {
  const data = (await getData(site)) || {};
  const res = await fetch(`${data.siteInfo.url}/wp-json/wp/v2/pages`);
  const pages = await res.json();
  const paths = pages.map((page) => ({
    params: { slug: site, page: page.slug },
  }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const { slug, page } = params;
  const data = (await getData(slug)) || {};
  const pageRes = await fetch(
    `${data.siteInfo.url}/wp-json/wp/v2/pages?slug=${page}`
  );
  const pageData = await pageRes.json();
  return {
    props: {
      pageData: pageData[0],
      params,
    },
    revalidate: 30,
  };
}

export default Pages;
