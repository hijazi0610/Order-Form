// window.addEventListener('load', () => {
//     const form = document.querySelector('#new-task-form');
//     const addButton = document.querySelector('.add-food');
//     const select = document.querySelector('.food-select');
//     const food = document.querySelector('.food');
//     const add = document.querySelector('.add-food');
//     const remove = document.querySelector('.remove-food')


//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const options = [
//             'Burger Benjo',
//             'Burger Ayam',
//             'Burger Daging',
//             'Burger Rusa'
//         ]

//         function addSelect() {
//             const foodSelect = document.createElement('select');
//             foodSelect.className = 'select';
//             foodSelect.placeholder = 'Your order';  

//             food.appendChild(foodSelect)

//             for(let i = 0; i < options.length; i++) {
//                 const option = document.createElement('option');
//                 option.text = options[i];
//                 foodSelect.add(option)
//             }

//             const foodInput = document.createElement('input')
//             foodInput.className = 'number-value';
//             foodInput.type = 'number';
//             foodInput.min = '1';
//             foodInput.max = '50';
//             foodInput.placeholder = '1';

//             food.appendChild(foodInput)
//             // select.appendChild(food) takde pun takpe

//             const addButton = document.createElement('button')
//             addButton.className = 'add-food';
//             addButton.className = 'add-remove';
//             addButton.className = 'number-value';
//             addButton.innerText = '+';
//             // addButton.addEventListener('click', addSelect);

//             // food.appendChild(addButton)

//             const removeButton = document.createElement('button')
//             removeButton.className = 'add-food';
//             removeButton.className = 'add-remove';
//             removeButton.className = 'number-value';
//             removeButton.innerText = '-';
//             // removeButton.addEventListener('click', () => {
//             //     foodSelect.remove();
//             //     foodInput.remove();
//             //     addButton.remove();
//             //     removeButton.remove();
//             // })

//             // food.appendChild(removeButton)

//             // const container = document.createElement('div');
//             // container.appendChild(foodSelect);
//             // container.appendChild(foodInput);
//             // container.appendChild(addButton);
//             // container.appendChild(removeButton);

//             // food.appendChild(container);

//             // addSelect();
//             // return;


//             // for(let i = 0; i < foodInput.length; i++) {
//             //     removeButton.addEventListener('click', () => {
//             //         foodInput.remove();
//             //     })
//             // }
            

//         }

//         addButton.addEventListener('click', addSelect)
//         return;
//     })
// })


// function revealDate() {
//     document.querySelector('.hidden').removeAttribute('hidden')   
// }

// function hideDate() {
//     if(document.querySelector('.hidden').attributes !== 'hidden') {
//         document.querySelector('.hidden').hidden = true;
//     }
// }

window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const addButton = document.querySelector('.add-food');
    const food = document.querySelector('.food');
    const addDrink = document.querySelector('.add-drinks');
    const drink = document.querySelector('.drinks');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const options = [
        'Burger Benjo',
        'Burger Ayam',
        'Burger Daging',
        'Burger Rusa'
      ];
  
      function addSelect() {
        const foodSelect = document.createElement('select');
        foodSelect.className = 'select';
        foodSelect.placeholder = 'Your order';
  
        for (let i = 0; i < options.length; i++) {
          const option = document.createElement('option');
          option.text = options[i];
          foodSelect.add(option);
        }
  
        const foodInput = document.createElement('input');
        foodInput.className = 'number-value';
        foodInput.type = 'number';
        foodInput.min = '1';
        foodInput.max = '50';
        foodInput.placeholder = '1';
  
        const addButton = document.createElement('button');
        addButton.className = 'add-food';
        addButton.className = 'add-remove';
        addButton.className = 'number-value';
        addButton.innerText = '+';
        addButton.addEventListener('click', addSelect);
  
        const removeButton = document.createElement('button');
        removeButton.className = 'add-food';
        removeButton.className = 'add-remove';
        removeButton.className = 'number-value';
        removeButton.innerText = '-';
        removeButton.addEventListener('click', () => {
          foodSelect.remove();
          foodInput.remove();
          addButton.remove();
          removeButton.remove();
        });
  
        const container = document.createElement('div');
        container.appendChild(foodSelect);
        container.appendChild(foodInput);
        container.appendChild(addButton);
        container.appendChild(removeButton);
  
        food.appendChild(container);
      }
  
      addSelect();

      function addDrink() {

        const drinkInput = document.createElement('input');
        drinkInput.className = 'all-input add-remove add-drinks';

        const drinkNumber = document.createElement('input');
        drinkNumber.className = 'number-value';
        drinkNumber.type = 'number';
        drinkNumber.min = '1';
        drinkNumber.max = '50';
        drinkNumber.placeholder = '1';

        const addDrinkButton = document.createElement('button');
        addDrinkButton.className = 'add-drinks add-remove number-value';
        addDrinkButton.innerText = '+';
        addDrinkButton.addEventListener('click', addDrink);

        const removeDrinkButton = document.createElement('button');
        removeDrinkButton.className = 'add-drinks add-remove number-value';
        removeDrinkButton.innerText = '+';
        removeDrinkButton.addEventListener('click', () => {
            drinkInput.remove();
            drinkNumber.remove();
            addDrinkButton.remove();
            removeDrinkButton.remove();
        })

        const drinkContainer = document.createElement('div');
        drinkContainer.appendChild(drinkInput);
        drinkContainer.appendChild(drinkNumber);
        drinkContainer.appendChild(addDrinkButton);
        drinkContainer.appendChild(removeDrinkButton);
  
        drink.appendChild(container);

      }

    });

});

function revealDate() {
    document.querySelector('.hidden').removeAttribute('hidden')   
}

function hideDate() {
    if(document.querySelector('.hidden').attributes !== 'hidden') {
    document.querySelector('.hidden').hidden = true;
    }
}
  

