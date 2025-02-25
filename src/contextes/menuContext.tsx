import { createContext, useContext, useState } from 'react';

interface MenuContextType {
    // Define the properties of your context here
    selectedMenuItem: string;
    setSelectedMenuItem: (item: string) => void;
}

// Provide a default value for the context
const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider.");
    }
    return context;
};

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('Dashboard');

    return (
        <MenuContext.Provider value={{ selectedMenuItem, setSelectedMenuItem }}>
            {children}
        </MenuContext.Provider>
    );
};
