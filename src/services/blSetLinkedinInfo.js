import scrapedin from 'scrapedin';
import { linkedinUser, linkedinPass, linkedinUrl, firebaseCollection, firebaseDoc } from '../config';
import firebase from '../infra/firebase';

const _sanitize = ({ profile }) => {
  return Object.keys(profile).reduce((acc, key) => {
    const value = profile[key];

    if (value || value === 0 || value === false) {
      acc[key] = value;
    }

    return acc;
  }, {});
};

const blSetLinkedinInfo = async () => {
  const profileScrapper = await scrapedin({ email: linkedinUser, password: linkedinPass });
  const profile = await profileScrapper(linkedinUrl);

  const cleanProfile = _sanitize({ profile });

  return await firebase
    .collection(firebaseCollection)
    .doc(firebaseDoc)
    .set(cleanProfile);
};

export default blSetLinkedinInfo;
