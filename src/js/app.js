
import {GameSavingLoader} from './basic';


// ### Task 10.2 ###

let GameSavig = {};

GameSavingLoader.load()
  .then((saving) => {
    GameSavig = saving;
    console.log('Тип полученных данных : ' + typeof(GameSavig));
    alert(GameSavig);
  })
  .catch((error) => alert(error));

  
 
 