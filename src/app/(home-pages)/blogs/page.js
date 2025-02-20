import './blogs.scss'
import AllBlogs from '@/components/pages/blogs/all-blogs/all-blogs'
import PreviousBlogs from '@/components/pages/blogs/previous-blogs/previous-blogs'
import RecentBlogs from '@/components/pages/blogs/recent-blogs/recent-blogs'
import React from 'react'

const Blogs = () => {
    return (
        <>
            <div className='blogs'>
                <RecentBlogs />
                <PreviousBlogs />
                <AllBlogs />
            </div>
        </>
    )
}

export default Blogs
