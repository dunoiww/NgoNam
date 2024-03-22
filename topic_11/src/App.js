import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes from "./routes";
import Layout from "./layout/Layout";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let _Layout = Layout;
                            if (route.Layout) {
                                _Layout = route.Layout;
                            } else if (route.path === null) {
                                _Layout = Fragment;
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <_Layout>
                                            <Page />
                                        </_Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
