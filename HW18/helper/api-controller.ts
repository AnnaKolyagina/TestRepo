import superagent from "superagent";
export interface ApiObject<T = unknown> {
    name?: string;
    data?: T;
}

export class ApiController<T = unknown> {
    constructor(private baseUrl: string) {}

    getObjects() {
        return superagent.get(`${this.baseUrl}/objects`);
    }

    getObject(id: string) {
        return superagent.get(`${this.baseUrl}/objects/${id}`);
    }

    createObject(body: ApiObject<T>) {
        return superagent.post(`${this.baseUrl}/objects`).send(body);
    }

    updateObject(id: string, body: ApiObject<T>) {
        return superagent.put(`${this.baseUrl}/objects/${id}`).send(body);
    }

    patchObject(id: string, body: ApiObject<T>) {
        return superagent.patch(`${this.baseUrl}/objects/${id}`).send(body);
    }

    deleteObject(id: string) {
        return superagent.delete(`${this.baseUrl}/objects/${id}`);
    }
}