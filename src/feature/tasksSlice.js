import { createSlice } from "@reduxjs/toolkit";


// createSlice nous permet de fusionner l'action et le reducers. 
// En gros de fusionner la chose a faire et la méthode qui nous sert a modifier le store
export const tasksSlice = createSlice({
    // son nom :
    name: "tasks",
    // son state de base :
    initialState: {
        tasks: [],
    },
    // ici toute la logique de nos reducers
    // A chaque reducers on va lui donner une fonction :
    // Chaque fonction va etre appelé dans notre interface
    // par exemple un reducers pour editer, ajouter ou supprimer un élément
    reducers: {
        /* 
        Reducer qui va nous permettre d'afficher
        un article quand on en créé un sans passer par la bdd donc sans
        recharger la page */
        addTask: (state, { payload }) => {
            state.tasks.push(payload);
        }
    },
});


// ON exporte nos reducers (slices) ainsi que l'objet principal
export const { addTask } =
    tasksSlice.actions;
export default tasksSlice.reducer;
