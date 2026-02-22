import { expect } from 'chai';
import dotenv from 'dotenv';
import { JsonBinController } from '../api/jsonbincontroller';

dotenv.config({ path: '/Users/hannak/TestRepo/.env' });

const apiKey = process.env.JSONBIN_API_KEY as string;
if (!apiKey) throw new Error('JSONBIN_API_KEY is missing!');

describe('UPDATE bin tests', () => {
    const api = new JsonBinController(apiKey);
    let binId: string;

    before(async () => {
        const res = await api.createBin({ name: 'OldName' });
        binId = res.body.metadata.id;
        if (!binId) throw new Error('Failed to create bin in before hook');
    });

    after(async () => {
        if (binId) {
            await api.deleteBin(binId);
        }
    });

    it('check update data', async () => {
        const res = await api.updateBin(binId, { name: 'NewName' });
        expect(res.status).to.equal(200);
    });

    it('check return updated value', async () => {
        await api.updateBin(binId, { name: 'Updated' });
        const res = await api.getBin(binId);
        const recordData = res.body.record.record ?? res.body.record;
        expect(recordData.name).to.equal('Updated');
    });

    it('check keep same id', async () => {
    await api.updateBin(binId, { a: 1 });

    const getRes = await api.getBin(binId);
    expect(getRes.body.metadata.id).to.equal(binId);
    });

    it('check fail with wrong id', async () => {
    try {
        await api.updateBin('wrongid', { a: 1 });
    } catch (err: any) {
        expect(err.status).to.equal(400);
    }
    });

    it('check nested object', async () => {
        const res = await api.updateBin(binId, { user: { age: 25 } });
        expect(res.status).to.equal(200);
        const recordData = res.body.record.record ?? res.body.record;
        expect(recordData.user.age).to.equal(25);
    });
});