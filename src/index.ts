const lists = document.querySelectorAll('card');
const addcolumn = document.getElementById('addcol')!;
const board__columns = document.querySelector('.board__columns')!;

function createPrompt() {
  const signtitle: string = prompt('Enter card')!;
  createCol(signtitle);
}

function createCol(title: string) {
  if (!title) return;

  const div = document.createElement('div');
  div.className = 'column';
  div.innerHTML = `
 <div class="column__header">
            <h2 class="column__title">${title}</h2>
            <button class="column__delete">×</button>
          </div>
          <div class="column__cards">
            </div>
          </div>
          <button class="column__add-card">+ Add card</button>`;
   
  board__columns.appendChild(div);

  const deletebtn: HTMLButtonElement = div.querySelector('.column__delete')!
  deletebtn.addEventListener('click', coldelete)
  const addcardbtn: HTMLButtonElement = div.querySelector('.column__add-card')!
  addcardbtn.addEventListener('click', addCardpromt)

}

function coldelete(e:MouseEvent){
    const target = e.target as HTMLButtonElement
    target.parentElement?.parentElement?.remove()
}

function addCardpromt(e:MouseEvent){
    const target = e.target as HTMLButtonElement
    const signcardtitle:string = prompt( 'Enter card title')!
    if(!signcardtitle) return
    const signcardDescription = prompt('Enter card description (optional)')!

   addCard(signcardtitle,signcardDescription,target)
}

function addCard(title:string , description: string, target: HTMLButtonElement ){
    const card = document.createElement('div');
    card.className = 'card'
    card.innerHTML = `
              <h3 class="card__title">${title}</h3>
              <p class="card__description">${description}</p>
              <div class="card__footer">
                <span class="card__date">4/7/2025</span>
                <button class="card__delete">Delete</button>
              </div>`;
     target.previousElementSibling?.appendChild(card)

     const card__delete: HTMLButtonElement = document.querySelector('.card__delete')!
     card__delete.addEventListener('click', discard )

}

function discard (e:MouseEvent){
   const target = e.target as HTMLButtonElement
   target.parentElement?.parentElement?.remove()
}


addcolumn.addEventListener('click', createPrompt);
