import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'
import remarkHtml from 'remark-html'
import Link from 'next/link'

type Props = {
  datas: any
}

const Readme = ({ datas, }: Props) => {
  const datak = JSON.parse(datas)

  const frontMatter = Buffer.from(datak.content, 'base64').toString('utf-8')

  const H1 = ({ node, ...props }: any) => (
    <h1 style={{ color: 'tomato' }} {...props} />
  )
  const H2 = ({ node, ...props }: any) => (
    <h2 className='text-lg font-medium my-2' {...props} />
  )
  const Images = ({ node, ...props }: any) => (
    <img className='inline' alt={node.alt} {...props} />
  )
  const Linked = ({ node, ...props }: any) => (
    <a style={{ color: 'tomato' }} {...props} />
  )

  return (
    <div>
      <ReactMarkdown
        children={frontMatter}
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkHtml]}
        components={{
          h1: H1,
          h2: H2,
          img: Images,
          a: Linked,
        }}
      />
    </div>
  )
}

export default Readme
