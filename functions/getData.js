//
// Getting Data
// @see https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
//

import data from 'data/sites.json';
export async function getData(site) {
  // Get Site Info
  // const siteSlug = site ? `/${site}` : '';
  // const siteInfoRes = await fetch(`http://localhost:3000/api/sites${siteSlug}`);
  // const siteInfo = await siteInfoRes.json();

  const siteInfo = site ? data.find((item) => item.id === site) : data;
  return {
    siteInfo,
  };
}
