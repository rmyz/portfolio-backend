import request from 'superagent';

import { githubApiKey, githubApiUrl } from '../config';
import formatGithubInfo from '../views/formatGithubInfo';

const blGetGithubInfo = async () => {
  const query = ` 
  query {
    viewer {
      repositories(first: 20, orderBy: {field: UPDATED_AT, direction: DESC}, ownerAffiliations: [OWNER], privacy: PUBLIC) {
        nodes {
          ... on Repository {
            name
            description
            url
            isFork
            primaryLanguage {
              name
            }
            stargazers {
              totalCount
            }
            updatedAt
          }
        }
      }
    }
  }`;

  const { body } = await request
    .post(githubApiUrl)
    .set('Authorization', `bearer ${githubApiKey}`)
    .set('User-Agent', 'request')
    .send(JSON.stringify({ query }));

  return formatGithubInfo(body);
};

export default blGetGithubInfo;
