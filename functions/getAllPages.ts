import getPages from './getPages'
import getSites from './getSites'

const getAllPages = async () => {
    const sitesData: { [k: string]: any } | undefined = await getSites()
    const data = Promise.all(
        sitesData?.map(async (site: { url: string; slug: string }) => {
            const pages = await getPages(site.slug)
            const paths = pages.map((page: { slug: string; link: string }) => ({
                params: { page: page.slug, slug: site.slug, url: page.link },
            }))
            return paths
        })
    )
    return (await data).flat()
}
export default getAllPages
