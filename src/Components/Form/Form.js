import React from 'react'
import './Form.css'
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../feature/tasksSlice"


export default function Form() {
  const formRef = useRef();
  const inputText = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()

    // Je récupère les données de l'input :
    const data = {
      text: inputText.current.value
    };
    // console.log(data) // Je vérifie si je recois bien les données : OK

    dispatch(addTask(data));

    // Je vide l'input après le submit
    inputText.current.value = '';
  }


  return (
    <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
      <label>Entrez du texte :</label>
      <input type="text" name="textInput" placeholder=" Ajouter une tâche " ref={inputText} />
      <button type="submit" value="Envoyer">créer</button>
    </form>
  )
}
