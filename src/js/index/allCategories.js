import Handlebars from 'handlebars';



// Функция для отображения категорий

function renderCategories(categories) {
    const categoryList = document.querySelector('.category-list');

        categories.forEach((category) => {
    const categoryButton = document.createElement('button');
        categoryButton.classList.add('category-btn');
        categoryButton.textContent = category.name;

        categoryButton.addEventListener('click', () => {
        setActiveCategory(categoryButton);
    });

        categoryList.appendChild(categoryButton);
  });
}


// Функция для установки активной категории

function setActiveCategory(categoryButton) {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const allCategoryButton = document.querySelector('.all-category-button');

    // Удаление класса 'active' у кнопки "All categories"
         allCategoryButton.classList.remove('active');
        
 // Удаление класса 'active' у всех кнопок категорий
         categoryButtons.forEach((button) => {
        button.classList.remove('active');
  });

// Добавление класса 'active' выбранной кнопке категории
        categoryButton.classList.add('active');
}



 // Функция для установки активного состояния для кнопки "All categories"
function setActiveAllCategory() {
  const allCategoryButton = document.querySelector('.all-category-button');
  const categoryButtons = document.querySelectorAll('.category-btn');

  if (allCategoryButton.classList.contains('active')) {
    // Если кнопка "All categories" уже активна, снимаем с неё активность
    allCategoryButton.classList.remove('active');
  } else {
    // Если кнопка "All categories" не активна, добавляем ей активность и снимаем активность с других кнопок
    allCategoryButton.classList.add('active');
    categoryButtons.forEach((button) => {
      button.classList.remove('active');
    });
  }
}

// Обработчик клика для кнопки "All categories"
    const allCategoryButton = document.querySelector('.all-category-button');
        allCategoryButton.addEventListener('click', () => {
        setActiveAllCategory();
});

// Функция для определения активной категории
    Handlebars.registerHelper('isActive', function (category) {
    const activeCategory = document.querySelector('.all-category-button.active');

    if (activeCategory && activeCategory.textContent === category.name)
  {
    return 'active';
  }

    return '';
});

// Инициализация приложения
async function initApp() {
  // Получение категорий с бекенда
    try {
    const response = await fetch('https://tasty-treats-backend.p.goit.global/api/categories');
    const categories = await response.json();

    // Отображение категорий
        renderCategories(categories);
  } catch (error) {
        console.error('Error fetching categories:', error);
  }
}


// Функция для отправки запроса на бекенд за рецептами по выбранной категории

async function fetchRecipesByCategory(categoryId) {
  try {
    const response = await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes?category=${categoryId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
}

// Функция для отображения рецептов по выбранной категории

function renderRecipes(recipes) {
  // Очистка предыдущих рецептов
  const recipeList = document.querySelector('.recipe-list');
        recipeList.innerHTML = '';

  recipes.forEach((recipe) => {
    // Создание элемента рецепта и заполнение данными

    const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');
        recipeItem.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
        <h3 class="recipe-name">${recipe.name}</h3>
        <p class="recipe-description">${recipe.description}</p>
    `;

        recipeList.appendChild(recipeItem);
  });
}


// Запуск приложения после полной загрузки страницы
        window.addEventListener('load', initApp);


// import Handlebars from 'handlebars';

// // Function for rendering categories
// function renderCategories(categories) {
//   const categoryList = document.querySelector('.category-list');

//   categories.forEach((category) => {
//     const categoryButton = document.createElement('button');
//     categoryButton.classList.add('category-btn');
//     categoryButton.textContent = category.name;

//     categoryButton.addEventListener('click', () => {
//       setActiveCategory(categoryButton);
//     });

//     categoryList.appendChild(categoryButton);
//   });
// }

// // Function for setting the active category
// function setActiveCategory(categoryButton) {
//   const categoryButtons = document.querySelectorAll('.category-btn');
//   const allCategoryButton = document.querySelector('.all-category-button');

//   // Remove 'active' class from "All categories" button
//   allCategoryButton.classList.remove('active');

//   // Remove 'active' class from all category buttons
//   categoryButtons.forEach((button) => {
//     button.classList.remove('active');
//   });

//   // Add 'active' class to the selected category button
//   categoryButton.classList.add('active');
// }

// // Function for setting the active state of the "All categories" button
// function setActiveAllCategory() {
//   const allCategoryButton = document.querySelector('.all-category-button');
//   const categoryButtons = document.querySelectorAll('.category-btn');

//   if (allCategoryButton.classList.contains('active')) {
//     // If the "All categories" button is already active, remove the active state
//     allCategoryButton.classList.remove('active');
//   } else {
//     // If the "All categories" button is not active, add the active state and remove it from other buttons
//     allCategoryButton.classList.add('active');
//     categoryButtons.forEach((button) => {
//       button.classList.remove('active');
//     });
//   }
// }

// // Click handler for the "All categories" button
// const allCategoryButton = document.querySelector('.all-category-button');
// allCategoryButton.addEventListener('click', () => {
//   setActiveAllCategory();
// });

// // Helper function to determine the active category
// Handlebars.registerHelper('isActive', function (category) {
//   const activeCategory = document.querySelector('.all-category-button.active');

//   if (activeCategory && activeCategory.textContent === category.name) {
//     return 'active';
//   }

//   return '';
// });

// // App initialization
// async function initApp() {
//   // Fetch categories from the backend
//   try {
//     const response = await fetch('https://tasty-treats-backend.p.goit.global/api/categories');
//     const categories = await response.json();

//     // Render categories
//     renderCategories(categories);
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//   }
// }

// // Function to fetch recipes by category from the backend
// async function fetchRecipesByCategory(categoryId) {
//   try {
//     const response = await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes?category=${categoryId}`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching recipes:', error);
//   }
// }

// // Function for rendering recipes for the selected category
// function renderRecipes(recipes) {
//   // Clear previous recipes
//   const recipeList = document.querySelector('.recipe-list');
//   recipeList.innerHTML = '';

//   recipes.forEach((recipe) => {
//     // Create recipe element and populate with data
//     const recipeItem = document.createElement('div');
//     recipeItem.classList.add('recipe-item');
//     recipeItem.innerHTML = `
//       <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
//       <h3 class="recipe-name">${recipe.name}</h3>
//       <p class="recipe-description">${recipe.description}</p>
//     `;

//     recipeList.appendChild(recipeItem);
//   });
// }

// // Run the app after the page is fully loaded
// window.addEventListener('load', initApp);
