const _formatEducations = ({ educations }) => {
  return educations.map(education => {
    const { fieldofstudy: fieldOfStudy = '', date1: startDate, date2: endDate, title, degree } = education;

    return { fieldOfStudy, startDate, endDate, title, degree };
  });
};

const _formatPositions = ({ positions }) => {
  return positions.map(position => {
    const { description } = position;

    const newDescription = description.split('·');
    const methodologies = newDescription[1];
    const backend = newDescription[2];
    const frontend = newDescription[3];

    return { ...position, description: { methodologies, backend, frontend } };
  });
};

const formatProfile = ({ profile }) => {
  const { educations, profile: linkedinProfile, positions } = profile;
  const { summary, location, headline, imageurl: imageUrl } = linkedinProfile;

  const formattedEducations = _formatEducations({ educations });
  const formattedPositions = _formatPositions({ positions });

  return {
    educations: formattedEducations,
    profile: { imageUrl, summary, location, headline },
    positions: formattedPositions,
  };
};

export default formatProfile;
