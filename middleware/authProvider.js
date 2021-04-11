const authContext = createContext();

export function AuthProvider({ children }) {
  const auth;
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

//lib/auth.js
export const useAuth = () => {
  return useContext(authContext);
};

//components/SomeComponent.js
const SomeComponent = () => {
  const { user, loading } = useAuth();
  // later we can use the object user to determine authentication status
  // ...
};
