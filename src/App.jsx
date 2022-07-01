import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { writeTextFile, readTextFile, readDir, BaseDirectory, createDir } from '@tauri-apps/api/fs';
import { appDir, join } from '@tauri-apps/api/path';

import { Store } from './Store';
import { demoDescription, demoContent } from './demo';

import Welcome from './pages/Welcome';
import Note from './pages/Note';
import Sidebar from './components/Sidebar';

async function fetchNotes (callback) {
   const initFolder = [{
      id: 'd4db2500-f8f7-11ec-b939-0242ac120002',
      name: 'My Folder',
      color: 'yellow',
   }]

   const initNotes = [{
      id: 'dafe306c-f8f7-11ec-b939-0242ac120002',
      topic: 'Untitled',
      description: demoDescription,
      folderId: 'd4db2500-f8f7-11ec-b939-0242ac120002',
      tags: [
         '2e88fc4a-f910-11ec-b939-0242ac120002',
         '3dbeeb02-f910-11ec-b939-0242ac120002'
      ],
      markdown: demoContent,
   }]

   const initTags = [
      {
         id: '2e88fc4a-f910-11ec-b939-0242ac120002',
         name: 'React'
      },
      {
         id: '3dbeeb02-f910-11ec-b939-0242ac120002',
         name: 'NextJS'
      },
   ]

   const dirPath = await appDir();
   const appPath = await join(dirPath, 'cote-app');

   try {
      await readDir(appPath, { recursive: true });
   } catch (err) {
      await createDir(appPath, { recursive: true });
      console.log('something wrong in reading dir', err);
   }

   try {
      await readTextFile(appPath+'/notes.json');
   } catch (err) {
      await writeTextFile(appPath+'/notes.json', JSON.stringify(initNotes, null, 2));
      console.log('something wrong in reading dir', err);
   }

   try {
      await readTextFile(appPath+'/folders.json');
   } catch (err) {
      await writeTextFile(appPath+'/folders.json', JSON.stringify(initFolder, null, 2));
      console.log('something wrong in reading dir', err);
   }

   try {
      await readTextFile(appPath+'/tags.json');
   } catch (err) {
      await writeTextFile(appPath+'/tags.json', JSON.stringify(initTags, null, 2));
      console.log('something wrong in reading dir', err);
   }

   const notesRaw = await readTextFile(appPath+'/notes.json');
   const foldersRaw = await readTextFile(appPath+'/folders.json');
   const tagsRaw = await readTextFile(appPath+'/tags.json');

   callback(JSON.parse(foldersRaw), JSON.parse(notesRaw), JSON.parse(tagsRaw));
}

function App() {
   const [folders, setFolders] = useState(null);
   const [notes, setNotes] = useState(null);
   const [tags, setTags] = useState(null);

   useEffect(() => {
      fetchNotes((f, n, t) => {
         setFolders(f);
         setNotes(n);
         setTags(t);
      });
   }, []);

   if (!notes || !folders || !tags) {
      return (
         <div className="w-screen h-screen justify-center items-center">
            Loading...
         </div>
      );
   }

   return (
      <Store.Provider value={{ folders, notes, tags }} >
         <div className="h-screen w-screen flex">
            <Sidebar />
            <div className="flex flex-1 overflow-scroll">
               <Routes>
                  <Route path="/" element={<Welcome />} />
                  <Route path="/note/:noteId" element={<Note />} />
               </Routes>
            </div>
         </div>
      </Store.Provider>
   )
}

export default App
