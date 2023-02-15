import React, { useState } from 'react'
import Articles from './Articles'
import { sortTitle, sortUpVoted, sortRecent } from './utils'

const App = ({ articles }) => {
    const [items, setItems] = useState(sortTitle(articles))

    const handleUpVoted = () => {
        setItems([...sortUpVoted(articles)])
    }

    const handleRecent = () => {
        setItems([...sortRecent(articles)])
    }

    return (
        <div>
            <div>
                <label>Sort By</label>
                <button onClick={handleUpVoted}>Most Upvoted</button>
                <button onClick={handleRecent}>Most Recent</button>
            </div>
            <Articles articleItems={items} />
        </div>
    )
}

export default App
