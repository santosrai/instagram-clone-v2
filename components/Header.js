import React from 'react'
import Image from 'next/image'
import { HeartIcon, HomeIcon, MenuIcon, PaperAirplaneIcon, PlusCircleIcon, UserGroupIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/client';

export default function Header() {

    const loggedIn = false;
    const {data:session} = useSession();

    return (

            <div class="border-b px-4 py-2 bg-white shadow-sm">
            <div class="flex flex-wrap items-center justify-between md:justify-around">
                {/* <!-- logo --> */}
                <img class="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png" alt="instagram"/>

                {/* <!-- search--> */}
                <div class="max-w-xs">
                    <div class="relative hidden sm:block text-gray-500">
                    <input class="search-bar max-w-xs border round-md bg-gray-200 px-4
                            text-center outline-none focus:border-gray-400 round-md" type="search" placeholder="Search"/>
                    <i class="fa fa-search absolute top-0 left-0 ml-12 mt-1"></i>
                    </div>
                </div>
                {/* hide div of class space-x-4 if logged in */}
            {loggedIn ? (
                <div class="space-x-4">
                <a class="inline-block bg-blue-500 px-2 py-1 text-white font-semibold 
                                    text-sm rounded" href="#">Log In</a>
                <a class="inline-block text-blue-500 font-semibold text-sm" href="#">Sign Up</a>
                </div>
            ) : (
                <div class="flex items-center justify-end space-x-4">
                <HomeIcon className="navBtn"/>
                <MenuIcon className="h-6 md:hidden cursor-pointer"/>
                <div class="relative">
                    <PaperAirplaneIcon className="navBtn rotate-45"/>
                    <div className="absolute -top-1 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
                </div>
                <PlusCircleIcon className="navBtn"/>
                <UserGroupIcon className="navBtn"/>
                <HeartIcon className="navBtn"/>
                {/* get placeholder icon */}
               
                <img src="https://via.placeholder.com/120" alt="" className="h-6 w-6 rounded-full border-2 border-white bg-white mr-2" />
                <a class="navBtn inline-block bg-blue-500 px-2 py-1 text-white font-semibold
                                    text-sm rounded" href="#">Log Out</a>
                </div>
            )}

            </div>
            </div>
    )
}
