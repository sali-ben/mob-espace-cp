import React from "react";

function Profile() {
  return (
    <div className="p-6 max-w-full max-h-full  bg-white border-x-2">
      <div className="text-left text-xl font-bold text-green-600 mb-4">Profil</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-left block text-sm font-medium text-gray-700">Prénom</label>
          <input
            type="text"
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            defaultValue="Yassamina"
          />
        </div>
        <div>
          <label className="text-left block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            defaultValue="Souakri"
          />
        </div>
        <div>
          <label className="text-left block text-sm font-medium text-gray-700">Numéro de tél</label>
          <input
            type="text"
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            defaultValue="06 00 00 00 04"
          />
        </div>
        <div>
          <label className="text-left block text-sm font-medium text-gray-700">Matricule</label>
          <input
            type="text"
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            defaultValue="0002000000000"
          />
        </div>
        <div>
          <label className="text-left block text-sm font-medium text-gray-700">Direction</label>
          <input
            type="text"
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            defaultValue="DDD"
          />
        </div>
        <div>
          <label className="text-left block text-sm font-medium text-gray-700">Poste</label>
          <input
            type="text"
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            defaultValue="Développeur web"
          />
        </div>
        <div>
          <label className="text-left block text-sm font-medium text-gray-700">Date de recrutement</label>
          <input
            type="date"
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            defaultValue="1990-10-10"
          />
        </div>
        <div>
          <label className="text-left block text-sm font-medium text-gray-700">Date de naissance</label>
          <input
            type="date"
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            defaultValue="1990-10-10"
          />
        </div>
        <div>
          <label className="text-left block text-sm font-medium text-gray-700">Structure d’appartenance</label>
          <input
            type="text"
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            defaultValue="Direction Générale"
          />
        </div>
        <div>
          <label className="text-left block text-sm font-medium text-gray-700">Date expiration de passeport</label>
          <input
            type="date"
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            defaultValue="1990-10-10"
          />
        </div>
      </div>
      <div className="flex justify-left mt-14">
        <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700">
          Modifier
        </button>
      </div>
    </div>
  );
}

export default Profile;
