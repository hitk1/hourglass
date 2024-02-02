import { memo } from 'react'
import { IDisplayNumberProps } from './interfaces'

const DisplayNumber = ({
    domain,
    value = '00'
}: IDisplayNumberProps) => {
    return (
        <div className="px-1 py-1">
            <h2 className="text-4xl text-displayNumber">{value}</h2>
        </div>
    )
}

export default memo(DisplayNumber)