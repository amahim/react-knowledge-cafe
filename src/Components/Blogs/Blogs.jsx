import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";



const Blogs = ({handleAddToBookmark,handleMarkAsRead}) => {

    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="bg-[#11111110] py-5 w-full md:w-[65%] border-2 border-blue-50 rounded-xl">
            {/* <h1 className="text-2xl">Blogs {blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog 
                     key={blog.id} 
                     blog={blog}
                     handleAddToBookmark={handleAddToBookmark}
                     handleMarkAsRead={handleMarkAsRead}
                     ></Blog>)
            }
        </div>
    );
};


Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func

}
export default Blogs;