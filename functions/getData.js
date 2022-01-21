//
// Getting Data
// @see https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
//

export async function getData() {
  const wordpressApiUrl = `https://sprott.carleton.ca/wp-json/wp/v2`;

  // Get FrontPage
  const frontPageRes = await fetch(`${wordpressApiUrl}/pages/2`);
  const frontPage = await frontPageRes.json();

  // Get Posts
  const postRes = await fetch(`${wordpressApiUrl}/posts`);
  const posts = await postRes.json();

  // Get Pages
  const pageRes = await fetch(`${wordpressApiUrl}/pages`);
  const pages = await pageRes.json();

  // Get Menus
  const headerMenuRes = await fetch(
    `https://sprott.carleton.ca/wp-json/menus/v1/menus/header`
  );
  const headerMenu = await headerMenuRes.json();

  const footerMenuRes = await fetch(
    `https://sprott.carleton.ca/wp-json/menus/v1/menus/footer`
  );
  const footerMenu = await footerMenuRes.json();

  const subscribeMenuRes = await fetch(
    `https://sprott.carleton.ca/wp-json/menus/v1/menus/subscribe`
  );
  const subscribeMenu = await subscribeMenuRes.json();

  const socialMenuRes = await fetch(
    `https://sprott.carleton.ca/wp-json/menus/v1/menus/social`
  );
  const socialMenu = await socialMenuRes.json();

  return {
    posts,
    pages,
    frontPage,
    headerMenu,
    footerMenu,
    subscribeMenu,
    socialMenu,
  };
}
