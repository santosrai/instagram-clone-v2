import React from 'react'
import Post from './Post'

export default function Posts() {
    const DUMMYDATA = [
        {
            id: 1,
            username: 'John Doe',
            userImg: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
            img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            caption: 'A caption'
        },
        {
            id: 2,
            username: 'John Doe',
            userImg: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
            img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            caption: 'A caption'
        },
    ]

    return (
        <div>
            {DUMMYDATA.map(post => (
                <Post key={post.id} {...post} />
            ))}
            
        </div>
    )
}
