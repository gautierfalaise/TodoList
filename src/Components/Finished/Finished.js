import React from 'react'
import './Finished.css'
import { useSelector } from "react-redux";

// Composant Finished qui affiche une liste de tâches réalisées à partir d'un état partagé géré par Redux.
export default function Finished() {
    // On utilise la fonction useSelector pour récupérer l'état partagé de nos tâches.
    const tasksData = useSelector((state) => state.tasks.tasks);

    return (
        <ul className="list-container">
            <h2>tâches réalisées</h2>
            {
                // Pour chaque tâche, on vérifie si elle est réalisée.
                // Si elle est réalisée, on la rend visible dans notre composant.
                tasksData.map((task, index) => {
                    if (task.isChecked === true) {
                        return (
                            <li key={task.id} className="list-finished">{task.text}</li>
                        )
                    }
                })
            }
        </ul>
    )
}