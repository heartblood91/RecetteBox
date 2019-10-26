import React from "react";

const AdminForm = ({ id: key, majRecette, recettes, supprimerRecette }) => {
  const recette = recettes[key];

  const handleChange = (event, key) => {
    const { name, value } = event.target;
    const recette = recettes[key];
    recette[name] = value;
    majRecette(key, recette);
  };
  return (
    <div className="card">
      <form className="admin-form">
        <input
          value={recette.nom}
          onChange={e => {
            handleChange(e, key);
          }}
          name="nom"
          type="text"
          placeholder="Nom de la recette"
        />
        <input
          value={recette.image}
          name="image"
          type="text"
          placeholder="Nom de l'image"
        />
        <textarea
          value={recette.ingredients}
          name="ingredients"
          rows="3"
          placeholder="Liste des ingredients"
        />
        <textarea
          value={recette.instructions}
          name="instructions"
          rows="15"
          placeholder="Liste des instructions"
        />
        <button onClick={() => supprimerRecette(key)}>Supprimer</button>
      </form>
    </div>
  );
};

export default AdminForm;
