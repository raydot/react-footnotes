import { useCallback, useState } from 'react'
import List from './List.js'

export default function Home() {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    // Imagine this is a function that calls out to an API somewhere
    // and returns some results.  
    const getItems = useCallback(() => {  // useCallback returns the function from which it's called.
        // as opposed to useMemo which just returns the value of the function
        return [number, number + 1, number + 2]
    }, [number]) // Will only fire when number changes and not simply on re-render

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }
    return (
        <div style={theme}>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark(prevDark => !prevDark)}>
                Toggle Theme
            </button>
            <List getItems={getItems} />
        </div>
    )
}
