import scrapedin from 'scrapedin';
import { linkedinUser, linkedinPass, linkedinUrl } from '../config';

const blGetLinkedinInfo = async () => {
  const profileScrapper = await scrapedin({ email: linkedinUser, password: linkedinPass });
  const profile = await profileScrapper(linkedinUrl);

  return profile;
};

export default blGetLinkedinInfo;
