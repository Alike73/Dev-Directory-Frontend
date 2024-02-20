// import LoginPage from "../login-page/LoginPage";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { BubblyContainer } from "react-bubbly-transitions";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import SidebarToggler from "../../components/sidebar-toggler/SidebarToggler";
import HomePage from "../home-page/HomePage";
import HtmlCssQnA from "../html-css-page/HtmlCssQnA";
import JavaScriptQnA from "../js-page/JavaScriptQnA";
import ReactQnA from "../react-page/ReactQnA";
import NodeJsQnA from "../nodejs-page/NodeJsQnA";
import MongodbQnA from "../mongodb-page/MongodbQnA";
import GitHubQnA from "../github-page/GitHubQnA";
import ScrollBtn from "../../components/scrollbtn/ScrollBtn";
import dividerTop from '../../assets/images/divider-round-top.svg';
import Footer from "../../components/footer/Footer";


const Main = ({ myPassword }) => {
    
    return (
        <div className="main">
            {/* <LoginPage /> */}
            <SidebarToggler />
            <ScrollBtn />

            <BrowserRouter>
                    <BubblyContainer />
                    <Routes>
                    
                        <Route
                        path="/"
                        element={
                            <>
                            <Header />
                            <Sidebar />
                            <Outlet />
                            </>
                        }
                        >
                            <Route index element={<HomePage myPassword = { myPassword } />} />
                            <Route path="html_css" element={<HtmlCssQnA />} />
                            <Route path="javascript" element={<JavaScriptQnA />} />
                            <Route path="react" element={<ReactQnA />} />
                            <Route path="nodejs" element={<NodeJsQnA />} />
                            <Route path="mongodb" element={<MongodbQnA />} />
                            <Route path="github" element={<GitHubQnA />} />
                            <Route path="*" element={<>No Match</>} />
                        </Route>
                    </Routes>
                    <img className='divider_rounded_top' src={ dividerTop } alt="divider-rounded-top" />
                    <Footer />
                </BrowserRouter>
        </div>
    )
};

export default Main;