import './TextField.css';
import React from 'react';

export function TextField(props) {
    const [value, setValue] = React.useState(props.defaultValue || '')
    return (
        <div className="container">
            <label>{props.label}</label>
            <input
                className={value ? 'completed' : ''} 
                onChange={(e) => {
                    props.onChange(e.target.value)
                    setValue(e.target.value)
                    }
                }
                placeholder={props.placeholder}
                defaultValue={props.defaultValue}
                type={props.type}
            />
        </div>
    );
}
