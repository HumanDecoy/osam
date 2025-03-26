import { useState } from "react";
import { PASSWORDS, PasswordScreen } from "./PasswordScreen";

export interface PasswordWrapperProps {
  children: React.ReactNode;
  storageKey?: string;
}

export const PasswordWrapper: React.FC<PasswordWrapperProps> = ({
  children,
  storageKey = "wedding-site-auth",
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedPassword = localStorage.getItem(storageKey);
    return storedPassword && PASSWORDS.includes(storedPassword.toLowerCase());
  });

  if (!isAuthenticated) {
    return (
      <PasswordScreen onCorrectPassword={() => setIsAuthenticated(true)} />
    );
  }

  return <>{children}</>;
};
