import { Notify } from 'notiflix';


const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
    Notify.failure('Something went wrong. Please try again');
  }
};


const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
    Notify.failure('Something went wrong. Please try again');
  }
};


const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Remove item error: ', error.message);
    Notify.failure('Something went wrong. Please try again');
  }
};


export { save, load, remove };
