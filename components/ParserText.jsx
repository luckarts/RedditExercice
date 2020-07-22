import Link from 'next/link';
import parse from 'html-react-parser';
import ReactHtmlParser from 'react-html-parser';

function ParserText({ text, className }) {
  const cleanHtml = ReactHtmlParser(text ? text : '');

  return <div className={className}>{parse(`${cleanHtml}`)}</div>;
}

export default ParserText;
