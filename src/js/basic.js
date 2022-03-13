
import json from './parser';
import read from './reader';

// ### Task 10.2 ###

export class GameSavingLoader {

  static async load(loadFalse, parceFalse) {   // метод асинхронной загрузки данных, с последующей асинхронной их обработкой

    try {

      let loadedData = new Promise((resolve, reject) => {   // объект "обещание" для загрузки данных
        let load_Data;  
        if (loadFalse) {      // техническое ветвление кода, для проверки ситуации, когда файл не загружается (принудительно выставлен флаг loadFalse = true)
          load_Data = undefined; 
        }else 
          load_Data = read();                 // загрузка данных
    
        if (load_Data === undefined) {    // если данные не загружены 
        
          reject(new Error ('Ошибка. Файл не загружен!'))
        }
        else resolve(load_Data);   // если данные загружены - возвращаем их
        
      });

    let load_Data = await loadedData;   // выполнение "обещания" loadedData и присвоение результатов его работы(успех или ошибка) в переменную load_Data

    let parcedData = new Promise ((resolve, reject) => {    // объект "обещание" для парсинга данных
      let parce_Data;  
        if (parceFalse) {     // техническое ветвление кода, для проверки ситуации, когда файл не распарсивается (принудительно выставлен флаг parceFalse = true)
          parce_Data = undefined; 
        }else 
          parce_Data = json(load_Data);    // парсинг данных

      if (parce_Data === undefined) {
      
        reject(new Error ('Ошибка. Файл не обработан!'))
      }
      else resolve(parce_Data);  // если данные распарсились - возвращаем их

      console.log('асинхронный метод выполнен');  // КОНТРОЛЬНАЯ ТОЧКА
      return parce_Data;
  
    });
    
    let result = await parcedData;    // выполнение "обещания" parcedData и присвоение результатов его работы(успех или ошибка) в переменную result

    return result;
  
  }
  catch(err) {
    
    return err;   // возврат ошибки (любого из выполняемых "обещаний") 
  };

};

};