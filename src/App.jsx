import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

    const [bookmarks,setBookmarks] = useState([])
    const [readingTime,setReadingTime] = useState(0)

    const handleAddToBookmark = blog =>{
        const newBookmarks = [...bookmarks,blog]
        setBookmarks(newBookmarks)
    } 
    const handleMarkAsRead = (id,time) =>{
        setReadingTime(readingTime + time );
        const remainingBookmarks = bookmarks.filter(bookmark =>bookmark.id !== id)
        setBookmarks(remainingBookmarks);
    } 
   
        return (
            <>
                <Header></Header>
                <div className='w-4/5 mx-auto md:flex-row flex flex-col gap-5 py-10 '>
                    <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
                    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
                </div>
            </>  
        )    
    
}

export default App
