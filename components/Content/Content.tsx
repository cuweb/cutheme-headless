import { Badge, ButtonCTA, Ublock } from '@marceloglacial/rds-beta'

interface ContentProps {
    blockName: 'cutheme-blocks/button' | 'cutheme-blocks/badge' | undefined
    attrs: AttrsProps
    innerHTML: string
}

interface AttrsProps {
    text: string
    link: string
    target?: string | undefined
    content: string
}

const Content: React.FC<ContentProps> = (props) => {
    const { blockName = 'core', attrs, innerHTML } = props
    const denyList = [
        'cutheme-blocks/banner',
        'cutheme-blocks/spotlight',
        'cutheme-blocks/imagetile',
        'cutheme-blocks/textcolumn',
        'cutheme-blocks/fullwidthimage',
    ]

    if (denyList.includes(blockName)) return null

    const blockTypes = {
        core: <div dangerouslySetInnerHTML={{ __html: innerHTML }} />,
        'cutheme-blocks/button': <ButtonCTA {...attrs} />,
        'cutheme-blocks/badge': <Badge {...attrs} />,
    }

    return <Ublock>{blockTypes[blockName || 'core']}</Ublock>
}

export default Content
