import React from 'react'

const Tabrow = ({ thead, tbody, className }) => {
    return (
        <tr>
            <td class={`border border-[#F0F0F0] w-[322px] h-[54px] pl-5 text-secondary text-base font-bold font-dm ${className}`}>{thead}</td>
            <td class={`border border-[#F0F0F0] w-[322px] h-[54px] pl-5 text-primary font-normal font-dm text-base ${className}`}>{tbody}</td>
        </tr>
    )
}

export default Tabrow