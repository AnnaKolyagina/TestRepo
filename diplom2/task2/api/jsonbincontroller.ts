import superagent, { Response, Request } from 'superagent';

export class JsonBinController {
    private baseUrl = 'https://api.jsonbin.io/v3/b';

    constructor(private apiKey: string) {
        if (!apiKey) {
            throw new Error('API key is required');
        }
    }

    private applyOptions(
        request: Request,
        headers?: Record<string, string>,
        query?: Record<string, any>
    ): Request {
        request.set('X-Master-Key', this.apiKey);

        if (headers) {
            Object.entries(headers).forEach(([key, value]) => {
                request.set(key, value);
            });
        }

        if (query) {
            request.query(query);
        }

        return request;
    }

    async createBin(
        data: any,
        headers?: Record<string, string>,
        query?: Record<string, any>
    ): Promise<Response> {
        const request = superagent
            .post(this.baseUrl)
            .set('Content-Type', 'application/json')
            .send({ record: data });

        return this.applyOptions(request, headers, query);
    }

    async getBin(
        binId: string,
        headers?: Record<string, string>,
        query?: Record<string, any>
    ): Promise<Response> {
        const request = superagent
            .get(`${this.baseUrl}/${binId}`)
            .set('Accept', 'application/json');

        return this.applyOptions(request, headers, query);
    }

    async updateBin(
        binId: string,
        data: any,
        headers?: Record<string, string>,
        query?: Record<string, any>
    ): Promise<Response> {
        const request = superagent
            .put(`${this.baseUrl}/${binId}`)
            .set('Content-Type', 'application/json')
            .send({ record: data });

        return this.applyOptions(request, headers, query);
    }

    async deleteBin(
        binId: string,
        headers?: Record<string, string>,
        query?: Record<string, any>
    ): Promise<Response> {
        const request = superagent.delete(`${this.baseUrl}/${binId}`);

        return this.applyOptions(request, headers, query);
    }
}