import React from 'react';
import ReactDOM from 'react-dom';
import { StyledForm } from './ContactForm';

ReactDOM.render(
  <React.StrictMode>
    <StyledForm text='Keep in touch' classText='text' classInput='input' className='dark'/>
  </React.StrictMode>,
  document.getElementById('root')
);
