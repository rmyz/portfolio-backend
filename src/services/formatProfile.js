import formatPositions from './formatPositions';

const _formatEducations = ({ educations }) => {
  return educations.map(education => {
    const { fieldofstudy: fieldOfStudy = '', date1: startDate, date2: endDate, title, degree } = education;

    return { fieldOfStudy, startDate, endDate, title, degree };
  });
};

const formatProfile = ({ profile }) => {
  const { educations, profile: linkedinProfile, positions } = profile;
  const { summary, location, headline, imageurl: imageUrl } = linkedinProfile;

  const formattedEducations = _formatEducations({ educations });
  const formattedPositions = formatPositions({ positions });

  return {
    educations: formattedEducations,
    profile: { imageUrl, summary, location, headline },
    positions: formattedPositions,
  };
};

export default formatProfile;
