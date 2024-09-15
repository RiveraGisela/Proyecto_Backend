import  express from "express";
import verifyToken from "../middleware/VerifyToken"
import profileController  from "../controllers/profile-controller";

const router= express.Router()

router.get('/',verifyToken, profileController);

export default router;