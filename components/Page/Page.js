import { Masthead } from '@marceloglacial/rds-beta';
import Content from 'components/Content/Content';
import PageLayout from 'components/PageLayout/PageLayout';

const Page = (props) => {
  const { pageData = [] } = props;
  const { blocks } = pageData;
  const banner = blocks?.find(
    (block) => block.blockName === 'cutheme-blocks/banner'
  ).attrs;

  return (
    <>
      <Masthead title='Sprott School of Business' />
      <PageLayout banner={{ ...banner }}>
        {blocks?.map((block, index) => (
          <Content key={index} {...block} />
        ))}
      </PageLayout>
    </>
  );
};

export default Page;
