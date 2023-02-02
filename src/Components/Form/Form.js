import React from 'react'
import './Form.css'
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../feature/tasksSlice"

// Ce composant représente un formulaire pour ajouter une tâche à la liste.
export default function Form() {
  // Utilisez useRef pour créer une référence à l'élément du formulaire.
  const formRef = useRef();
  // Utilisez useRef pour créer une référence à l'élément de l'input de texte.
  const inputText = useRef();
  // Utilisez useDispatch pour obtenir l'objet dispatch pour déclencher des actions.
  const dispatch = useDispatch();

  // handleSubmit gère la soumission du formulaire en prévenant le rechargement de la page et en déclenchant une action pour ajouter une tâche au magasin de l'application.
  const handleSubmit = (e) => {
    e.preventDefault()

    // Créez un objet data pour stocker les données de la tâche.
    const data = {
      id: Date.now(), // Utilisez la méthode Date.now () pour générer un ID unique pour la tâche.
      text: inputText.current.value, // Récupérez la valeur entrée dans l'input de texte.
      isChecked: false // Définissez la valeur par défaut pour la tâche non cochée.
    };

    // Déclenchez l'action addTask pour ajouter la tâche à l'état de l'application.
    dispatch(addTask(data));

    // Réinitialisez la valeur de l'input de texte.
    inputText.current.value = '';
  }

  // Retournez le formulaire qui comprend un label, un input de texte et un bouton de soumission.
  return (
    <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
      <label>Entrez du texte :</label>
      <input type="text" name="textInput" placeholder=" Ajouter une tâche " ref={inputText} />
      <button type="submit" value="Envoyer">créer</button>
    </form>
  )
}