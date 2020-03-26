import React from 'react'; // página didatica, não está sendo usada no projeto

export default function Header({ children }) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}