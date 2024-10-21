import PropTypes from 'prop-types';
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {id,title,cover,author_img,author,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-5 w-[90%] mx-auto '>
            <img src={cover} className='rounded-xl' />
            <div className='flex justify-between items-center'>
                <div className='md:flex-row flex-col flex gap-2 items-start md:items-center py-3'>
                    <div>
                        <img src={author_img} className='w-[50px] h-[50px] rounded-full' />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">{author}</h3>
                        <h6 className='text-gray-700'>{posted_date}</h6>
                    </div>
                </div>
                <div className='flex gap-1'>
                    <h1 className='text-gray-700'>{reading_time} minute read</h1>
                    <button onClick={()=> handleAddToBookmark(blog)} className='font-bold text-gray-700'><IoBookmarkOutline></IoBookmarkOutline></button>
                </div>
            </div>
            <h2 className="md:text-2xl text-xl font-bold">{title}</h2>
            <div>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx} className='text-blue-500'> <a href="">#{hash}</a></span>)
                }
            </p>
            <button
                onClick={() => handleMarkAsRead(id,reading_time)}
                className='text-purple-800  underline'
                >Mark As Read</button>
            </div>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;