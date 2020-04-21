import scrapedin from 'scrapedin-browserless';

import { linkedinUser, linkedinPass, linkedinUrl, firebaseCollection, firebaseDoc } from '../config';
import firebase from '../infra/firebase';
import sanitize from '../utils/sanitize';

const blSetLinkedinInfo = async () => {
  const profileScrapper = await scrapedin({ email: linkedinUser, password: linkedinPass });
  const profile = await profileScrapper(linkedinUrl);

  const cleanProfile = sanitize(profile);

  await firebase.collection(firebaseCollection).doc(firebaseDoc).set(cleanProfile);

  return 'Linkedin data was updated successfully';
};

export default blSetLinkedinInfo;
