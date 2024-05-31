import React from 'react';
import { useDropdownContext } from '../context/DropdownContext.tsx';
import styled from 'styled-components';
import Button from "react-bootstrap/Button";

interface DropdownMenuProps {
    className?: string;
    [x: string]: any;
}

const DropdownContainer = styled.div`
    display: flex;
    border-radius: 15px;
    background-color: #191919;
    color: white;
`;

const DropdownList = styled.ul`
    position: absolute; /* Position dropdown menu absolutely */
    top: 100%; /* Position it right below the button */
    left: 0;
    background-color: #191919; /* Ensure the background is set */
    border: 1px solid #ccc; /* Add border to make it look like a dropdown */
    z-index: 1000; /* Ensure it's on top of other elements */
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%; /* Adjust the width as necessary */
    border-radius: 15px;
`;

const DropdownButton = styled(Button)`
    display: flex;
    border-radius: 15px;
    background-color: #191919;
    color: white;
    font-palette: white;
`;

const DropdownListItem = styled.li`
    padding: 8px 16px; /* Adjust padding for items */
    cursor: pointer;
    &:hover {
      background-color: #2b2f32; /* Add hover effect */
    }
`;


const DropdownMenu: React.FC<DropdownMenuProps> = ({className, ...props }) => {
    const { state, toggleDropdown, selectOption } = useDropdownContext();

    return (
        <DropdownContainer className={className} {...props}>
            <DropdownButton onClick={toggleDropdown}>
                {state.isOpen ? 'Close Dropdown' : 'Open Dropdown'}
            </DropdownButton>
            {state.isOpen && (
                <DropdownList>
                    <DropdownListItem onClick={() => selectOption('Llama3')}>Llama3</DropdownListItem>
                    <DropdownListItem onClick={() => selectOption('Llama2')}>Llama 2</DropdownListItem>
                    <DropdownListItem onClick={() => selectOption('Llama Code')}>Llama Code</DropdownListItem>
                </DropdownList>
            )}
            {state.selectedOption && <p>{state.selectedOption}</p>}
        </DropdownContainer>
    );
};

export default DropdownMenu;