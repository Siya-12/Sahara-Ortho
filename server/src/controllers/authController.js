import admin from "../config/firebase.js";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const firebaseLogin = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ message: "Token missing" });
    }

    // 1. Verify Firebase token
    const decodedToken = await admin.auth().verifyIdToken(token);

    const { uid, name, email, phone_number } = decodedToken;

    // 2. Find or create user
    let user = await User.findOne({ firebaseUid: uid });

    if (!user) {
      user = await User.create({
        firebaseUid: uid,
        name: name || "Sahara Ortho User",
        email: email || null,
        phone: phone_number || null,
      });
    }

    // 3. Create JWT
    const jwtToken = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 4. Send response
    res.json({
      success: true,
      token: jwtToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Auth Error:", error);
    res.status(401).json({ message: "Invalid Firebase token" });
  }
};