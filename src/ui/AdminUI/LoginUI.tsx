/* eslint-disable no-unused-vars */
'use client'
import { useEffect, useState } from "react";
import { useFormState,useFormStatus } from "react-dom";
import { toast } from "react-toastify";

// 👉 Icônes Heroicons
import { HiUser, HiEye, HiEyeOff } from "react-icons/hi";
import { Login } from "@/lib/service/customerService";
import { useRouter } from "next/navigation";
import { redirect, useSearchParams } from "next/navigation";
import { ActionResult } from "@/lib/asset/definitions";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 toggle MDP
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  

  const {pending} = useFormStatus()
  const [state, formAction] = useFormState(Login,undefined)
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect') || '/dashboard'
  
  useEffect(() => {
    if (state?.success) {
      console.log(state.success)
      router.replace(redirect);
      router.refresh()
    }
    if(state?.error)
    {
      setErrorMessage(state.error)
      console.log(state.error)
    }
   
  }, [state?.success,state?.error,router, redirect]);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Identification Administrateur
          </h2>
          <form action={formAction}>
            {/* Champ utilisateur */}
            <div className="mb-4 relative">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nom d&apos;utilisateur
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                disabled={loading}
              />
              {/* Icône user à droite */}
              <HiUser className="h-5 w-5 text-gray-500 absolute right-3 top-9" />
            </div>

            {/* Champ mot de passe */}
            <div className="mb-6 relative">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Mot de passe
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
              {/* Bouton toggle visibilité */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500"
              >
                {showPassword ? (
                  <HiEyeOff className="h-5 w-5" />
                ) : (
                  <HiEye className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Bouton connexion */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={pending}
                className={`${
                  pending
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center`}
              >
                {pending ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Connexion...
                  </>
                ) : (
                  "S'identifier"
                )}
              </button>
            </div>
          </form>

          {/* Message d'erreur */}
          <div className="text-center mt-4 text-sm">
            { state?.error&& (
              <p className="text-center text-red-700 mt-5 text-sm">
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
