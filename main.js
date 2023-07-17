/*let initialNumber = 3000; // Precio base.
function calculate() {
  let input = prompt("Ingresar oferta:"); // Prompt al usuario para ingresar una oferta.
  let offer = parseFloat(input); 

  if (!isNaN(offer)) {
    let result = initialNumber + offer; // Sumar el input al initialNumber.
    console.log("Resultado: " + result); //Mostrar el sesultado en un console.log.

    let increasedResult = result * 1.07; // Calcular un 7% mas del resultado.
    alert ("Ultima oferta: " + increasedResult); // Mostrar el resultado incrementado en un  .

    initialNumber = increasedResult; // Renovar intialNumber para la proxima iteracion.
    calculate(); // Llamar la funcion nuevamente.
  } else {
    alert("Ingreso invalido, por favor ingrese un numero valido.");
    calculate(); // Llamar a la funcion nuevamente para ingresar una nueva offer.
  }
}
calculate(); //Comenzar el calculo.*/

/*let initialOffer = 3000; 

class horse {
    constructor(name, birthDate, father, motherGrandfather, horseOffer) {
      this.name = name;
      this.birthDate = birthDate;
      this.father = father;      
      this.motherGrandfather = motherGrandfather;
      this.horseOffer = horseOffer;
    }
  
  checkInfo() {
    let offer = this.horseOffer !== undefined ? this.horseOffer : initialOffer;
    return `Caballo : ${this.name}
       Fecha de Nacimiento: ${this.birthDate}
       ${this.father}  X  ${this.motherGrandfather}
      Oferta Actual: $ ${offer}`;
  }
  
}

class auction {  
  constructor(name) {
      this.name = name;
      this.horses = [];
  }
  
  static initialOffer = 3000;

  addHorse(horse) {
    if (!horse.horseOffer) {
      horse.horseOffer = auction.initialOffer;
    }
      this.horses.push(horse);
  }

  checkInfo() {
      return`Remate: ${this.name}
      Cant. caballos: ${this.horses.length}`;
  }

  checkHorses() {
    let infoHorses = "";
    this.horses.forEach(horse => {
      infoHorses += `${horse.checkInfo()} \n`;
    });
    return infoHorses;
  }

  checkHorsebyname(name) {
    let horse = this.horses.find(horse => horse.name === name);
    if (horse) {
        return horse.checkInfo();
    } else {
        return `No existe caballo con Nombre ${name}`;
    }
     
  }

  modifyHorse(name, birthDate, father, motherGrandfather) {
    let horse = this.horses.find((horse) => horse.name === name);
    if (horse) {
      horse.name = newName;
      horse.birthDate = birthDate;
      horse.father = father;
      horse.motherGrandfather = motherGrandfather;
    } else {
      console.log(`No existe caballo con Nombre ${name}`);
    }
  }
  deleteHorse(name) {
      let horse = this.horses.find(horse => horse.name === name);
      let index = this.horses.indexOf(horse);
      this.horses.splice(index, 1);
  }

  offerForHorse(name, offer) {
    let horse = this.horses.find((horse) => horse.name === name);
    if (horse) {
      if (!offer) {
        alert("Ingreso inválido, por favor ingrese un número válido.");
        return;
      }

      const parsedOffer = parseFloat(offer.replace(',', '.'));
      if (!isNaN(parsedOffer)) {
        let result = horse.horseOffer + parsedOffer;        
        horse.horseOffer = result;
      } else {
        alert("Ingreso inválido, por favor ingrese un número válido.");
        this.offerForHorse(name, prompt("Ingrese Oferta"));
      }
    } else {
      console.log(`No existe caballo con Nombre ${name}`);
    }
  }
}


function adminHorses() {
  let auctionInstance = new auction("Remate");
  let option = "";
  let newHorse = ""; 
  let name = "";
  let birthDate = "";
  let father = "";
  let motherGrandfather = "";   
  

  do {
      option = prompt(`Seleccione una opción:
      1. Agregar Caballo.
      2. Listar Caballos.
      3. Ver datos de un caballo.
      4. Eliminar caballo.
      5. Modificar caballo.
      6. Ofertar
      7. Salir`);
      switch (option) {
          case "1":
              name = prompt("Ingrese su nombre");
              birthDate = prompt("Ingrese su fecha de nacimiento (dd-mm-yyyy)");
              father = prompt("Ingrese padre");
              motherGrandfather = prompt("Ingrese abuelo materno");
              newHorse = new horse(name, birthDate, father, motherGrandfather);
              auctionInstance.addHorse(newHorse);
              break;         
          case "2":
              alert(auctionInstance.checkHorses());
              break;
          case "3":
              name = (prompt("Ingrese el nombre del caballo"));
              alert(auctionInstance.checkHorsebyname(name));
              break;
          case "4":
              name = (prompt("Ingrese el nombre del caballo a eliminar"));
              auctionInstance.deleteHorse(name);
              break;
          case "5":
              name = (prompt("Ingrese el nombre del caballo a modificar"));
              newName = (prompt("Ingrese nuevo nombre del caballo"));
              birthDate = (prompt("Igrese la nueva fecha de nacimiento dd-mm-yyyy "));
              father = prompt("Ingrese nuevo padre");
              motherGrandfather = prompt("Ingrese nuevo abuelo materno");
              auctionInstance.modifyHorse(name, birthDate, father, motherGrandfather);
              break;
              case "6":
                name = prompt("Ingrese el nombre del caballo para realizar la oferta");
                let horseInfo = auctionInstance.checkHorsebyname(name);
                alert(`${horseInfo}`);
                offer = prompt("Ingrese la oferta");
                auctionInstance.offerForHorse(name, offer);
                break;
          case "7":
              break;
          default:
              alert("Opción inválida");
              break;
      }
  } while (option !== "7");
}

adminHorses(); */


document.addEventListener('DOMContentLoaded', () => {
  
  const addButton = document.querySelector('.horse_btn2');
  const subtractButton = document.querySelector('.horse_btn1');
  const submitButton = document.querySelector('.horse_btn3');
  const resultInput = document.getElementById('result');
  const offerForm = document.querySelector('.offer_form');

  
  let result = localStorage.getItem('result');
  result = result ? JSON.parse(result) : 3000;

 
  function updateResult() {
    resultInput.value = result;
  }

  
  updateResult();

  
  let submitted = false;
  let previousOffer = result;

  
  function submitOffer() {
    previousOffer = result;
    subtractButton.disabled = true;
    submitButton.disabled = true;
    submitted = true;

    
    localStorage.setItem('result', JSON.stringify(result));
  }

  
  function enableButtons() {
    subtractButton.disabled = false;
    submitButton.disabled = result <= previousOffer;
    submitted = false;
  }

 
  addButton.addEventListener('click', () => {
    if (!submitted) {
      result += 500;
      updateResult();
      enableButtons();
    }
  });

  subtractButton.addEventListener('click', () => {
    if (!submitted && result > previousOffer) {
      result -= 500;
      updateResult();
      enableButtons();
    }
  });

  offerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!submitted && result >= previousOffer) {
      submitOffer();
    }
  });
});

