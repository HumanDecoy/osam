import { HeartIcon } from "@heroicons/react/16/solid";
import { LockClosedIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

type PasswordScreenProps = {
  onCorrectPassword: (password: string) => void;
};

export const PASSWORDS = ["kulmedbröllop", "kulmedbrollop"];

export const PasswordScreen: React.FC<PasswordScreenProps> = ({
  onCorrectPassword,
}) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (PASSWORDS.includes(password.toLowerCase())) {
      setSuccess(true);
      setTimeout(() => {
        onCorrectPassword(password);
      }, 1000);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
          {!success ? (
            <LockClosedIcon
              className="h-6 w-6 text-blue-600"
              aria-hidden="true"
            />
          ) : (
            <HeartIcon
              className="h-6 w-6 text-red-600 heart-beat"
              aria-hidden="true"
            />
          )}
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Hej och välkommen!
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Skriv in lösenordet som står på din inbjudan.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Lösenord
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="text"
                  required
                  value={password}
                  onChange={(e) => {
                    setError(false);
                    setPassword(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  placeholder="Skriv in lösenordet"
                />
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600">
                  Fel lösenord, försök igen.
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Fortsätt
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
