import { ButtonCTA, TextImage, Ublock } from '@marceloglacial/rds-beta';

const Content = (props) => {
  const { blockName, attrs, innerHTML } = props;
  const denyList = [
    'cutheme-blocks/banner',
    'cutheme-blocks/spotlight',
    'cutheme-blocks/imagetile',
    'cutheme-blocks/textcolumn',
    'cutheme-blocks/fullwidthimage',
  ];

  if (denyList.includes(blockName) || !blockName) return null;
  console.log(blockName, attrs);

  const blockTypes = {
    'cutheme-blocks/button': (
      <center>
        <ButtonCTA text={attrs.title} link={attrs.link} target={attrs.target} />
      </center>
    ),
  };

  return (
    <Ublock>
      {blockTypes[blockName] || (
        <div dangerouslySetInnerHTML={{ __html: innerHTML }} />
      )}
    </Ublock>
  );
};

export default Content;
