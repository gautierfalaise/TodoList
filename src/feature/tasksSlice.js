import { createSlice } from "@reduxjs/toolkit";

// Ce code crée un "tranche" pour gérer les tâches dans le magasin Redux.
export const tasksSlice = createSlice({

    name: "tasks", // Nommez la tranche "tâches".

    // Initialisez l'état de la tranche avec un tableau vide de tâches.
    initialState: {
        tasks: [],
    },

    // Définissez les réducteurs qui définissent comment l'état de la tranche est mis à jour en réponse aux actions déclenchées.
    reducers: {

        // addTask ajoutera une nouvelle tâche au tableau de tâches dans l'état de la tranche.
        addTask: (state, { payload }) => {
            state.tasks.push(payload);
        },

        // isCheckedTask mettra à jour la tâche correspondante pour la marquer comme cochée.
        isCheckedTask: (state, { payload }) => {
            state.tasks = state.tasks.map((task) => {
                if (task.id === payload) {
                    // Retournez une copie de la tâche avec la propriété isChecked définie sur vrai.
                    return {
                        ...task,
                        isChecked: true,
                    };
                } else {
                    // Retournez la tâche inchangée.
                    return task;
                }
            });
        },
    },
});

// Exportez les actions déclenchées par les réducteurs.
export const { addTask, isCheckedTask } = tasksSlice.actions;

// Exportez le réducteur créé par la tranche.
export default tasksSlice.reducer;



