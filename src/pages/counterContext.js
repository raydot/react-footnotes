import { createContext, useState, useContext } from 'react'

// Create a new context
const CounterContext = createContext();

// Provider component
export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(c => c + 1)

    return (
        <CounterContext.Provider value={{ count, increment }}>
            {children}
        </CounterContext.Provider>
    )
}

// Custom hook for consuming context
export const useCounter = () => useContext(CounterContext)