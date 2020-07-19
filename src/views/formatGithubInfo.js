const formatGithubInfo = githubInfo => {
  const {
    data: {
      viewer: {
        repositories: { nodes },
      },
    },
  } = githubInfo;

  const formattedInfo = nodes.map(node => {
    const {
      primaryLanguage,
      stargazers: { totalCount },
    } = node;

    const { name = '' } = primaryLanguage || {};

    return { ...node, primaryLanguage: name, stargazers: totalCount };
  });

  return formattedInfo;
};

export default formatGithubInfo;
