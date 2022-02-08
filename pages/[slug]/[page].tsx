import { GetStaticPaths, GetStaticProps } from 'next'
import Page from 'components/Page/Page'
import { ParsedUrlQuery } from 'querystring'
import getAllPages from 'functions/getAllPages'

interface IParams extends ParsedUrlQuery {
    slug: string
    url: string
}

const Pages = (props: any) => {
    return <Page {...props} />
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { page, slug } = context.params as IParams
    const site = await fetch(
        `${process.env.NEXT_PUBLIC_HOSTNAME}/api/sites/${slug}`
    )
    const siteData = await site.json()
    const pageRes = await fetch(
        `${siteData.url}/wp-json/wp/v2/pages?slug=${page}`
    )
    const pageData = await pageRes.json()

    const menusRes = await fetch(
        `${process.env.NEXT_PUBLIC_HOSTNAME}/api/menus`
    )
    const menus = await menusRes.json()

    return {
        props: {
            siteData,
            pageData: pageData[0],
            params: context.params,
            menus,
        },
        revalidate: 30,
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllPages()
    return { paths, fallback: 'blocking' }
}

export default Pages
