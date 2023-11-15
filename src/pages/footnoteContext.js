import { createContext, useContext, useState, useCallback } from 'react'

// Create a new context
const FootnoteContext = createContext();

// Provider component
export const FootnoteProvider = ({ children }) => {
    const [number, setNumber] = useState(0)

    // const getNextFootnoteNumber = () => {
    //     const newCount = count + 1
    //     setCount(newCount)
    //     return newCount
    // }
    // const getNextFootnoteNumber = () => {
    //     setCount(c => c + 1)
    //     return count + 1
    // }
    const incrementCount = () => {
        console.log(`Hello from context incrementCount()`)
        setNumber(number + 1)
        return number
    }

    return (
        <FootnoteContext.Provider value={{ incrementCount }}>
            {children}
        </FootnoteContext.Provider>
    )


}

// Custom hook for consuming context
export const useFootnote = () => useContext(FootnoteContext)