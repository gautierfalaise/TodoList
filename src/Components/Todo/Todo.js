import React from 'react'
import './Todo.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { isCheckedTask } from "../../feature/tasksSlice"

// Composant Todo qui affiche une liste de tâches à réaliser à partir d'un état partagé géré par Redux.
export default function Todo() {
    // On utilise la fonction useDispatch pour envoyer des actions à notre store Redux.
    const dispatch = useDispatch();
    // On utilise la fonction useSelector pour récupérer l'état partagé de nos tâches.
    const tasksData = useSelector((state) => state.tasks.tasks);

    // Fonction pour mettre à jour l'état d'une tâche en la marquant comme réalisée.
    const isCheckedFunc = (id) => {
        dispatch(isCheckedTask(id));
    }

    return (
        <ul className="list-container">
            <h2>tâches à réaliser</h2>
            {
                // Pour chaque tâche, on vérifie si elle n'est pas déjà réalisée.
                // Si elle n'est pas réalisée, on la rend visible dans notre composant.
                tasksData.map((task, index) => {
                    if (task.isChecked === false) {
                        return (
                            <li key={task.id} className="list">
                                <button onClick={(e) => isCheckedFunc(task.id)} className="delete-button">Suppr.</button>
                                {task.text}
                            </li>
                        )
                    }
                })
            }
        </ul>
    )
}

