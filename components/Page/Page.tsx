import { Banner, Masthead, Ublock } from '@marceloglacial/rds-beta'
import PageHeader from 'components/PageHeader/PageHeader'

interface PageProps {
    pageData: {
        title: {
            rendered: string
        }
        blocks: { blockName: string; innerHTML: string }[]
    }
    siteData: {
        slug: string
        name: string
        description: string
        keywords: string
        image: string
        favicon: string
        banner: any
    }
    menus: {
        site: string
        menu: {
            text: string
            link: string
        }[]
    }[]
}

const Page: React.FC<PageProps> = (props): JSX.Element => {
    const { siteData, pageData } = props
    const { blocks } = pageData

    return (
        <>
            <PageHeader title={pageData.title.rendered} {...siteData} />
            <Masthead title={siteData.name}> </Masthead>
            <header>
                <Banner title={pageData.title.rendered} />
            </header>
            {blocks.map(
                (item, index): JSX.Element => (
                    <Ublock key={index}>
                        <div
                            dangerouslySetInnerHTML={{ __html: item.innerHTML }}
                        />
                    </Ublock>
                )
            )}
        </>
    )
}

export default Page
