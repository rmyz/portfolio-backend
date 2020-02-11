import request from 'superagent';
import { githubApiKey, githubApiUrl } from '../config';

const blGetGithubInfo = async () => {
  const query = ` 
    query {
      viewer {
        pinnedItems(first: 6) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
            }
          }
        }
      }
    }`;

  const { body: result } = await request
    .post(githubApiUrl)
    .set('Authorization', `bearer ${githubApiKey}`)
    .set('User-Agent', 'request')
    .send(JSON.stringify({ query }));

  return result;
};

export default blGetGithubInfo;
