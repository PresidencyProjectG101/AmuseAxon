import express from 'express'
import {
  createChat,
  findChat,
  userChats,
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  removeFromGroup,
  addToGroup,
} from "../controllers/ChatController.js";
const router = express.Router()

router.post('/', createChat);
router.get('/:userId', userChats);
router.get('/find/:firstId/:secondId', findChat);
// ========================================================
// router.route("/").post(accessChat);
// router.route("/").get(fetchChats);
// router.route("/group").post(createGroupChat);
// router.route("/rename").put(renameGroup);
// router.route("/groupremove").put(removeFromGroup);
// router.route("/groupadd").put(addToGroup);

export default router