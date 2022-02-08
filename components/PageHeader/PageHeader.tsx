import Head from 'next/head'

interface PageHeaderProps {
    name: string
    title?: string | undefined
    description: string
    keywords: string
    image: string
    favicon: string
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    const { name, description, title, keywords, image, favicon } = props
    return (
        <Head>
            <title>
                {name} {title && ` - ${title}`}
            </title>
            <meta name='robots' content='index, follow' />
            <meta name='description' content={description || ''} />
            <meta name='keywords' content={keywords} />
            <meta property='og:title' content={name} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={image} />
            <link rel='apple-touch-icon' href={image} />
            <link rel='icon' type='image/png' href={favicon} />
        </Head>
    )
}
export default PageHeader
