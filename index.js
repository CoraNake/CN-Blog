const card = (title, description, image) => ` <div class="col-lg-4 col-sm-12"> <div class="card mb-5 shadow-sm"><img src="${image}" class="img-fluid" /><div class="card-body"> <div class="card-title"/a> <h2>${title}</h2> </div> <div class="card-text"> <p>${description}</p> </div> <a href="#" class="btn btn-outline-info rounded-0 float-end">Read More</a> </div> </div> </div> `;



(async () => {
  const apiData = await fetch(
  'https://jsonplaceholder.typicode.com/posts'
  ).then((response) => response.json());

  const myData = [
    {
      title: 'Mardi 15 Novembre 2022',     
      description: 'Rattrapage du retard: J\'ai rattraper mon retard de la veille en apprenant comment se décompose un site web, quelles utilités ont les trois langages informatiques HTML;CSS et Javascript.<br> Configuration de GitHub,Discord et Codesandbox.La matiné a consiter à un rattrapage intensif des bases de l\'écriture HTML et CSS avec le projet de faire un CV sur Codesanbox.<br> L\'après-midi a consisté à de la pratique sur Javascript avec le projet de faire un cube qui changait de couleur.',      
      image: "https://picsum.photos/1000/600",  
    },
    {
      title: 'Mercredi 16 Novembre 2022',
      description: 'Matin: Table ronde autour du partage de nouvelles découvertes dans le monde du Code. Mon sujet était d\'expliquer en quoi consiste les métiers de l\'Ui et l\'UX Designer dans la conception d\'un site web.<br>Transition d\'éditeur de texte de Codesandbox à Stackblitz.Panne de courant donc exercice de création du jeu \'Morpion\' dans l\'attente d\'internet.<br> Retour du courant: Apprentissage de Bootstrap. Après-midi: Création du projet Portfolio.',
      image: "https://picsum.photos/1000/600",  
    },
    {
      title: 'Jeudi 17 Novembre 2022',
      description: 'Télétravail : Suivi du projet sur le Portfolio grâce à la vidéo tutoriel partagé dans le Discord.',
      image: "https://picsum.photos/1000/600",
      },
      {
      title: 'Vendredi 18 Novembre 2022',
      description: 'Rattrapage du retard: Finition du projet Portfolio grâce au partage du code de Maru.<br> Puis création du projet Blog et mise en forme du Blog avec seulement Javascript et HTML. Apprentissage de Json. Configuration des articles et rédaction de nos comptes-rendus de la semaine du 14-18 Novembre.',
      image: "https://picsum.photos/1000/600",  
    },
      {
      title: 'Lundi 21 Novembre 2022', 
      description: 'A suivre.',
      image: "https://picsum.photos/1000/600",  
    },
    {
      title: 'Mardi 22 Novembre 2022',
      description: 'A suivre.',
      image: "https://picsum.photos/1000/600",     
      }                           
  ]

  myData.forEach((post) => { 
    document.getElementById('card-list').innerHTML += card(post.title, post.description, post.image)
  });
})();
