import App from "./App.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import BlogPost from "./components/BlogPost.jsx";
import Blogs from "./components/Blogs.jsx";
import SignUpPage from "./components/SignUpPage.jsx";
import { useBlogPostData, createComment, useBlogsListData, createAnAccount } from "./utils/api.jsx";
const postId = 4;

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/posts/:postId",
        element: <BlogPost useAllData={useBlogPostData} postId={postId} createComment={createComment} />
    },
    {
        path: "/posts",
        element: <Blogs useAllData={useBlogsListData} />
    },
    {
        path: "/sign-up",
        element: <SignUpPage createAnAccount={createAnAccount} />
    }
];

export default routes;