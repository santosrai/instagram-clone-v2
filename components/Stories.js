import React from 'react'
import faker from 'faker'
import {useState} from 'react'
import {useEffect} from 'react'
import Story from './Story'

export default function Stories() {

    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const suggestions = [...Array(20)].map((_,i) => ({
            ...faker.helpers.contextualCard(),
            id: i
        }));

        setSuggestions(suggestions)

    }, [])

    
    return (
        <div className="flex space-x-2 p-6 bg-white border-grey-200 rounded-sm overflow-x-scroll">
            {suggestions.map(profile => (
               <Story key={profile.id} img={profile.avatar} username={profile.username}/>
)
            )}
        </div>
    )
}
