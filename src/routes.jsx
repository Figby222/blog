import App from "./App.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import BlogPost from "./components/BlogPost.jsx";
import { useBlogPostData, createComment } from "./utils/api.jsx";
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
    }
];

export default routes;