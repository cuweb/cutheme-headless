import getSites from './getSites'

const getAllHomePages = async () => {
    // const sites = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/sites`)
    // const sitesData = await sites.json()

    const sitesData: { [k: string]: any } | undefined = await getSites()

    const paths = sitesData?.map((site: { slug: string; link: string }) => ({
        params: { slug: site.slug, url: site.link },
    }))
    return paths
}
export default getAllHomePages
