import express from "express";
import Test from '../controllers/test'
const router = express.Router();

// You can require and use your routes here ;)
const test:Test =new Test()
router.get('/',test.testGet)
router.post('/',test.testPost)
export default router;