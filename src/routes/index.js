import express from 'express';
import { getLinkedinInfo, getGithubInfo } from '../handlers';

const router = new express.Router();

router.route('/linkedin').get(getLinkedinInfo);

router.route('/github').get(getGithubInfo);

const routes = {
  '/': router,
};

export default routes;
