import { EmojiHappyIcon, HeartIcon, ShareIcon } from '@heroicons/react/solid'
import React from 'react'


function Post({id,username,userImg, caption, img}) {
    return (
        <div>
            {/* Header */}
            <div className="flex items-center p-5">
                <img className=" rounded-full" src={userImg} alt=""/>
                <p className="flex-1 font-bold">{username}</p>
            </div>
            {/* img */}
            <img className="post__image" src={img} alt=""/>
            {/* Buttons */}
            <div className="flex items-center p-5 space-x-2 ">
                <HeartIcon className="h-4 w-4"/>
                <ShareIcon className="h-4 w-4"/>
                
            </div>
            {/* Captions */}
            <div className="">
            <p className="flex-1">{caption}</p>
            </div>
            {/* Comments */}   
             {/*input box  */}
             <form className="flex items-center p-5">
                <EmojiHappyIcon className="h-5 w-5"/>
                <input className="flex-1" type="text" placeholder="Add a comment..."/>
                <button>Post</button>
            </form>

        </div>
    )
}


export default Post

