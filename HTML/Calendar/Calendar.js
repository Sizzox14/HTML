const select = document.querySelector('select')

const list = document.querySelector('#month-view')

const h1 = document.querySelector('h1')

function createCalendar(days, choice) {
  list.innerHTML = ''
  h1.textContent = choice
  // Creare un ciclo for che cicli i giorni del mese
}
select.addEventListener('change', onChangeSelect)

function resetdays(){
  while(list.firstChild){
    list.removeChild(list.firstChild)
  }
}

function createCalendar(days, choice){for(let i = 1; i<=days; i++){
  const day = document.createElement('li')
  list.setAttribute('class', choice)
  day.innerHTML = i
  list.appendChild(day)
  }
}

function onChangeSelect(event){
  console.log(event)
  console.log('Change event fired!', event.target.value)

  resetdays()

  h1.innerHTML = event.target.value

  if(event.target.value === 'JANUARY'){
    const januaryDays = 31
    createCalendar(januaryDays, event.target.value)
  }

  if(event.target.value === 'FEBRUARY'){
    const februaryDays = 28
    createCalendar(februaryDays, event.target.value)
  }

  if(event.target.value === 'MARCH'){
    const marchDays = 31
    createCalendar(marchDays, event.target.value)
  }

  if(event.target.value === 'APRIL'){
    const aprilDays = 30
    createCalendar(aprilDays, event.target.value)
  }  
  
  if(event.target.value === 'MAY'){
    const mayDays = 31
    createCalendar(mayDays, event.target.value)
  } 
  
  if(event.target.value === 'JUNE'){
    const juneDays = 30
    createCalendar(juneDays, event.target.value)
  } 
  
  if(event.target.value === 'JULY'){
    const julyDays = 31
    createCalendar(julyDays, event.target.value)
  } 
  
  if(event.target.value === 'AUGUST'){
    const augustDays = 31
    createCalendar(augustDays, event.target.value)
  }  
  
  if(event.target.value === 'SEPTEMBER'){
    const septemberDays = 30
    createCalendar(septemberDays, event.target.value)
  } 
  
  if(event.target.value === 'OCTOBER'){
    const octoberDays = 31
    createCalendar(octoberDays, event.target.value)
  } 
  
  if(event.target.value === 'NOVEMBER'){
    const novemberDays = 30
    createCalendar(novemberDays, event.target.value)
  } 
  
  if(event.target.value === 'DECEMBER'){
    const decemberDays = 31
    createCalendar(decemberDays, event.target.value)
  }
}
// createCalendar(31, 'January')

// Tramite l'elemento select scegliete il mese e mostrare i giorni del mese scelto e il nome del mese in testa alla pagina
// Stilare ogni mese in maniera diversa (es. colori, sfondi, ecc.)
// Aggiungete un bottone che permette di cambiare il colore di sfondo della pagina