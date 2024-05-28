import React, { Component } from 'react';
import { IDropdown } from '../../interfaces/IDropdown';

// TODO: Implement render, handleOptionClick methods. Export.
class Dropdown implements IDropdown {
    options: string[];
    onSelect: (value: string) => void;

    constructor(options: string[], onSelect: (value: string) => void) {
        this.options = options;
        this.onSelect = onSelect;
    }

     this.state = {
        isOpen: false,
        selectedOption: null as string | null,
    };

    private _handleToggle = () => {
        this.setState(prevState => ({isOpen: !prevState.isOpen}));
    };


}