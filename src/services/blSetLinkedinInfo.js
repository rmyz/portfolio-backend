import scrapedin from 'scrapedin-browserless';

import { linkedinUser, linkedinPass, linkedinUrl, firebaseCollection, firebaseDoc } from '../config';
import firebase from '../infra/firebase';
import formatProfile from '../views/formatProfile';

const blSetLinkedinInfo = async () => {
  const profileScrapper = await scrapedin({ email: linkedinUser, password: linkedinPass });
  const profile = await profileScrapper(linkedinUrl);

  const formattedProfile = formatProfile({ profile });

  await firebase.collection(firebaseCollection).doc(firebaseDoc).set(formattedProfile);

  return 'Linkedin data was updated successfully';
};

export default blSetLinkedinInfo;
