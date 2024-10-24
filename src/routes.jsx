import App from "./App.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import BlogPost from "./components/BlogPost.jsx";
import Blogs from "./components/Blogs.jsx";
import SignUpPage from "./components/SignUpPage.jsx";
import LogInPage from "./components/LogInPage.jsx";
import { useBlogPostData, createComment, useBlogsListData, createAnAccount, logInUser } from "./utils/api.jsx";
import { storeBearerToken, getBearerToken } from "./utils/storage.jsx";
const postId = 4;

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/posts/:postId",
        element: <BlogPost useAllData={useBlogPostData} postId={postId} createComment={createComment} getBearerToken={getBearerToken} />
    },
    {
        path: "/posts",
        element: <Blogs useAllData={useBlogsListData} />
    },
    {
        path: "/sign-up",
        element: <SignUpPage createAnAccount={createAnAccount} />
    },
    {
        path: "/log-in",
        element: <LogInPage logInUser={logInUser} storeBearerToken={storeBearerToken} />
    }
];

export default routes;