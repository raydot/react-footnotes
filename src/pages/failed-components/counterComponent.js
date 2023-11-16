import { useEffect } from 'react'
import { useCounter } from '../failed-components/counterContext'

const CounterComponent = () => {
    const { count, increment } = useCounter();

    useEffect(() => {
        // Increment the counter on component mount
        increment();
    }, [increment])

    return <div>Render count: {count}</div>
}

export default CounterComponent