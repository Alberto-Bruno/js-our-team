console.log('JS OK');

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// -Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
    
//MILESTONE 0:
// -Creare l’array di oggetti con le informazioni fornite.
    
//MILESTONE 1:
// -Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
   
//MILESTONE 2:
// -Stampare le stesse informazioni su DOM sottoforma di stringhe
   
//BONUS 1:
// -Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// -Organizzare i singoli membri in card / schede e rendere la pagina gradevole(potete usare lo screen in alleg

// Creo array con i membri del team 

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

// Creo un ciclo  per gli oggetti
for (let i = 0; i < team.length; i++) {

    // Assegno l'oggetto (teamMember)
    let teamMember = team[i]; 

    const col = document.getElementsByClassName('col-4');

    // Creo il div per le img
    const imgContainer = document.createElement('div');
    imgContainer.setAttribute('id', 'imgContainer');

    // Inserisco l'mmagine all'interno delle colonne
    col[i].appendChild(imgContainer);

    // Creo il div per le descrizioni
    const descritionsContainer = document.createElement('div');

    // Assegno l'id al div appena creato
    descritionsContainer.setAttribute('id', 'descritionsContainer');
    col[i].appendChild(descritionsContainer);




    // Creo un ciclo per assegnare le img del teamMember
    const img = teamMember['image'];
    console.log(img);

    // Assegno proprietà e creo l'img
    const name = teamMember['name'];
    const role = teamMember['role'];

    const picture = document.createElement('img');
    

}    