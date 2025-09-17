let amigos = [];

function agregarAmigo() {
  const nombreInput = document.getElementById('amigo');
  const nombre = nombreInput.value.trim();

  if (nombre === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }

  if (amigos.includes(nombre)) {
    alert('Este amigo ya ha sido agregado.');
    return;
  }

  amigos.push(nombre);
  mostrarAmigos();
  nombreInput.value = '';
}

function mostrarAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  const resultado = document.getElementById('resultado');

  if (amigos.length === 0) {
    alert('Por favor, agrega amigos antes de sortear.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}

function reiniciarJuego() {
  amigos = [];
  document.getElementById('amigo').value = '';
  document.getElementById('listaAmigos').innerHTML = '';
  document.getElementById('resultado').innerHTML = '';
}

