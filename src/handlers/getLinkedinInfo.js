import genericHandler from './genericHandler';
import { blGetLinkedinInfo } from '../services';

const getLinkedinInfo = async (req, res, next) => {
  genericHandler({
    blFunction: blGetLinkedinInfo,
    res,
    req,
    next,
  })();
};

export default getLinkedinInfo;
