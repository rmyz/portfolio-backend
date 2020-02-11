import genericHandler from './genericHandler';
import { blGetGithubInfo } from '../services';

const getGithubInfo = async (req, res, next) => {
  genericHandler({
    blFunction: blGetGithubInfo,
    req,
    res,
    next,
  })();
};

export default getGithubInfo;
