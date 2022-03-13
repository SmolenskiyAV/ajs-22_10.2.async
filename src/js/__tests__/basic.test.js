import {GameSavingLoader} from '../basic';


// проверка штатной работы метода GameSavingLoader.load()
test('shoud check class GameSavingLoader.load()', async () => {
  const result = await GameSavingLoader.load()
  .then((saving) => {
    return saving;
  });

  expect(result).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}')
});


// проверка работы метода GameSavingLoader.load() когда файл не загружается
test('shoud check class GameSavingLoader.load() then file loading error', async () => {
  const result = await GameSavingLoader.load(true, false)
  .then((saving) => {
    return saving;
  })
  .catch((error) => {return error});

  expect(String(result)).toBe('Error: Ошибка. Файл не загружен!')
});


// проверка работы метода GameSavingLoader.load() когда файл не парсится
test('shoud check class GameSavingLoader.load() then file parcing error', async () => {
  const result = await GameSavingLoader.load(false, true)
  .then((saving) => {
    return saving;
  })
  .catch((error) => {return error});

  expect(String(result)).toBe('Error: Ошибка. Файл не обработан!')
});