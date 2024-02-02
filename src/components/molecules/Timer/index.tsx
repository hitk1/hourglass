import {  } from 'react-icons/io5'

import { DisplayNumber } from '../../atoms'
import { useTimerService } from './service'

export default () => {

    const {
        hour,
        minutes,
        seconds,
        startTimer,
        stopTimer,
        resetTimer,
        isTicking
    } = useTimerService()

    return (
        <>
            <div className="flex flex-row items-center justify-center mt-4">
                <DisplayNumber
                    domain='hours'
                    value={hour}
                />
                <div className="hour-separator">
                    <h2 className="text-displayNumber pb-1">:</h2>
                </div>
                <DisplayNumber
                    domain="minutes"
                    value={minutes}
                />
                <div className="hour-separator">
                    <h2 className="text-displayNumber pb-1">:</h2>
                </div>
                <DisplayNumber
                    domain='seconds'
                    value={seconds}
                />
            </div>
            {/* <button
                className="w-20 h-10 flex self-center mt-12 flex-col items-center justify-center"
                onClick={(() => {
                    if (!isTicking)
                        startTimer()
                    else
                        stopTimer()
                })}
            >
                <FaBeer />
            </button>

            <button
                className="w-20 h-10 flex self-center mt-16 flex-col items-center justify-center"
                onClick={resetTimer}
            >Reset</button> */}
        </>
    )
}