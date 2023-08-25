import React from 'react'

import './index.css'
import FormText from '../FormText'

const BlogItem = props => {
    const {
        imgLink, blogId, title, summary, createdAt, readTime, type='whole'
    } = props

    return (
        <div className={`${ type === 'whole' ? 'grid lg:grid-cols-3 sm:grid-cols-1' : 'mb-24 md:mb-18 lg:mb-5 w-3/4 md:w-full m-auto'} flex flex-row items-center my-5 pr-5`}>
            <div className={`${type === 'summary' ? 'full-width relative mb-10' : 'mr-5'}`} style={{height: type === 'summary' && '110%'}}>
                <img src={imgLink} className={`col-span-1 m-auto ${type === 'summary' && 'full-width'}`} style={{height: type === 'summary' && '110%'}} />
                { type === 'summary' && 
                    <div className='absolute blog-summary flex flex-col justify-end p-8'>
                        <div className='flex flex-col' >
                            <FormText
                                type='itemtitle'
                                customClass='color-light'
                                title={title}
                            />
                            <FormText
                                type='subtitle'
                                customClass='color-light mt-5'
                                title={`${new Date(createdAt).toDateString().split(' ').slice(1, 4).join(' ')} · ${readTime} min read`}
                            />
                        </div>
                    </div>
                }
            </div>
            { type === 'whole' &&
                <div className='lg:col-span-2 sm:col-span-1 flex flex-col'>
                    <a
                        href={`/blog/${blogId}`}
                        className='text-dark font-semibold text-2xl'
                    >
                        {title}
                    </a>
                    <FormText
                        type='subtitle'
                        customClass='my-5'
                        title={summary}
                    />
                    <FormText
                        type='subtitle-based'
                        title={`${new Date(createdAt).toDateString().split(' ').slice(1, 4).join(' ')} · ${readTime} min read`}
                    />
                </div>
            }
        </div>
    )
}

export default BlogItem
