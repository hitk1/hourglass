import { useCallback, useEffect, useState } from "react"

export const useTimerService = () => {
    const [hour, setHour] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')
    const [isTicking, setTicking] = useState(false)

    const startTimer = useCallback(() => setTicking(true), [isTicking])

    const stopTimer = useCallback(() => setTicking(false), [isTicking])

    const resetTimer = useCallback(() => {
        setHour('00')
        setMinutes('00')
        setSeconds('00')

        setTicking(false)
    }, [])

    useEffect(() => {
        let interval: NodeJS.Timeout

        if (isTicking) {
            interval = setInterval(() => {
                const nextSecond = parseInt(seconds) + 1
                let formatedSeconds = 0
                let formatedMinutes = parseInt(minutes)
                let formatedHours = parseInt(hour)

                if (nextSecond <= 59){
                    setSeconds(nextSecond.toString().padStart(2, '0'))
                    return
                }

                if (nextSecond > 59) {
                    formatedSeconds = 0
                    formatedMinutes += 1

                    setSeconds(formatedSeconds.toString().padStart(2, '0'))
                    setMinutes(formatedMinutes.toString().padStart(2, '0'))
                }

                if (formatedMinutes > 59) {
                    formatedMinutes = 0
                    formatedHours += 1

                    setMinutes(formatedMinutes.toString().padStart(2, '0'))
                    setHour(formatedHours.toString().padStart(2, '0'))
                }
            }, 1000)
        }

        return () => {
            clearInterval(interval)
        }
    }, [hour, minutes, seconds, isTicking])

    return {
        hour,
        minutes,
        seconds,
        isTicking,
        startTimer,
        stopTimer,
        resetTimer,
    }
}