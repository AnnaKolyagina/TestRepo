import superagent, { Response } from 'superagent';

export class JsonBinController {
    private baseUrl = 'https://api.jsonbin.io/v3/b';

    constructor(private apiKey: string) {}//конструктор класса - принимает apiKey и сразу сохраняет его в приватное свойство
//<> используется чтобы передать тип внутрь другого типа
    async createBin(data: any): Promise<Response> {//возвращает промис (обещание что результат придет позже)
        return superagent
            .post(this.baseUrl)//пост запрос на базовый урл
            .set('X-Master-Key', this.apiKey)//добавляем заголовок с apiKey
            .set('Content-Type', 'application/json')//говорим серверу что данные в формате json
            .send({ record: data });//отправляем тело запроса как требует сайт
    }

    async getBin(binId: string): Promise<Response> {//binId - уникальный идентофикатор bin который мы хотим получить
        return superagent
            .get(`${this.baseUrl}/${binId}`)//делаем гет запрос на конкртеный bin
            .set('X-Master-Key', this.apiKey)
            .set('Accept', 'application/json');
    }

    async updateBin(binId: string, data: any): Promise<Response> {
        return superagent
            .put(`${this.baseUrl}/${binId}`)//put запрос на обновление существующего bin
            .set('X-Master-Key', this.apiKey)
            .set('Content-Type', 'application/json')
            .send({ record: data });
    }

    async deleteBin(binId: string): Promise<Response> {
        return superagent
            .delete(`${this.baseUrl}/${binId}`)
            .set('X-Master-Key', this.apiKey);//по требованиям нужен только ключ, тело запроса не требуется
    }
}
