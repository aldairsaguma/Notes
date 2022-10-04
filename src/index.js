import React from 'react';
import { createRoot  } from 'react-dom/client';
import { NotesApp } from './components/NotesApp';

// Styles
import './styles/base/__normalize.scss';
import './styles/base/__variables.scss';
import './styles/base/__base.scss';

const root = createRoot(document.getElementById("root"));

root.render( 
    <React.StrictMode>
        <NotesApp />
    </React.StrictMode>
);
