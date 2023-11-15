import { useCallback, useEffect, useState } from 'react'
import { useFootnote } from './footnoteContext'

const Footnote = () => {
    console.log(`Hello from footnote!`)
    const [number, setNumber] = useState(null)

    const { incrementCount } = useFootnote()

    const initFootnote = useCallback(() => {
        setNumber(incrementCount())
    }, [number])

    console.log(`IC: ${incrementCount}`)
    useEffect(() => {
        initFootnote()
    }, [])
    // number = incrementCount

    return <sup>{number}</sup>
}

export default Footnote