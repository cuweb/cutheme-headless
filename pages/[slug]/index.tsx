import { GetStaticPaths, GetStaticProps } from 'next'
import Page from 'components/Page/Page'
import { ParsedUrlQuery } from 'querystring'
import getAllHomePages from 'functions/getAllHomePages'
import getSites from 'functions/getSites'
import getPages from 'functions/getPages'

interface IParams extends ParsedUrlQuery {
    slug: string
    url: string
}

const Pages = (props: any) => <Page {...props} />

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as IParams
    const siteData = await getSites(slug)
    const pageData = await getPages(slug, 'homepage')
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
    const paths = await getAllHomePages()
    return { paths, fallback: 'blocking' }
}

export default Pages
