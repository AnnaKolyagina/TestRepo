import { expect } from 'chai';
import { JsonBinController } from '../api/jsonbincontroller';

describe('DELETE bin', () => {
    const api = new JsonBinController('$2a$10$RWQq96OTsU6eOx2Z.7p5A.0VOMYR4D2h9yCX9W7DwXDbKsIvcKfAq');
    let binId: string;

    beforeEach(async () => {
        const res = await api.createBin({ name: 'ToDelete' });
        binId = res.body.metadata.id;
    });

    it('check delete bin', async () => {
        const res = await api.deleteBin(binId);
        expect(res.status).to.equal(200);
    });

    it('check return 404 after delete', async () => {
        await api.deleteBin(binId);
        try {
            await api.getBin(binId);
        } catch (err: any) {
            expect(err.status).to.equal(404);
        }
    });

    it('check fail deleting wrong id', async () => {
        try {
            await api.deleteBin('wrongid');
        } catch (err: any) {
            expect(err.status).to.equal(404);
        }
    });

    it('check that delete response should contain metadata', async () => {
        const res = await api.deleteBin(binId);
        expect(res.body.metadata).to.exist;
    });

    it('check that same bin is not deleted twice', async () => {
        await api.deleteBin(binId);
        try {
            await api.deleteBin(binId);
        } catch (err: any) {
            expect(err.status).to.equal(404);
        }
    });
});
