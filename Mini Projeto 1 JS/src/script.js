let btnAdicionar = document.getElementById("btnAdicionar");
let lista = document.getElementById("lista");
let tarefa = document.getElementById("tarefa");
let btnFiltrar = document.getElementById("btnFiltrar");

btnAdicionar.addEventListener("click", () => {
    content = tarefa.value;
    tarefa.value = null;

    let newElement = document.createElement("li");
    newElement.textContent = content;
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.className = 'btn btn-delete';

    let checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.className = 'form-check-input form-check-lg';

    newElement.appendChild(checkbox);
    newElement.appendChild(deleteBtn);
    lista.appendChild(newElement);


    deleteBtn.addEventListener("click", () => {
        lista.removeChild(newElement);
    });

});

btnFiltrar.addEventListener("click", () => {
    let checkboxes = document.querySelectorAll("#lista input[type='checkbox']");
    checkboxes.forEach(checkbox => {
        let listItem = checkbox.parentElement;
        if (checkbox.checked) {
            listItem.style.display = "block"; // Exibir tarefa marcada
        } else {
            listItem.style.display = "none"; // Ocultar tarefa não marcada
        }
    });
});


