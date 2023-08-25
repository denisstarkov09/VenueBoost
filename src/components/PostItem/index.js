import React from 'react'
import FormText from '../FormText'

const PostItem = props => {
    const { imgLink, title, createdAt } = props

    return (
        <div className='grid grid-cols-4 gap-4 my-4 '>
            <img src={imgLink} />
            <div className='col-span-3 flex flex-col justify-center'>
                <FormText
                    type='itemtitle-small'
                    customClass='mb-2'
                    title={title}
                />
                <FormText
                    type='subtitle-based'
                    title={new Date(createdAt).toDateString().split(' ').slice(1, 4).join(' ')}
                />
            </div>
        </div>
    )
}

export default PostItem
