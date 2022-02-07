import {
    Layout,
    Aside,
    Main,
    Banner,
    FooterSitemap,
    FooterBrand,
    Masthead,
} from '@marceloglacial/rds-beta'
import PageSideBar from 'components/PageSidebar/PageSidebar'
import PageHeader from 'components/PageHeader/PageHeader'

interface PageLayoutProps {
    title: string
    subtitle?: string
    description: string
    keywords: string
    image: string
    favicon: string
    type?: string
    banner: {
        title: string
    }
}

const PageLayout: React.FC<PageLayoutProps> = (props) => {
    const { title, banner, children } = props

    return (
        <>
            <PageHeader {...props} />
            <Masthead title={title}>
                <p>menu here</p>
            </Masthead>
            <header>
                <Banner title={banner.title} />
            </header>
            <Layout type='am'>
                <Aside>
                    <PageSideBar />
                </Aside>
                <Main>{children}</Main>
            </Layout>
            <footer>
                <FooterSitemap />
                <FooterBrand />
            </footer>
        </>
    )
}
export default PageLayout
