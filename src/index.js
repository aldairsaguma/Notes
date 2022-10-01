import React from 'react';
import { createRoot  } from 'react-dom/client';
import { NotesApp } from './components/NotesApp';

// Styles
import './styles/base/normalize.css'
import './styles/base/base.css'

const root = createRoot(document.getElementById("root"));

root.render( 
    <React.StrictMode>
        <NotesApp />
    </React.StrictMode>
);
