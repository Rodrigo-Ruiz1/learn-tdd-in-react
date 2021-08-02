const MessageList = ({ messages }) => {
    return (
        <ul>
            {messages.map((message, index) => {
                return (
                    <li key={`${index}-${message}`}>{message}</li>
                )
            })}
        </ul>
    )
}

export default MessageList;