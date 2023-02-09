import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import Login from './layouts/components/Login';
import { useSelector } from 'react-redux';
import LayoutDetailVideo from './layouts/LayoutDetailVideo/LayoutDetailVideo';

function App() {
    const modalLogin = useSelector((state) => state.user.modalLogin)
    const modalDetailVideo = useSelector((state) => state.user.modalDetailVideo)
    
    useEffect(()=>{
    },[modalLogin])
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
               {
                modalLogin && <Login/>
               } 
               {
                modalDetailVideo && <LayoutDetailVideo />
               }
            </div>
        </Router>
    );
}

export default App;
