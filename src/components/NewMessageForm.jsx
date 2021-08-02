import { useState } from 'react';

const NewMessageForm = ({ onSend }) => {
    const [inputText, setInputText] = useState('');

    const _handleChange = (event) => {
        setInputText(event.target.value);
    };

    const _handleSend = (event) => {
        event.preventDefault();
        onSend(inputText);
        setInputText('');
    }

    return (
        <div>
            <input 
            type="text" 
            data-testid="messageText" 
            value={inputText} 
            onChange={(event) => _handleChange(event)} />
            <button 
            type="button" 
            data-testid="sendButton" 
            onClick={(event) => _handleSend(event)}>Send</button>
        </div>
    )
}
export default NewMessageForm;