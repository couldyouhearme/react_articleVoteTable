import React from 'react'

const Articles = ({ articleItems }) => {

    const bodyItem = articleItems && articleItems.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.title}</td>
                <td>{item.upvotes}</td>
                <td>{item.date}</td>
            </tr>
        )
    })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Upvotes</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {bodyItem}
                </tbody>
            </table>
        </div>
    )

}

export default Articles
