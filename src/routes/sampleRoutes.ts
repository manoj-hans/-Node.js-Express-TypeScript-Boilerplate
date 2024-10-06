import { Router } from "express";
import {
  createSample,
  getSample,
  updateSample,
  deleteSample,
} from "../controllers/sampleController";

const router = Router();

router.post("/", createSample);
router.get("/:id", getSample);
router.put("/:id", updateSample);
router.delete("/:id", deleteSample);

export const sampleRoutes = router;
