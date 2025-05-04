import { useState } from "react";

type PasswordScreenProps = {
  onCorrectPassword: (password: string) => void;
};

export const PASSWORDS = [
  "gren",
  "Gren",
  "GREN",
  "KARN",
  "karn",
  "Karn",
  "karngren",
  "Karngren",
  "grenkarn",
  "Grenkarn",
];

export const PasswordScreen: React.FC<PasswordScreenProps> = ({
  onCorrectPassword,
}) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (PASSWORDS.includes(password.toLowerCase())) {
      onCorrectPassword(password);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Vad heter Amanda eller Oscar i efternamn?
        </h2>
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
