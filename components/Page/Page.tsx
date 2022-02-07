import Content from 'components/Content/Content'
import PageLayout from 'components/PageLayout/PageLayout'

interface PageProps {
    pageData: [BlocksProps]
}

interface BlocksProps {
    blocks: []
}

const Page: React.FC<PageProps> = (props) => {
    const { pageData } = props
    const { blocks } = pageData
    const banner = blocks.find(
        (block: { blockName: string }) =>
            block.blockName === 'cutheme-blocks/banner'
    ).attrs

    return (
        <PageLayout banner={{ ...banner }}>
            {blocks?.map((block, index) => (
                <Content key={index} {...block} />
            ))}
        </PageLayout>
    )
}

export default Page
