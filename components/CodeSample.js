import CodeBlock from '@/components/CodeBlock'

export default ({ preview, code, bg = 'bg-white', px = 'px-4', py = 'py-4' }) => (
  <div className="relative overflow-hidden mt-6 mb-8">
    <div
      className={`rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 ${bg} ${px} ${py}`}
      dangerouslySetInnerHTML={{ __html: preview || code }}
    />
    <div className="rounded-b-lg overflow-hidden">
      <CodeBlock language="html">{code}</CodeBlock>
      {/*<pre className="scrollbar-none m-0 p-0 language-html"><code className="inline-block p-4 scrolling-touch">{code}</code></pre>*/}
    </div>
  </div>
)
