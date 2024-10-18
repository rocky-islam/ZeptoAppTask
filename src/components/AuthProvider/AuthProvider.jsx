import { createContext, useState } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [wishlist, setWishlist] = useState([]);

    const authInfo ={wishlist, setWishlist}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;