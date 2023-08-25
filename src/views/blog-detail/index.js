import React from 'react'
import FormText from '../../components/FormText'
import PostItem from '../../components/PostItem'

const tagData = [
    { id: 'productivity', title: 'Productivity' },
    { id: 'leadership', title: 'Leadership' },
    { id: 'business', title: 'Business' },
    { id: 'visualDesign', title: 'Visual Design'}
]

const postData = [
    { imgLink: require('../../assets/images/other/post1.png'), title: 'Colors in UI Design', createdAt: new Date('2021-05-21') },
    { imgLink: require('../../assets/images/other/post2.png'), title: 'Design Principle', createdAt: new Date('2021-04-14') },
    { imgLink: require('../../assets/images/other/post3.png'), title: 'Figma Shortcuts', createdAt: new Date('2021-04-02') },
    { imgLink: require('../../assets/images/other/post4.png'), title: 'Exploration', createdAt: new Date('2021-02-14') }
]

const TagItem = ({title}) => (
    <div className='border-color-primary border-2 rounded-3xl w-max px-3 py-2 m-2 ml-0'>
        <FormText
            type='normal'
            title={title}
        />
    </div>
)

const BlogDetail = () => {
    return (
        <div className='flex flex-col gap-4 items-center view-terms'>
            <div className='flex flex-col my-10 w-full'>
                <FormText
                    type='title'
                    customClass='text-left mx-0 lg:w-1/2 mb-4'
                    title='5 newest trend in User Interface Design 2021'
                />
                <FormText
                    type='subtitle'
                    customClass='mx-0'
                    title='Jun 28, 2021 6 min read'
                />
            </div>
            <div className='grid lg:grid-cols-3 flex md:grid-cols-1 gap-12 mt-5'>
                <div className='col-span-2 flex flex-col'>
                    <img src={require('../../assets/images/other/blog_detail.png')} className='w-full' />
                    <div className='flex flex-col lg:pr-24 pr-0 mt-16'>
                        <FormText
                            type='normal'
                            title="Recently, I’ve spent some time observing the directions in which UI design is heading. I’ve stumbled across a few very creative, promising and inspiring trends that, in my opinion, will shape the UI design in the nearest future."
                            />
                        <FormText
                            type='normal'
                            customClass='font-semibold mx-0 mt-8'
                            title="Here are the 5 trends based on my observations:"
                        />

                        <FormText
                            type='itemtitle'
                            customClass='text-3xl text-left my-6 ml-4'
                            title="1. Soft gradient"
                        />
                        <FormText
                            type='normal'
                            title="Gradients are not going anywhere! In fact, I’m seeing a lot of them, as backgrounds and on UI elements, such as buttons, cards and graphs.Mixing more than two colors to create a colorful blurry background is also a thing!"
                        />

                        <FormText
                            type='itemtitle'
                            customClass='text-3xl text-left my-6 ml-4'
                            title="2. Geometric elements"
                        />
                        <FormText
                            type='normal'
                            title="Both used as main background or theme, or just a detail to make the design look more interesting — geometric elements are getting more and more attention. They are often mixed to create a mosaic — and the result looks really cool!"
                        />

                        <FormText
                            type='itemtitle'
                            customClass='text-3xl text-left my-6 ml-4'
                            title="3. Illustration and 3D"
                        />
                        <FormText
                            type='normal'
                            title="Illustrations are still a craze. Different styles, different color schemes, more or less abstract, so they match the product’s characteristics. Not only flat, but also imitating the 3D look. I believe they are a nice change after all these years of using stock images for every single digital project on earth!"
                        />

                        <FormText
                            type='itemtitle'
                            customClass='text-3xl text-left my-6 ml-4'
                            title="4. New Neuomorphism"
                        />
                        <FormText
                            type='normal'
                            title="You’ve read it right! Neuomorphism is evolving and, I guess, it’s here to stay (whether you like it or not). It didn’t last long in its initial form, but it is changing towards more sophisticated and accessible direction. It’s almost like skeuomorphism, but with a fresh, modern, more aesthetic vibe."
                        />

                        <FormText
                            type='itemtitle'
                            customClass='text-3xl text-left my-6 ml-4'
                            title="5. Pastel background"
                        />
                        <FormText
                            type='normal'
                            title="I have to say I love this trend. 🥰 I’ve seen a lot of astounding, lightweight, aesthetically pleasing designs with very delicate, bright pastel color schemes. It makes the designs look very modern, non-intrusive, fresh and delightful, in which content plays the main role, and everything else is just a subtle background."
                        />
                    </div>
                </div>
                <div className='col-span-1 flex flex-col pl-10 '>
                    <FormText
                        type='itemtitle'
                        customClass='mx-0'
                        title="Tags"
                    />
                    <div className='flex flex-wrap mb-14'>
                        { tagData.map((item, index) => (
                            <TagItem key={index} title={item.title} />
                        ))}
                    </div>
                    <div className='flex flex-col' >
                        <FormText
                            type='itemtitle'
                            customClass='my-5'
                            title='Recent Posts'
                        />
                        {postData.map((item, index) => (
                            <PostItem key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BlogDetail
