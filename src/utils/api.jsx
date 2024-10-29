import { useState, useEffect } from "react";

const apiLink = "http://localhost:6464/api/v1";

const useBlogPostData = (postId) => {
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ data, setData ] = useState(null);

    useEffect(() => {
        fetch(`${apiLink}/posts/${postId}`, { mode: "cors" })
            .then(async (response) => {
                const data = await response.json();

                if (response.status > 400) {
                    const error = new Error(data.message)
                    error.status = response.status;
                    throw error;
                }

                return data;
            })
            .then((response) => {
                setData({
                    id: response.id,
                    title: response.title,
                    text: response.text,
                    timestamp: response.timestamp,
                    comments: response.comments,
                    creator: response.creator,
                })
            })
            .catch((err) => setError(err))
            .finally(() => {
                setLoading(false)
            })
    }, [ postId ])

    return { error: error, loading: loading, data: data };
}

const createComment = async (postId, commentText, bearerToken) => {
    try {
        const response = await fetch(`${apiLink}/posts/${postId}/comments`, {
            mode: "cors",
            body: JSON.stringify({ text: commentText }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": bearerToken
            },
            method: "POST"
        })

        const data = await response.json();
        
        if (response.status > 400) {
            const error = new Error(data.message);
            error.status = response.status;
            throw error;
        }

        console.log(data);

    
        return { message: data.message, errors: data.errors }

    } catch (err) {
        return {
            error: err
        }
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
            .then(async (response) => {
                const data = await response.json();

                if (response.status > 400) {
                    const error = new Error(data.message);
                    error.status = response.status;
                    throw error;
                }
                return data;
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

const createAnAccount = async (username, email, password, confirmPassword) => {
    try {
        const response = await fetch(`${apiLink}/users`, {
            mode: "cors",
            body: JSON.stringify({ username: username, email: email, password: password, confirmPassword: confirmPassword }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });

        
        const data = await response.json();
        
        if (response.status > 400) {
            const error = new Error(data.message);
            error.status = response.status;
            throw error;
        }

        console.log(data);

        return { data, errors: data.errors };
    } catch (err) {
        return {
            error: err
        }
    }
}

const logInUser = async (username, email, password) => {
    try {
        const response = await fetch(`${apiLink}/users/log-in`, {
            mode: "cors",
            body: JSON.stringify({ username: username, email: email, password: password }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });

        
        console.log(response.headers.get("Authorization"));
        
        const data = await response.json()
        
        console.log(data);
        if (response.status > 400) {
            const error = new Error(data.message);
            error.statusCode = response.status;
            throw error;
        }
        
        const authToken = response.headers.get("Authorization");
        
        return { token: authToken, message: data.message, errors: data.errors }
    } catch(err) {
        return { 
            error: err
        };
    }


}

export { useBlogPostData, createComment, useBlogsListData, createAnAccount, logInUser };