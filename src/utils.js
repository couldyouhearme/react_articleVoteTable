// sort by upvotes number, decending
export const sortUpVoted = (arr) => {
    return arr.sort((a, b) => b.upvotes - a.upvotes)
}

// sort by title string, ascending
export const sortTitle = (arr) => {
    return arr.sort((a, b) => {
        let x = a.title.toLowerCase()
        let y = b.title.toLowerCase()
        if (x < y) { return -1 }
        if (x > y) { return 1 }
        return 0;
    })
}

// sort by date string, decending
export const sortRecent = (arr) => {
    return arr.sort((a, b) => {
        let x = a.date.toLowerCase()
        let y = b.date.toLowerCase()
        if (x < y) { return 1 }
        if (x > y) { return -1 }
        return 0
    })
}