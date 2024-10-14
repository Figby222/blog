import PropTypes from "prop-types";

const Blogs = ({ useAllData }) => {
    const { error, loading, data } = useAllData();

    if (loading) {
        return <h1 className="loading">Loading...</h1>
    }

    return (
        <>
        {
            data &&
            <>
            <section className="blogs">
                <ul className="blogs-list" aria-label="blogs">
                    { data.blogs.map((blog) => {
                        return <li className="blog" key={blog.id}>
                            <p className="username">{ blog.username }</p>
                            <h2 className="blog-title">{ blog.title }</h2>
                        </li>
                    })}
                </ul>
            </section>
            </>

        }
        </>
    )
};


Blogs.propTypes = {
    useAllData: PropTypes.func.isRequired
}

export default Blogs;