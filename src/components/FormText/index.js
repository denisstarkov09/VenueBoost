import React from 'react'



const FormText = ({type = '', customClass = '', customStyle = '', title}) => {
    const styleClass = () => {
        switch (type) {
            case 'title':
                return 'color-dark text-4xl font-semibold'
            case 'itemtitle':
                return 'color-dark text-2xl font-semibold'
            case 'itemtitle-small':
                return 'color-dark text-lg font-semibold'
            case 'subtitle':
                return 'color-gray text-lg font-normal'
            case 'subtitle-based':
                return 'color-gray text-base font-normal'
            case 'normal':
                return 'color-dark text-lg font-normal'
            default:
                return 'color-dark text-lg font-normal'
        }
    }
    
    return (
        <span
            className={`
                ${styleClass()}
                ${customClass}
            `}
            style={{...customStyle}}
        >
            {title}
        </span>
    )
}

export default FormText
