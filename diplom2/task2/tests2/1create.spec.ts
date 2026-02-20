import { expect } from 'chai';
import { JsonBinController } from '../api/jsonbincontroller';

describe('CREATE bin', () => {
    const api = new JsonBinController('$2a$10$RWQq96OTsU6eOx2Z.7p5A.0VOMYR4D2h9yCX9W7DwXDbKsIvcKfAq');

    it('check create bin with object', async () => {
        const res = await api.createBin({ name: 'Anna' });//res-responce
        expect(res.status).to.equal(200);
    });

    it('check return id in metadata', async () => {
        const res = await api.createBin({ test: 1 });
        expect(res.body.metadata.id).to.be.a('string');
    });

    it('check create bin with array', async () => {
        const res = await api.createBin([1, 2, 3]);
        expect(res.status).to.equal(200);
    });

    it('check create bin with string', async () => {
        const res = await api.createBin('hello everybody');
        expect(res.status).to.equal(200);
    });

    it('check fail without API key', async () => {
        const badApi = new JsonBinController('');
        try {
            await badApi.createBin({ a: 1 });
        } catch (err: any) {
            expect(err.status).to.equal(401);
        }
    });
});
