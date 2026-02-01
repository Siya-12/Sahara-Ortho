import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import { auth } from "../firebase";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ---------------- GOOGLE LOGIN ---------------- */
 const handleGoogleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    // 🔑 Firebase ID token
    const token = await result.user.getIdToken();

    // 👉 SEND TOKEN TO BACKEND
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const data = await res.json();

    // 👉 SAVE JWT
    localStorage.setItem("token", data.token);

    alert("Login successful ✅");
    // navigate("/dashboard") → later
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

  /* ---------------- PHONE OTP ---------------- */
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        { size: "invisible" }
      );
    }
  };

  const sendOtp = async () => {
    if (!phone) return alert("Enter phone number");

    try {
      setLoading(true);
      setupRecaptcha();
      const appVerifier = window.recaptchaVerifier;

      const result = await signInWithPhoneNumber(
        auth,
        `+91${phone}`,
        appVerifier
      );

      setConfirmationResult(result);
      alert("OTP sent successfully 📩");
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
  if (!otp) return alert("Enter OTP");

  try {
    setLoading(true);

    const result = await confirmationResult.confirm(otp);

    // 🔑 Firebase ID token
    const token = await result.user.getIdToken();

    // 👉 SEND TOKEN TO BACKEND
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const data = await res.json();

    // 👉 SAVE JWT
    localStorage.setItem("token", data.token);

    alert("Login successful ✅");
  } catch (error) {
    console.error(error);
    alert("Invalid OTP");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      {/* <Topbar />
      <Navbar /> */}

      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white shadow-xl rounded-xl p-8">
          
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Welcome to Sahara Ortho
          </h2>

          <p className="text-center text-gray-500 mt-2">
            Sign in to order orthopaedic solutions
          </p>

          {/* GOOGLE LOGIN */}
          <button
            onClick={handleGoogleLogin}
            className="mt-6 w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
              alt="google"
            />
            <span className="font-medium">Continue with Google</span>
          </button>

          {/* DIVIDER */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t" />
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t" />
          </div>

          {/* PHONE LOGIN */}
          {!confirmationResult ? (
            <>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <button
                onClick={sendOtp}
                disabled={loading}
                className="mt-4 w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
              >
                {loading ? "Sending OTP..." : "Continue with Phone"}
              </button>
            </>
          ) : (
            <>
              <input
                type="number"
                placeholder="Enter OTP"
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />

              <button
                onClick={verifyOtp}
                disabled={loading}
                className="mt-4 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </>
          )}

          <div id="recaptcha-container"></div>

          <p className="text-xs text-gray-400 mt-6 text-center">
            By continuing, you agree to Sahara Ortho’s Terms & Privacy Policy
          </p>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}