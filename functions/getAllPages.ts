const getAllPages = async (slug: string) => {
    const site = await fetch(
        `${process.env.NEXT_PUBLIC_HOSTNAME}/api/sites/${slug}`
    )
    const siteData = await site.json()

    const res = await fetch(`${siteData.url}/wp-json/wp/v2/pages`)
    const pages = await res.json()
    const paths = pages.map((page: { slug: string; link: string }) => ({
        params: { page: page.slug, slug: page.slug, url: page.link },
    }))
    return paths
}
export default getAllPages
