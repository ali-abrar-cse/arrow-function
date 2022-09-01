document.getElementById('border').addEventListener('click', function(){
    document.getElementById('section').style.border = '2px solid red';
});

document.getElementById('back').addEventListener('click', function(event){
    document.getElementById('section').style.backgroundColor = 'goldenrod';
});

document.getElementById('section').addEventListener('click', function(event){
    const element = event.target;
    element.parentNode.style.backgroundColor = 'yellow';
});
document.getElementById('color').addEventListener('click', function(){
    const para = document.getElementsByTagName('p');
    for(const p of para){
        p.style.color = 'purple';
    }
    const head = document.getElementsByTagName('h3');
    for(const h3 of head){
        h3.style.color = 'purple';
    }
});


document.getElementById('add').addEventListener('click', function(){
    const element = document.createElement('div');
    element.classList.add('main');
    element.innerHTML = `
        <h3>friend-5</h3>
        <p>Harum, beatae.</p>
    `
    document.getElementById('section').appendChild(element);
});