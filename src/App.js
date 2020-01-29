import React from "react";
import Router from "./Router";
import Layout from "./Layout/Layout";

function App() {
    return (
        <div className="App">
            <Layout>
                <Router />
            </Layout>
        </div>
    );
}

export default App;
