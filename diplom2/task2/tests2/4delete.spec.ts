import { expect } from 'chai';
import dotenv from 'dotenv';
import { JsonBinController } from '../api/jsonbincontroller';

dotenv.config({ path: '/Users/hannak/TestRepo/.env' });

const apiKey = process.env.JSONBIN_API_KEY as string;
if (!apiKey) throw new Error('JSONBIN_API_KEY is missing!');

describe('DELETE bin tests', () => {

    const api = new JsonBinController(apiKey);
    let binId: string;

    beforeEach(async () => {
        const res = await api.createBin({ name: 'ToDelete' });//создаём новый bin перед каждым тестом
        binId = res.body.metadata.id;
        if (!binId) {
            throw new Error('Failed to create bin in beforeEach');
        }
    });

    it('check delete bin successfully', async () => {
        const res = await api.deleteBin(binId);
        expect(res.status).to.equal(200);
        expect(res.body.metadata).to.exist;
        expect(res.body.metadata.id).to.equal(binId);
    });

    it('check return 404 when getting bin after deletion', async () => {
        await api.deleteBin(binId);
        try {
            await api.getBin(binId);
        } catch (err: any) {
            expect(err.status).to.equal(404); // bin не существует
        }
    });

    it('check return 400 when deleting invalid id format', async () => {
        try {
            await api.deleteBin('wrongid');
        } catch (err: any) {
            expect(err.status).to.equal(400); // неправильный формат id
        }
    });

    it('check return metadata in delete response', async () => {
    const res = await api.deleteBin(binId);
    expect(res.status).to.equal(200);
    expect(res.body.metadata).to.exist;
    expect(res.body.metadata.id).to.equal(binId);
    expect(res.body.message).to.be.a('string');
    });

    it('check return 404 when deleting same bin twice', async () => {
        await api.deleteBin(binId);
        try {
            await api.deleteBin(binId);
        } catch (err: any) {
            expect(err.status).to.equal(404); // bin уже удалён
        }
    });

});