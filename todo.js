const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTamplate = todo => {

    const html = 
    '<li class="list-group-item d-flex justify-content-between align-items-center">'
    +
    '<span>'+ todo +'</span>'
    +
    '<i class="far fa-trash-alt delete"></i>'
    +
    '</li>'
    ;

    list.innerHTML += html;

};

//Dodavanje
addForm.addEventListener('submit',e => {

    e.preventDefault(); //prevent za loadovanje
    const todo = addForm.add.value.trim(); //trim brise razmake

    if(todo.length)
    {
        generateTamplate(todo);
        addForm.reset();
    }
    

});

//Brisanje
list.addEventListener('click' , e => {

    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
    }
});

//Filtriranje (keyup)

const filterTodos = (term) => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLocaleLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'))
    Array.from(list.children)
        .filter(todo => todo.textContent.toLocaleLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'))
};

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});


