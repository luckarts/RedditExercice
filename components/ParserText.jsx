import Link from 'next/link';
import parse from 'html-react-parser';
import ReactHtmlParser from 'react-html-parser';

function ParserText({ text, className }) {
  const cleanHtml = ReactHtmlParser(text ? text : '');

  return <p className={className}>{parse(`${cleanHtml}`)}</p>;
}

export default ParserText;
