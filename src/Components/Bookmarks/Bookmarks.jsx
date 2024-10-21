import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks , readingTime}) => {
    return (
        
        <div className="bg-[#11111110] px-2 space-y-2 py-5 rounded-xl w-full md:w-[35%] border-2 border-blue-50">
            <div className='font-bold text-center text-purple-600 border-2 border-purple-600 bg-[#7e5b961f] rounded-xl p-2'>
                <h1 className="text-xl">Reading Time : {readingTime}</h1>
            </div>
            {
                bookmarks.map((bookmark , idx)=> <Bookmark bookmark={bookmark} key={idx}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;