import React, { createContext, ReactNode, useContext, useState } from 'react';

type DropdownState = {
    isOpen: boolean;
    selectedOption: string | null;
};

type DropdownContextProps = {
    state: DropdownState;
    toggleDropdown: () => void;
    selectOption: (option: string) => void;
};

const DropdownContext = createContext<DropdownContextProps | undefined>(undefined);

const DropdownProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState<DropdownState>({
        isOpen: false,
        selectedOption: null,
    });

    const toggleDropdown = () => {
        setState(prevState => ({ ...prevState, isOpen: !prevState.isOpen }));
    };

    const selectOption = (option: string) => {
        setState({ isOpen: false, selectedOption: option });
    };

    return (
        <DropdownContext.Provider value={{ state, toggleDropdown, selectOption }}>
            {children}
        </DropdownContext.Provider>
    );
};

const useDropdownContext = () => {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error('useDropdownContext must be used within a DropdownProvider');
    }
    return context;
};

export { DropdownProvider, useDropdownContext };
