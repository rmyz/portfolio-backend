import genericHandler from './genericHandler';
import { blSetLinkedinInfo } from '../services';

const setLinkedinInfo = async (req, res, next) => {
  genericHandler({
    blFunction: blSetLinkedinInfo,
    res,
    req,
    next,
  })();
};

export default setLinkedinInfo;
