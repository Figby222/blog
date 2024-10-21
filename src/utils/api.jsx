import { useState, useEffect } from "react";

const apiLink = "http://localhost:6464/api/v1";

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

export { useBlogPostData };