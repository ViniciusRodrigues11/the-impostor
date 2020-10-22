import React from 'react';
import { FiSearch } from 'react-icons/fi';

import './Header.css'

export default function Header() {
    return (
        <header>
            <h2>The Impostor</h2>
            <FiSearch size={24} color="#fff" />
        </header>
    );
}