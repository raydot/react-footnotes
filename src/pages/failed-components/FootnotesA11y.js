
import {
    FootnotesProvider,
    FootnoteRef as Ref,
    Footnotes
} from 'react-a11y-footnotes'

export default function Home() {
    return (
        <div>
            <FootnotesProvider>
                <h1> Hi!</h1>
                <p>Here is an example of how{' '}
                    <Ref description="Footnotes are notes placed at the bottom of a page. They cite references or comment on a designated part of the text above it.">
                        <strong>footnotes</strong>
                        {' '}
                    </Ref>work!
                </p>
                <Footnotes />
            </FootnotesProvider>
        </div>
    )
}