import express from 'express';

import { getPost , creatPost } from '../controllers/post.js';
 
const router = express.Router();

router.get('/' , getPost);

router.post('/creatPost' , creatPost);

export default router;