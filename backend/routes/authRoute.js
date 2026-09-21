import { Router } from "express";
import { adminLogin, adminLogout } from "../controllers/useAuthControllers.js";
const router = Router();

router.post("/admin", adminLogin);
router.post("/admin-logout", adminLogout);

export default router;
