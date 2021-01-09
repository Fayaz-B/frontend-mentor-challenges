const projects = [
    'frontend_challenge_1', 'frontend_challenge_2',
    'frontend_challenge_3',
    'frontend_challenge_4',
    'frontend_challenge_5',
    'frontend_challenge_6','frontend_challenge_7',
    'frontend_challenge_8', 'frontend_challenge_9',
    'frontend_challenge_10',
    'frontend_challenge_11',
    'frontend_challenge_12'

];

const list = document.getElementById('list');

projects.forEach(element => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `/${element}/index.html`;
    link.innerHTML = nameFormat(element);
    img = document.createElement('img');
    img.src = `/${element}/design/desktop-preview.jpg`;
    link.prepend(img);
    listItem.appendChild(link);
    list.appendChild(listItem);
    
});

function nameFormat(name){
    let newName = name.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    return newName.replace('Challenge', 'Project');
}

console.log(nameFormat('Frontend Challenge 1'));
nameFormat('Frontend Challenge 1');