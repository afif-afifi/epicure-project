import React, {useState} from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import './Search-stylesheet.css';
import searchIcon from '../../assets/search.svg';
export interface ILayoutSearchProps {
}


export function Search (props: ILayoutSearchProps) {
    const [ value, setValue ] = useState('');

    const handleChange = (e: any) => {
        setValue(e.target.value );
        console.log("<><<><><><><> ", value)
    }
    
    return (
        <InputGroup className="mb-3">
            <InputGroup aria-label="Checkbox for following text input" >
                <img
                    alt=""
                    src={searchIcon}
                    width=""
                    height=""
                    className="d-inline-block align-top"
                />
            </InputGroup>
            <Form.Control 
                aria-label="search" 
                value={value}
                onChange={handleChange}
                placeholder="Search for restaurant cuisine, chef"
            />
        </InputGroup>
    );
}
