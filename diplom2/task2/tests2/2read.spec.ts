import { expect } from 'chai';
import { JsonBinController } from '../api/jsonbincontroller';

describe('READ bin', () => {

    const api = new JsonBinController('$2a$10$RWQq96OTsU6eOx2Z.7p5A.0VOMYR4D2h9yCX9W7DwXDbKsIvcKfAq');
    let binId: string;

    before(async () => {
        const res = await api.createBin({ name: 'ReadTest' });
        binId = res.body.metadata.id;
    });

    it('check return 200', async () => {
        const res = await api.getBin(binId);
        expect(res.status).to.equal(200);
    });

    it('check return correct data', async () => {
        const res = await api.getBin(binId);
        expect(res.body.record.name).to.equal('ReadTest');
    });

    it('check contain metadata', async () => {
        const res = await api.getBin(binId);
        expect(res.body.metadata).to.exist;
    });

    it('check fail for wrong id', async () => {
        try {
            await api.getBin('wrongid');
        } catch (err: any) {
            expect(err.status).to.equal(400);
        }
    });

    it('check that response should be JSON', async () => {
        const res = await api.getBin(binId);
        expect(res.type).to.include('json');
    });

});
