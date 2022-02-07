import { GetStaticPaths, GetStaticProps } from 'next'
import Page from 'components/Page/Page'
import { ParsedUrlQuery } from 'querystring'
import getAllPages from 'functions/getAllPages'

interface IParams extends ParsedUrlQuery {
    slug: string
    url: string
}

const Pages = (props: any) => <Page {...props} />

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as IParams
    const site = await fetch(
        `${process.env.NEXT_PUBLIC_HOSTNAME}/api/sites/${slug}`
    )
    const siteData = await site.json()
    const pageRes = await fetch(`${siteData.url}/wp-json/wp/v2/pages/2`)
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

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllPages('sprott')
    return { paths, fallback: 'blocking' }
}

export default Pages
