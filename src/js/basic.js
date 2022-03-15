
import json from './parser';
import read from './reader';

// ### Task 10.2 ###

class GameSaving {    // шаблон объекта сохранения

  constructor(obj) {  
    
    this.created = obj.created, 
    this.id = obj.id, 
    this.userInfo = obj.userInfo
    
  };

};

export class GameSavingLoader {

  static async load(loadFalse, parceFalse) {   // метод асинхронной загрузки данных, с последующей асинхронной их обработкой

    try {
         let loadData = await read();   // загрузка данных
         
         if (String(loadData) !== '[object ArrayBuffer]') throw new Error('Ошибка загрузки данных!');    // если тип загруженного объекта не 'ArrayBuffer'

        let parceData = await json(loadData);    // парсинг данных
        
        if ((parceData.length === 0) || (parceData.length === NaN)) throw new Error('Ошибка парсинга данных!'); // если парсинг загруженного объекта не выполнен

        return new GameSaving(JSON.parse(parceData));   // возврат готового "распарсеного" результата в формате  GameSaving-объект
    
    }
      catch(err) {
    
        return alert(err.message);   // возврат ошибки (любого из выполняемых "обещаний") 
      };

  };

};