import React, { useState } from "react";
import Login from "./Login";
import BoMainpage from "./Backofice/BoMainpage";

function AdminPage() {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <>
            {isAuth ? (
                <BoMainpage />
            ) : (
                <Login setIsAuth={auth => setIsAuth(auth)} />
            )}
        </>
    );
}

export default AdminPage;
