import PropTypes from 'prop-types';


const Bookmark = ({bookmark}) => {
    const{title} = bookmark;
    return (
        <div className="rounded-xl bg-white  p-2">
             <h3 className='md:text-2xl text-xl'>{title}</h3>   
        </div>
    );
};


Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;