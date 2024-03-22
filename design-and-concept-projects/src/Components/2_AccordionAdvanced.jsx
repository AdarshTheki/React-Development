/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { products } from './dummyData';

function Accordion({ title = '', children, isOpen, onToggle }) {
    return (
        <div className={`accordion ${isOpen ? 'open' : ''}`}>
            <h3 onClick={onToggle}>
                {title} {isOpen ? '↑' : '↓'}
            </h3>
            <div className='accordion-content'>{children}</div>
        </div>
    );
}

export default function Test() {
    const [openPanels, setOpenPanels] = useState([]);

    function handleToggle(index) {
        setOpenPanels((prev) => {
            const isOpen = prev.includes(index);
            if (isOpen) {
                return prev.filter((item) => item !== index); // close
            } else {
                return [...prev, index]; // open
            }
        });
    }

    const handleExpandAll = () => {
        setOpenPanels(products.map((item) => item.id)); // Open all panels
    };

    const handleCollapseAll = () => {
        setOpenPanels([]); // Close all panels
    };

    return (
        <div>
            {openPanels.length ? (
                <button onClick={handleCollapseAll}>Collapse All</button>
            ) : (
                <button onClick={handleExpandAll}>Expand All</button>
            )}
            {products.slice(0, 5).map((item) => (
                <Accordion
                    key={item.id}
                    title={item.title}
                    isOpen={openPanels.includes(item.id)}
                    onToggle={() => handleToggle(item.id)}>
                    {item.description}
                </Accordion>
            ))}
        </div>
    );
}
