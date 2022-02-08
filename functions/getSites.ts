import data from 'data/sites.json'

const getSites = async (site?: string) => {
    // const sites = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/sites`)
    // const sitesData = await sites.json()

    const siteData = site ? data.find((item) => item.slug === site) : data
    return siteData
}
export default getSites
