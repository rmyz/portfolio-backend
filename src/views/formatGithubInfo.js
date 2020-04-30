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
      primaryLanguage: { name },
      stargazers: { totalCount },
    } = node;

    return { ...node, primaryLanguage: name, stargazers: totalCount };
  });

  return formattedInfo;
};

export default formatGithubInfo;
