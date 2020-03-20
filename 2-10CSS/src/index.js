import './css/app.css';

function component() {
    var element = document.createElement('div')
    element.innerHTML = 'Hello World'
    element.classList.add('hello')

    return element
}
document.body.appendChild(component())
