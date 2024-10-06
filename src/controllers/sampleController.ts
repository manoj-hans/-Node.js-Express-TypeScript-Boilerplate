import { Request, Response } from "express";
import { SampleService } from "../services/sampleService";
import { logger } from "../utils/logger";

const sampleService = new SampleService();

export const createSample = async (req: Request, res: Response) => {
  try {
    const { name, description, password } = req.body;
    const sample = await sampleService.createSample(
      name,
      description,
      password
    );
    res.status(201).json(sample);
  } catch (error) {
    logger.error("Error creating sample:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getSample = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const sample = await sampleService.getSampleById(id);
    if (sample) {
      res.json(sample);
    } else {
      res.status(404).json({ error: "Sample not found" });
    }
  } catch (error) {
    logger.error("Error getting sample:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateSample = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { name, description } = req.body;
    const sample = await sampleService.updateSample(id, name, description);
    if (sample) {
      res.json(sample);
    } else {
      res.status(404).json({ error: "Sample not found" });
    }
  } catch (error) {
    logger.error("Error updating sample:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteSample = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const result = await sampleService.deleteSample(id);
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Sample not found" });
    }
  } catch (error) {
    logger.error("Error deleting sample:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
