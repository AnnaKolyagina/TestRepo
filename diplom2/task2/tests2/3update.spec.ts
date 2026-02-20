import { expect } from 'chai';
import { JsonBinController } from '../api/jsonbincontroller';

describe('UPDATE bin', () => {
    const api = new JsonBinController('YO$2a$10$RWQq96OTsU6eOx2Z.7p5A.0VOMYR4D2h9yCX9W7DwXDbKsIvcKfAqUR_API_KEY');
    let binId: string;

    before(async () => {
        const res = await api.createBin({ name: 'OldName' });
        binId = res.body.metadata.id;
    });

    it('check update data', async () => {
        const res = await api.updateBin(binId, { name: 'NewName' });
        expect(res.status).to.equal(200);
    });

    it('check return updated value', async () => {
        await api.updateBin(binId, { name: 'Updated' });
        const res = await api.getBin(binId);
        expect(res.body.record.name).to.equal('Updated');
    });

    it('check keep same id', async () => {
        const res = await api.updateBin(binId, { a: 1 });
        expect(res.body.metadata.id).to.equal(binId);
    });

    it('check fail with wrong id', async () => {
        try {
            await api.updateBin('wrongid', { a: 1 });
        } catch (err: any) {
            expect(err.status).to.equal(404);
        }
    });

    it('check nested object', async () => {
        const res = await api.updateBin(binId, { user: { age: 25 } });
        expect(res.status).to.equal(200);
    });
});
