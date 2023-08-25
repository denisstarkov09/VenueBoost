import React, { useEffect, useState } from 'react'

import './index.css'
import Dropdown from '../../../../components/Dropdown'

const FaqGeneral = ({ faqData = [] }) => {
    const [faqList, setFaqList] = useState(faqData)

    useEffect(() => {
        setFaqList(faqData)
    }, [faqData])

    const handleAction = id => {
        setFaqList(list => list.map(item => {
            if (item.id === id) {
                return {...item, status: !item.status}
            } else {
                return {...item, status: false}
            }
        }))
    }

    return (
        <div className='flex flex-col my-2'>
            {faqList.length > 0 && faqList.map((item, index) => (
                <Dropdown key={index} title={item.title} content={item.content} status={item.status} onAction={() => handleAction(item.id)} />
            ))}
        </div>
    )
}

export default FaqGeneral
