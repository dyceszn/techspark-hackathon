import { ChangeEvent, FC, FormEvent } from "react";
import { useState } from "react";
import { auth, db } from "../../firebase";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  AuthProvider,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import google from "../assets/google.svg"
import facebook from "../assets/facebook.svg"

const handleOAuthSignup = async (provider: AuthProvider) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    await setDoc(
      doc(db, "users", user.uid),
      {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL || null,
        createdAt: new Date().toISOString(),
        provider: provider.providerId.split(".")[0], // "google" or "facebook"
      },
      { merge: true }
    );

    console.log("Signed up as:", user.displayName);
  } catch (err) {
    console.error("OAuth Signup Error:", err);
  }
};


const SignUp: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSignup = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      await setDoc(
        doc(db, "users", user.uid),
        {
          displayName: name,
          email: user.email,
          photoURL: null,
          createdAt: new Date().toISOString(),
          provider: "email",
        },
        { merge: true }
      );

      console.log("Signed up as:", name);
    } catch (err) {
      console.error("Email Signup Error:", err);
    }
  };

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  return (
    <div className="flex flex-col items-center justify-center  min-h-screen">
      <div className="w-full rounded-lg shadow-lg p-6 max-w-xs bg-gray-300">
        <h2 className="text-xl font-semibold text-center mb-6">SignUp</h2>

        <button
          className="flex px-2 py-1 mb-2 space-x-3 items-center w-full rounded-lg bg-gray-400"
          onClick={() => handleOAuthSignup(googleProvider)}
        >
          <img src={google} className="block h-7" />
          <p className="text-white font-semibold">Sign up with Google</p>
        </button>
        <button
          className="flex px-2 py-1 space-x-3 mb-3 items-center w-full rounded-lg bg-gray-400"
          onClick={() => handleOAuthSignup(facebookProvider)}
        >
          <img src={facebook} className="block h-7" />
          <p className="text-white font-semibold">Sign up with Facebook</p>
        </button>

        <p className="text-center font-semibold">OR</p>

        <form onSubmit={handleEmailSignup}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              className="bg-white w-full px-3 py-2 border rounded-lg"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="bg-white w-full px-3 py-2 border rounded-lg"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold font-medium mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              className="bg-white w-full py-2 px-3 border rounded-lg"
              name="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button
            className="text-white w-full bg-blue-500 py-2 rounded-lg"
            type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
