import { Router } from "express";
import registerUser, {
    changeCurrentPassword,
    getCurrentUser,
    getUserChannelProfile,
    getWatchHistory,
    loginUser,
    logoutUser,
    refreshAccessToken,
    updateAccountDetails,
    updateAvatar,
    updateCover,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1,
        },
        {
            name: "coverImage",
            maxCount: 1,
        },
    ]),
    registerUser
);

router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/current-User").get(verifyJWT, getCurrentUser);
router.route("/update-account-details").patch(verifyJWT, updateAccountDetails);

router
    .route("/update-Avatar")
    .patch(verifyJWT, upload.single("avatar"), updateAvatar);
router
    .route("/update-Cover")
    .patch(verifyJWT, upload.single("coverImage"), updateCover);

//to get user profile
router.route("/c/:username").get(verifyJWT, getUserChannelProfile); //when you are using params
router.route("/watchHistory").get(verifyJWT, getWatchHistory);

export default router;
