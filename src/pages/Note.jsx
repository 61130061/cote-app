import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Editor from "@monaco-editor/react";

import a11yDark from '../styles/dark-syntax';
import coteDark from '../styles/MonacoStyle';

import NavbarNote from '../components/NavbarNote';

const markdown = `
# h1
## h2
### h3

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

## Paragraph
**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


Testing code tag: \`test\`

* Lists
* [ ] todo
* [x] done

A table:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


Code:

\`\`\`js
const hello = 'Hello world';
// higilight
console.log(hello);
\`\`\`
`

const editorOptions = {
   lineNumbers: 'off',
   fontSize: 16,
   wordWrap: 'on',
   renderLineHighlight: 'none',
   overviewRulerLanes: 0,
   hideCursorInOverviewRuler: true,
   overviewRulerBorder: false,
   lineDecorationsWidth: 0,
   lineNumbersMinChars: 0,
   folding: false,
   glyphMargin: false,
   minimap: {
      enabled: false
   },
   scrollbar: {
      verticalScrollbarSize: 5
   },
}

export default function Note () {
   const [edit, setEdit] = useState(false);
   const [article, setArticle] = useState(markdown);

   const handleEditorMount = (editor, monaco) => {
      monaco.editor.defineTheme('cote-dark', coteDark);
      monaco.editor.setTheme('cote-dark');
   }

   return (
      <div className="flex flex-col flex-1 p-3">
         <NavbarNote edit={edit} setEdit={setEdit} />

         <div className="flex flex-col flex-1 self-center w-[95%] md:w-[600px]">
            <div>
               <div className="text-4xl font-bold my-5">Untitled note</div>
               <div className="text-zinc-300 font-bold">discription...</div>
            </div>

            {edit ?
               <div className="mt-8 flex flex-1">
                  <Editor
                     theme="cote-dark"
                     defaultLanguage="markdown"
                     defaultValue={article}
                     onChange={(v, e) => setArticle(v)}
                     options={editorOptions}
                     onMount={handleEditorMount}
                  />
               </div>:
               <article className="mb-32 text-md">
                  <ReactMarkdown 
                     children={article} 
                     remarkPlugins={[remarkGfm]} 
                     components={{
                        code({node, inline, className, children, ...props}) {
                           const match = /language-(\w+)/.exec(className || '')
                           return !inline && match ? (
                              <SyntaxHighlighter
                                 children={String(children).replace(/\n$/, '')}
                                 style={a11yDark}
                                 language={match[1]}
                                 PreTag="div"
                                 {...props}
                              />
                           ) : (
                              <code className={className} {...props}>
                                 {children}
                              </code>
                           )
                        }
                     }}
                  />
               </article>
            }

         </div>

      </div>
   )
}
