import express from 'express';
import { getLinkedinInfo, getGithubInfo, setLinkedinInfo } from '../handlers';

const router = new express.Router();

router.route('/linkedin').get(getLinkedinInfo);

router.route('/github').get(getGithubInfo);

router.route('/update-linkedin').get(setLinkedinInfo);

const routes = {
  '/': router,
};

export default routes;
