interface IDropdown {
    options: string[];
    onSelect: (value: string) => void;
}