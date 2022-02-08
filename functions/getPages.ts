import getSites from './getSites'

const getPages = async (site: string, page?: string) => {
    // const sites = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/sites`)
    // const sitesData = await sites.json()

    const siteData: { [k: string]: any } | undefined = await getSites(site)

    const pageUrl = page === 'homepage' ? '2' : page ? `?slug=${page}` : ''
    const pageRes = await fetch(
        `${siteData?.url}/wp-json/wp/v2/pages/${pageUrl}`
    )
    const pageData = await pageRes.json()

    return pageData
}
export default getPages
