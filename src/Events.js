export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.addEventListener('click', () => {
        button.remove();
    });
    document.body.appendChild(button);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.textContent = arr[i];
        li.addEventListener('mouseover', () => {
            li.setAttribute('title', li.textContent);
        });
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

export function createLink() {
    const link = document.createElement('a');
    link.href = 'https://tensor.ru/';
    link.textContent = 'tensor';

    let clicked = false;
    link.addEventListener('click', (event) => {
        if (!clicked) {
            event.preventDefault();
            link.textContent += ' ' + link.getAttribute('href');
            clicked = true;
        }
    });

    document.body.appendChild(link);
}

export function createList() {
    const ul = document.createElement('ul');
    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    function addItem() {
        const li = document.createElement('li');
        li.textContent = 'Пункт';
        li.addEventListener('click', () => {
            li.textContent += '!';
        });
        ul.appendChild(li);
    }

    addItem();
    button.addEventListener('click', addItem);

    document.body.appendChild(ul);
    document.body.appendChild(button);
}