import express from 'express';

import crud from './crud';

const router = express.Router()

router.use('/', crud);

export default router