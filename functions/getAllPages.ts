const getAllPages = async () => {
    const sites = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/sites`)
    const sitesData = await sites.json()

    const data = Promise.all(
        sitesData.map(async (site: { url: string; slug: string }) => {
            const pages = await (
                await fetch(`${site.url}/wp-json/wp/v2/pages`)
            ).json()
            const paths = pages.map((page: { slug: string; link: string }) => ({
                params: { page: page.slug, slug: site.slug, url: page.link },
            }))
            return paths
        })
    )
    return (await data).flat()
}
export default getAllPages
