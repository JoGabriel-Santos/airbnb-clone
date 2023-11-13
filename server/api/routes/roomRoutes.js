import express from "express";
import { getRooms, getRoomById, publishRoom } from "../controller/roomController.js";

const router = express.Router();

router.get("/getRooms", getRooms);
router.get("/getRoomById/:id_room", getRoomById);
router.post("/publishRoom", publishRoom);

export default router;