import {BrowserRouter,Route,Routes} from "react-router-dom"

//COMPONENTS

import Header from "../components/Header"
import Footer from "../components/Footer"

//PAGES
import Home from "../pages/Home"
import Author from "../pages/Author"
import AuthorPosts from "../pages/AuthorPosts"
import CategoryPosts from "../pages/CategoryPosts"
import CreatePosts from "../pages/CreatePosts"
import Dashboard from "../pages/Dashboard"
import DeletePost from "../pages/DeletePost"
import EditPost from "../pages/EditPost"
import ErrorPage from "../pages/ErrorPage"
import Login from "../pages/Login"
import Logout from "../pages/Logout"
import PostDetail from "../pages/PostDetail"
import Register from "../pages/Register"
import UserProfile from "../pages/UserProfile"

function Router() {
    return (
        <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/authors" element={<Author/>}/>
                <Route path="/posts/users/:id" element={<AuthorPosts/>}/>
                <Route path="/posts/categories/:category" element={<CategoryPosts/>}/>
                <Route path="/create" element={<CreatePosts/>}/>
                <Route path="/myposts/:id" element={<Dashboard/>}/>
                {/* <Route path="/deletePost" element={<DeletePost/>}/> */}
                <Route path="/posts/:id/edit" element={<EditPost/>}/>
                
                <Route path="/Login" element={<Login/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/posts/:id" element={<PostDetail/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile/:id" element={<UserProfile/>}/>
                <Route path="/errorPage" element={<ErrorPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
            
        </>
    )
}

export default Router
