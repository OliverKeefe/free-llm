import React from 'react';
import { useDropdownContext } from '/home/oliverkeefe/Development/free-llm/frontend/src/context/DropdownContext.tsx';

const DropdownMenu: React.FC = () => {
    const { state, toggleDropdown, selectOption } = useDropdownContext();

    return (
        <div>
            <button onClick={toggleDropdown}>
                {state.isOpen ? 'Close Dropdown' : 'Open Dropdown'}
            </button>
            {state.isOpen && (
                <ul>
                    <li onClick={() => selectOption('Llama3')}>Llama3</li>
                    <li onClick={() => selectOption('Llama2')}>Llama 2</li>
                    <li onClick={() => selectOption('Llama Code')}>Llama Code</li>
                </ul>
            )}
            {state.selectedOption && <p>{state.selectedOption}</p>}
        </div>
    );
};

export default DropdownMenu;