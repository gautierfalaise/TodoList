import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../feature/tasksSlice";

// Ici on  créé notre store (c'est la ou sont stockés nos données dynamique)
// configureSore nous permet de combiner tous nos reducers
// on fait le liens entre nos reducer (slices et notre store ici) exemple :
// On pourrai créer un nouveau reducer dans le dossier feature, e
// et le connecter avec un nouveau reucer exemple test: testReducer
export default configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});
