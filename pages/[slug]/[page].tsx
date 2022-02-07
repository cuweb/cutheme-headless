import { GetStaticPaths, GetStaticProps } from 'next'
import Page from 'components/Page/Page'
import { ParsedUrlQuery } from 'querystring'

interface IParams extends ParsedUrlQuery {
    slug: string
    url: string
}

const Pages = (props: any) => {
    return <Page {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/sites`)
    const pages = await res.json()
    const paths = pages.map((page: { slug: string; url: string }) => ({
        params: { slug: page.slug, url: page.url },
    }))
    return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as IParams
    const site = await fetch(
        `${process.env.NEXT_PUBLIC_HOSTNAME}/api/sites/${slug}`
    )
    const siteData = await site.json()

    const pageRes = await fetch(
        `${siteData.url}/wp-json/wp/v2/pages/?slug=${slug}`
    )
    const pageData = await pageRes.json()
    return {
        props: {
            siteData,
            pageData,
            params: context.params,
        },
        revalidate: 30,
    }
}

export default Pages

// export async function getStaticProps({ params }) {
//     const { slug, page } = params
//     const data = await getData(slug)
//     const pageRes = await fetch(
//         `${data.siteInfo.url}/wp-json/wp/v2/pages?slug=${page}`
//     )
//     const pageData = await pageRes.json()
//     return {
//         props: {
//             pageData: pageData[0],
//             params,
//         },
//         revalidate: 30,
//     }
// }

// export async function getStaticPaths() {
//     const paths = (await getPaths()) || {}
//     return { paths, fallback: 'blocking' }
// }
