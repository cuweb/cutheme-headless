import { GetStaticPaths, GetStaticProps } from 'next'
import Page from 'components/Page/Page'
import { ParsedUrlQuery } from 'querystring'
import getAllPages from 'functions/getAllPages'
import getSites from 'functions/getSites'
import getPages from 'functions/getPages'

interface IParams extends ParsedUrlQuery {
    slug: string
    page: string
}

const Pages = (props: any) => {
    return <Page {...props} />
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { page, slug } = context.params as IParams
    const siteData = await getSites(slug)
    const pageData = await getPages(slug, page)
    return {
        props: {
            siteData,
            pageData: pageData[0],
            params: context.params,
        },
        revalidate: 30,
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllPages()
    return { paths, fallback: 'blocking' }
}

export default Pages
