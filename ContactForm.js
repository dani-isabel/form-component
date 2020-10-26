import React from 'react';
import styled from 'styled-components';

const ContactForm = (props) => {
    const {
        text,
        className,
        classInput,
        classText
    }=props
    return (
        <div className={className}>
            <form className={className}>
                <h2 className={classText}>{text}</h2>
                <div>
                  <input className={classInput} placeholder='Email'/>
                  <button className="button">Button</button>
                </div>
            </form>
        </div>
    );
}

const StyledForm = styled(ContactForm)`
  .input {
    height: 4vh;
    border-radius: 6px;
    border: none;
  }
  .button {
    font-weight: 600;
    color: purple;
    border-radius: 6px;
    border: none;
    height: 4vh;
    background-color: #EAA4A4;
  }
  .text {
    font-family: Calibri;
    font-size: 32px;
    color:white;
  }
  .dark {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30vh;
    background-color: purple; 
  }
`;

export {ContactForm, StyledForm}