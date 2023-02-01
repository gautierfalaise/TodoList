import React from 'react'
import './Form.css'

export default function Form() {
  return (
    <form >
      <label>Entrez du texte :</label>
      <input type="text" name="textInput" />
      <button type="submit" value="Envoyer">créer</button>
    </form>
  )
}
