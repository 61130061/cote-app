import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Editor from "@monaco-editor/react";
import { useNavigate, useParams } from 'react-router-dom';

import a11yDark from '../styles/dark-syntax';
import coteDark from '../styles/MonacoStyle';
import { useStoreContext } from '../Store';

import NavbarNote from '../components/NavbarNote';

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

export default function Note ({ route }) {
   const { notes, folders } = useStoreContext();
   const { noteId } = useParams();
   const navigate = useNavigate();

   const [edit, setEdit] = useState(false);
   const [noteData, setNoteData] = useState(notes.find(e=>e.id==noteId));

   const handleEditorMount = (editor, monaco) => {
      monaco.editor.defineTheme('cote-dark', coteDark);
      monaco.editor.setTheme('cote-dark');
   }

   return (
      <div className="flex flex-col flex-1 p-3">
         <NavbarNote 
            edit={edit} 
            setEdit={setEdit} 
            folderName={folders.find(e=>e.id==noteData.folderId).name} 
            noteTags={noteData.tags}
         />

         <div className="flex flex-col flex-1 self-center w-[95%] md:w-[600px]">
            <div>
               <div className="text-4xl font-bold my-5">{noteData.topic}</div>
               <div className="text-zinc-300 font-bold line-clamp-3">{noteData.description}</div>
            </div>

            {edit ?
               <div className="mt-8 flex flex-1">
                  <Editor
                     theme="cote-dark"
                     defaultLanguage="markdown"
                     defaultValue={noteData.markdown}
                     onChange={(v, e) => setArticle(v)}
                     options={editorOptions}
                     onMount={handleEditorMount}
                  />
               </div>:
               <article className="mb-32 text-md">
                  <ReactMarkdown 
                     children={noteData.markdown} 
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
