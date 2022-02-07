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
        name: string
        description: string
        keywords: string
        image: string
        favicon: string
        banner: any
    }
}

const Page: React.FC<PageProps> = (props) => {
    const { siteData, pageData } = props
    const { blocks } = pageData

    return (
        <>
            <PageHeader {...siteData} />
            <Masthead title={siteData.name}>
                <p>menu here</p>
            </Masthead>
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
