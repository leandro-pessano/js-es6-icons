// Array delle icone
const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    }
  ];

// Array dei colori e dei tipi
const colors = ['blue', 'orange', 'purple'];
const types = [];

// Popolo l'array types
icons.forEach((e, i) => {
  if (types.includes(e.type) == false) {
    types.push(e.type);
  }
  e.color = colors[types.indexOf(e.type)];
});

// Aggiungo le option alla select nell'html
const filter = document.getElementById('filter');

types.forEach((e, i) => {
  filter.innerHTML += `
    <option value="${e}">${e}</option>
  `;
});


// STAMPO LE ICONE
// Stampo tutte le icone così da visualizzarle quando si carica la pagina
icons.forEach((e, i) => {
  const {name, prefix, family, color} = e;
  document.getElementById('icons').innerHTML += `
  <div class="box">
  <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
  <div>${name.toUpperCase()}</div>
  </div>
  `;
});

// Creo una funzione per le icone da stampare in base al valore delle varie opzioni della select
function changeFunction() {
  // SE l'opzione è 'All' allora cancella le icone presenti a schermo e stampa tutte le icone
  if (filter.value == 'All') {
    document.getElementById('icons').innerHTML = '';
    icons.forEach((e, i) => {
      const {name, prefix, family, color} = e;
      document.getElementById('icons').innerHTML += `
      <div class="box">
      <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
      <div>${name.toUpperCase()}</div>
      </div>
      `;
    });
  }
    // SE l'opzione è 'animal' allora crea un array 'onlyAnimals', cencella le icone presenti a schermo e stampa quelle nel nuovo array 'onlyAnimals'
    else if (filter.value == 'animal') {
      document.getElementById('icons').innerHTML = '';
      const onlyAnimals = icons.filter((e, i) => {
        if (e.type == 'animal') {
          return e;
        }
      });
      onlyAnimals.forEach((e, i) => {
        const {name, prefix, family, color} = e;
        document.getElementById('icons').innerHTML += `
        <div class="box">
        <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
        <div>${name.toUpperCase()}</div>
        </div>
        `;
      });
  }
    // SE l'opzione è 'vegetable' allora crea un array 'onlyVegetables', cencella le icone presenti a schermo e stampa quelle nel nuovo array 'onlyVegetables'
    else if (filter.value == 'vegetable') {
    document.getElementById('icons').innerHTML = '';
    const onlyVegetables = icons.filter((e, i) => {
      if (e.type == 'vegetable') {
        return e;
      }
    });
    onlyVegetables.forEach((e, i) => {
      const {name, prefix, family, color} = e;
      document.getElementById('icons').innerHTML += `
      <div class="box">
      <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
      <div>${name.toUpperCase()}</div>
      </div>
      `;
    });
  }
    // // SE l'opzione è 'user' allora crea un array 'onlyUsers', cencella le icone presenti a schermo e stampa quelle nel nuovo array 'onlyUsers'
    else if (filter.value == 'user') {
    document.getElementById('icons').innerHTML = '';
    const onlyUsers = icons.filter((e, i) => {
      if (e.type == 'user') {
        return e;
      }
    });
    onlyUsers.forEach((e, i) => {
      const {name, prefix, family, color} = e;
      document.getElementById('icons').innerHTML += `
      <div class="box">
      <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
      <div>${name.toUpperCase()}</div>
      </div>
      `;
    });
  }
}
