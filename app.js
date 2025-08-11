// Array para almacenar la lista de amigos.
let amigos = [];

/**
 * Función para actualizar la lista de amigos en el HTML.
 * Recorre el array y muestra cada nombre como un elemento <li>.
 */
function actualizarListaAmigos() {
    // 1. Obtener el elemento de la lista del DOM.
    const lista = document.getElementById('listaAmigos');

    // 2. Limpiar la lista existente para evitar duplicados al actualizar.
    lista.innerHTML = "";

    // 3. Iterar sobre el arreglo 'amigos' con un bucle for.
    for (let i = 0; i < amigos.length; i++) {
        // 4. Agregar cada amigo como un elemento <li> a la lista en el HTML.
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

/**
 * Añade un nuevo amigo al array y actualiza la visualización.
 */
function agregarAmigo() {
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim();

    // Validar que el campo no esté vacío.
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // ✨ ¡Mejora! Validar que el nombre no esté ya en la lista.
    if (amigos.includes(nombre)) {
        alert('Este nombre ya ha sido agregado. Intenta con uno diferente.');
        nombreInput.value = ''; // Limpia el campo aunque el nombre sea repetido.
        return;
    }

    // Añadimos el nombre al array.
    amigos.push(nombre);

    // Llamamos a la nueva función para que actualice la lista en la pantalla.
    actualizarListaAmigos();

    // Limpiamos el campo de entrada.
    nombreInput.value = '';
    nombreInput.focus();
}

/**
 * Realiza el sorteo del amigo secreto.
 */
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigos.length < 2) {
        alert('Debes agregar al menos dos amigos para poder sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    resultado.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
}
