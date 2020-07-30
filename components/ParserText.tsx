import parse from 'html-react-parser'
import ReactHtmlParser from 'react-html-parser'

export interface InterfaceParserTextProps {
  text?: string
  className: string
}
const ParserText: React.FC<InterfaceParserTextProps> = ({ text, className }) => {
  const cleanHtml = ReactHtmlParser(text ? text : '')

  return <div className={className}>{parse(`${cleanHtml}`)}</div>
}

export default ParserText
