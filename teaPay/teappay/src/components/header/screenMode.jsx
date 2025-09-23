import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useState, useEffect } from "react";


function ScreenMode() {
    const [mode, setMode] = useState('light');

    // Optional: Persist mode in localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem('theme');
        if (savedMode) setMode(savedMode);
    }, []);

    useEffect(() => {
        document.body.setAttribute('data-theme', mode);
        localStorage.setItem('theme', mode);
    }, [mode]);

    const toggleMode = () => {
        setMode(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="toggle-container">
            <label className="switch">
                <input
                    type="checkbox"
                    checked={mode === 'dark'}
                    onChange={toggleMode}
                />
                <span className="slider round"></span>
            </label>
            {mode === 'dark' ? (
                <IoMoonOutline className="icon" />
            ) : (
                <IoSunnyOutline className="icon" />
            )}
        </div>
    );
}

export default ScreenMode;