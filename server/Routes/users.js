import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} from "../Controllers/user.js";

const router = express.Router();

router.put("/:id", verifyToken, update);
router.delete("/:id", verifyToken, deleteUser);
router.get("/find/:id", getUser);
router.put("/sub/:id", verifyToken, subscribe); //this is the id of the channel which we want to subscribe.
router.put("/unsub/:id", verifyToken, unsubscribe); //this is the id of the channel which we want to unsubscribe.
router.put("/like/:videoId", verifyToken, like);
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;