import React, { useState } from "react";
import "./styles.scss";

interface DropdownProps {
    options: string[];
}

export const Dropdown = ({ options }: DropdownProps): JSX.Element => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = (): void => setIsOpen(!isOpen);

    const handleOptionSelection = (option: string): void => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <div className="dropdown__selected-option" onClick={toggleDropdown}>
                {selectedOption}
            </div>
            {isOpen && (
                <ul className="dropdown__options">
                    {options.map((option) => (
                        <li
                            key={option}
                            className="dropdown__option"
                            onClick={() => handleOptionSelection(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
