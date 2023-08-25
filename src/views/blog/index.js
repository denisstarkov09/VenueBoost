import React, { useEffect, useState } from 'react';
import './index.css';

import second from '../../assets/images/other/blog1.png'
import BlogItem from '../../components/BlogItem';
import PostItem from '../../components/PostItem';
import FormText from '../../components/FormText';

const blogData = [
    {
        imgLink: require('../../assets/images/other/blog1.png'),
        blogId: '1',
        title: 'How To Stop Wasting Your Time on Things That Don’t Matter',
        summary: 'A simple question that will make you feel fulfilled every day',
        createdAt: new Date('2021-08-03'),
        readTime: 2
    },
    {
        imgLink: require('../../assets/images/other/blog2.png'),
        blogId: '2',
        title: '5 Insights That Have Helped Me Break Bad Habits Repeatedly',
        summary: 'Understand the science behind habits to reclaim your time',
        createdAt: new Date('2021-08-02'),
        readTime: 6
    },
    {
        imgLink: require('../../assets/images/other/blog3.png'),
        blogId: '3',
        title: 'The world is not only #000000 and #FFFFFF',
        summary: 'A UI Designers’ guide to creating colour variations effortlessly by using the HSB colour space.',
        createdAt: new Date('2021-08-02'),
        readTime: 5
    },
    {
        imgLink: require('../../assets/images/other/blog4.png'),
        blogId: '4',
        title: 'Mastering the Basics of Icon Design with Adrien Coquet',
        summary: 'Learn icon design basics in Adobe Illustrator from French Graphic Designer Adrien Coquet.',
        createdAt: new Date('2021-07-27'),
        readTime: 7
    },
    {
        imgLink: require('../../assets/images/other/blog5.png'),
        blogId: '5',
        title: 'A map of discovery methods that any product manager should master',
        summary: 'Everybody must have heard about “discovery” today. People frame it in so many ways. I personally prefer...',
        createdAt: new Date('2021-07-21'),
        readTime: 5
    },
]

const postData = [
    { imgLink: require('../../assets/images/other/post1.png'), title: 'Colors in UI Design', createdAt: new Date('2021-05-21') },
    { imgLink: require('../../assets/images/other/post2.png'), title: 'Design Principle', createdAt: new Date('2021-04-14') },
    { imgLink: require('../../assets/images/other/post3.png'), title: 'Figma Shortcuts', createdAt: new Date('2021-04-02') },
    { imgLink: require('../../assets/images/other/post4.png'), title: 'Exploration', createdAt: new Date('2021-02-14') }
]

const topicData = [
    { id: 'productivity', title: 'Productivity' },
    { id: 'leadership', title: 'Leadership' },
    { id: 'business', title: 'Business' },
    { id: 'visualDesign', title: 'Visual Design'}
]

const TopicItem = ({title}) => (
    <div className='border-color-primary border-2 rounded-3xl w-max px-3 py-2 m-1'>
        <FormText
            type='normal'
            title={title}
        />
    </div>
)

const Blog = () => {
    const [searchStr, setSearchStr] = useState('')

    const handleChangeSearch = e => {
        setSearchStr(e.currentTarget.value)
    }

    return (
        <div className='flex flex-col gap-4 items-center view-terms'>
            <div className='flex flex-col text-center my-10'>
                <FormText
                    type='title'
                    customClass='text-5xl'
                    title='Our Blog'
                />
                <FormText
                    type='subtitle'
                    customClass='w-4/5 text-center m-auto mt-8'
                    title='Increase your  knowledge by reading articles with this blog. Let’s start'
                />
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-1 gap-2 full-width mt-5'>
                <div className='col-span-3 flex flex-col'>
                    {blogData.map((item, index) => (
                        <BlogItem key={index} {...item} />
                    ))}
                </div>
                <div className='col-span-1 flex flex-col'>
                    <input type='text' className='pr-5 mb-10' value={searchStr} placeholder='Topic' onChange={e => handleChangeSearch(e)} />
                    <div className='flex flex-col'>
                        <FormText
                            type='itemtitle'
                            customClass='my-5'
                            title='Popular Posts'
                        />
                        {postData.map((item, index) => (
                            <PostItem key={index} {...item} />
                        ))}
                    </div>
                    <div className='flex flex-col'>
                        <FormText
                            type='itemtitle'
                            customClass='my-5'
                            title='Related Topics'
                        />
                        <div className='flex flex-wrap'>
                            { topicData.map((item, index) => (
                                <TopicItem key={index} title={item.title} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
