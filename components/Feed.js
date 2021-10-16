import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

export default function Feed() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            
            <section>
                {/* stories */}
                <Stories/>
                {/* posts */}
                <Posts/>
            </section>

     
            <section>
                {/* mini profile */}
                {/* Suggestions */}
            </section>
            
        </div>
    )
}
