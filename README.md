# react-footnotes

React sequential footnotes numberer. Add tags and get auto-numbered footnotes as a result.

Inspired by [react-ally-footnotes](https://github.com/KittyGiraudel/react-a11y-footnotes) by Kitty Giraudel(https://github.com/KittyGiraudel)

I figured I had to use the `useMemo` or `useCallback` hooks, the results of which can be found in `use-memo-tutorial` or `useCallback.js`, respectively.

Then it hit on me to use ChatGPT!

```javascript
// This was the first result, which creates a number that
// continually increases.  Close!

/** CHAT GPT QUERY
 * I am a web developer.  How can I create a react component that can be used as a tag that renders an increasing number every time it's used on a page.
 */

//    const [count, setCount] = useState(0)

// const increment = () => setCount(c => c + 1)

// return (
//     <CounterContext.Provider value={{ count, increment }}>
//         {children}
//     </CounterContext.Provider>
// )
```

## Second iteration also created number that continually increases, but in footnote format. See `footnoteContext.js` and `footnoteComponent.js`

## Next boilerplate follows:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
