import { useEffect, useState } from "react"
import { AuthContext } from "../context/auth.context";
import toast from "react-hot-toast";

export const AuthContextProviders = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const checkUserLoggedIn = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/auth/check`, { credentials: "include" });
                const data = await res.json();
                setAuthUser(data.user);
            } catch (error) {
                toast.error(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        checkUserLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}


