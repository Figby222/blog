import { useState, useEffect } from "react";

const apiLink = "http://localhost:6464/api/v1";
const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzI5NDkyODg2LCJleHAiOjE3Mjk1NzkyODZ9.B_amsPv1uKtDZzSVpIGD9gQOczwe5C9n2ivn3g8iAkU";

const useBlogPostData = (postId) => {
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ data, setData ] = useState(null);

    useEffect(() => {
        fetch(`${apiLink}/posts/${postId}`, { mode: "cors" })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setData({
                    id: response.id,
                    title: response.title,
                    text: response.text,
                    timestamp: response.timestamp,
                    comments: response.comments
                })
            })
            .catch((err) => setError(err))
            .finally(() => {
                setLoading(false)
            })
    }, [ postId ])

    return { error: error, loading: loading, data: data };
}

const createComment = async (postId, commentText) => {
    try {
        const response = await fetch(`${apiLink}/posts/${postId}/comments`, {
            mode: "cors",
            body: JSON.stringify({ text: commentText }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`
            },
            method: "POST"
        })

        const data = await response.json();

        console.log(data);

    
        return { message: data.message }

    } catch (err) {
        console.error(err);
    }
}

const useBlogsListData = () => {
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ data, setData ] = useState(null);
    
    const blogData = {
        blogs: data
    }

    useEffect(() => {
        fetch(`${apiLink}/posts`, { mode: "cors" })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setData(response)
            })
            .catch((err) => setError(err))
            .finally(() => {
                setLoading(false);
            })
    }, []);

    return { error: error, loading: loading, data: blogData }
}

export { useBlogPostData, createComment, useBlogsListData };