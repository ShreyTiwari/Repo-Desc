

export const Input = (props) => {
    return (
        <input 
            value={props.value} 
            onChange={props.onChange}
            placeholder={props.placeholder}
        />
    );
}


export const InputFactory = (props) => {

    if (props.input_type === 'SEARCH') {
        return (
            <h1>search</h1>
        )
    }
    return (
        <h2>other</h2>
    );
}