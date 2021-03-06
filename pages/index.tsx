import { GetStaticProps } from 'next'
import {
    Layout,
    FooterSitemap,
    FooterBrand,
    Masthead,
    Ublock,
    Banner,
} from '@marceloglacial/rds-beta'

import PageHeader from 'components/PageHeader/PageHeader'
import Link from 'next/link'
import getSites from 'functions/getSites'

interface HomeProps {
    pageInfo: SiteInfo
    sites: SiteInfo[]
}

interface SiteInfo {
    name: string
    description: string
    keywords: string
    image: string
    favicon: string
    slug: string
}

const Home: React.FC<HomeProps> = (props) => {
    const { pageInfo, sites } = props
    return (
        <>
            <PageHeader {...pageInfo} />
            <Masthead title={pageInfo.name}>.</Masthead>
            <Banner title='cuTheme sites' />
            <Layout>
                <Ublock>
                    <ol>
                        {sites.map((site: SiteInfo, index: number) => (
                            <li key={index}>
                                <Link href={`/${site.slug}`}>
                                    <a>{site.name}</a>
                                </Link>
                            </li>
                        ))}
                    </ol>
                </Ublock>
            </Layout>
            <footer>
                <FooterSitemap />
                <FooterBrand />
            </footer>
        </>
    )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
    const data = await getSites()
    return {
        props: {
            sites: data,
            pageInfo: {
                name: 'Carleton University',
                description: 'cuTheme ',
                keywords: 'cutheme, headless',
                image: 'https://sprott.carleton.ca/wp-content/uploads/CU_Sprott_Logo_Primary_RBG_Red_Black_on_lightBG_300-1024x343.jpg',
                favicon: 'https://carleton.ca/favicon.ico',
                slug: '/',
            },
        },
    }
}
