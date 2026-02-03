import User from "../models/userModel.js";

export const getMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "name email phone role createdAt"
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
