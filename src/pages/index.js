import { FootnoteProvider } from './footnoteContext'
import Footnote from './footnoteComponent'

const Home = () => {
  return (
    <FootnoteProvider>
      Here is some text with a <Footnote />
      And here is some more text with a <Footnote />
      More text with a <Footnote />
      And hey, why not more text with a <Footnote />
    </FootnoteProvider>
  )
}

export default Home