const _formatDescriptions = descriptions => {
  const descriptionsArray = descriptions.split('\n');

  descriptionsArray.pop();

  const descriptionToReturn = descriptionsArray.slice(2).map(item => item.replace('- ', ''));

  if (descriptionToReturn.includes('…')) {
    descriptionToReturn.pop();
  }

  return descriptionToReturn;
};

const formatPositions = ({ positions }) => {
  return positions.map(position => {
    const { description } = position;

    const newDescription = description.split('·');
    const methodologies = newDescription[1];
    const backend = newDescription[2];
    const frontend = newDescription[3];

    const formattedMethodologies = _formatDescriptions(methodologies);
    const formattedBackend = _formatDescriptions(backend);
    const formattedFrontend = _formatDescriptions(frontend);

    return {
      ...position,
      description: { methodologies: formattedMethodologies, backend: formattedBackend, frontend: formattedFrontend },
    };
  });
};

export default formatPositions;
