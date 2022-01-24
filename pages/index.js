import { Banner, Masthead, Ublock } from '@marceloglacial/rds-beta';
import PageLayout from '../components/PageLayout/PageLayout';
import data from 'data/sites.json';

const Home = (props) => {
  return (
    <>
      <Masthead title='Carleton University' />
      <PageLayout>
        <Banner title='Sites' />
        <Ublock>
          <ol>
            {data?.map((site, index) => (
              <li key={index}>
                <a href={site.path}>{site.name}</a>
              </li>
            ))}
          </ol>
        </Ublock>
      </PageLayout>
    </>
  );
};

export default Home;
