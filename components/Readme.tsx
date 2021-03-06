import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'
import remarkHtml from 'remark-html'

type Props = {
  datas: any
}

const Readme = ({ datas }: Props) => {
  const datak = JSON.parse(datas)

  const frontMatter = Buffer.from(datak.content, 'base64').toString('utf-8')

  const H1 = ({ node, ...props }: any) => (
    <h1 style={{ color: 'tomato' }} {...props} />
  )
  const H2 = ({ node, ...props }: any) => (
    <h2 className='text-lg font-medium my-2' {...props} />
  )

  const Linked = ({ node, ...props }: any) => (
    <a className='text-sky-500 hover:text-sky-700' {...props} />
  )
  const Paragraph = ({ node, ...props }: any) => {
    const { children } = props
    if (children && children[0].props && children[0].props.src) {
      return (
        <div className='flex flex-wrap gap-2 my-5 justify-center' {...props} />
      )
    }

    return <div className='my-5 inline flex-wrap' {...props} />
  }

  return (
    <div className='bg-white dark:bg-black dark:bg-opacity-80 dark:text-gray-500 bg-opacity-80 backdrop-blur-md rounded-xl p-5'>
      <ReactMarkdown
        remarkPlugins={[remarkHtml]}
        rehypePlugins={[rehypeSanitize]}
        components={{
          h1: H1,
          h2: H2,
          a: Linked,
          p: Paragraph,
        }}
      >
        {frontMatter}
      </ReactMarkdown>
    </div>
  )
}

export default Readme
