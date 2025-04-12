// import { ChangeEvent, FC } from "react";
// import { useState } from "react";
// import { auth } from "../../firebase";
// import {
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   FacebookAuthProvider,
//   signInWithPopup
// } from "firebase/auth";
// import google from "../assets/google.svg"
// import facebook from "../assets/facebook.svg"

// const Login: FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const googleProvider = new GoogleAuthProvider();
//   const facebookProvider = new FacebookAuthProvider();

//   const signInWithGoogle = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       console.log("Google User:", result.user);
//     } catch (err) {
//       console.error("Google Sign-in Error:", err);
//     }
//   };

//   const signInWithFacebook = async () => {
//     try {
//       const result = await signInWithPopup(auth, facebookProvider);
//       console.log("Facebook User:", result.user);
//     } catch (err) {
//       console.error("Facebook Sign-in Error:", err);
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert("Logged in!");
//     } catch (err) {
//       alert(err);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center  min-h-screen">
//       <div className="w-full rounded-lg shadow-lg p-6 max-w-xs bg-gray-300">
//         <h2 className="text-xl font-semibold text-center mb-6">Login</h2>

//         <button
//           className="flex px-2 py-1 mb-2 space-x-3 items-center w-full rounded-lg bg-gray-400"
//           onClick={signInWithGoogle}
//         >
//           <img src={google} className="block h-7" />
//           <p className="text-white font-semibold">Sign in with Google</p>
//         </button>
//         <button
//           className="flex px-2 py-1 space-x-3 mb-3 items-center w-full rounded-lg bg-gray-400"
//           onClick={signInWithFacebook}
//         >
//           <img src={facebook} className="block h-7" />
//           <p className="text-white font-semibold">Sign in with Facebook</p>
//         </button>

//         <p className="text-center font-semibold">OR</p>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-semibold font-medium mb-1">Email</label>
//             <input
//               type="text"
//               name="email"
//               className="bg-white w-full px-3 py-2 border rounded-lg"
//               value={email}
//               onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
//               placeholder="Email"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-semibold font-medium mb-1" htmlFor="password">Password</label>
//             <input
//               type="password"
//               className="bg-white w-full py-2 px-3 border rounded-lg"
//               name="password"
//               value={password}
//               onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
//               placeholder="Password"
//             />
//           </div>
//           <button
//             className="text-white w-full bg-blue-500 py-2 rounded-lg"
//             type="submit">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login;
