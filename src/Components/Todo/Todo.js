import React from 'react'
import './Todo.css'

export default function Todo() {
    return (
        <ul className="list-container">
            <li className="list">
                <input className='checkbox' type="checkbox" />
                Voici une tâche à réaliser
            </li>
        </ul>
    )
}
