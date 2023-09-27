import express from "express";
import {
  createUser,
  getAdmins,
  getUserById,
  getUsers,
  deleteUser,
} from "./user.controller";

const router = express.Router();

router.get("/", getUsers);
router.post("/create-user", createUser);
router.get("/admins", getAdmins);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);

export default router;
