import { expect } from 'chai';
import dotenv from 'dotenv';
import { JsonBinController } from '../api/jsonbincontroller';

dotenv.config({ path: '/Users/hannak/TestRepo/.env' });

const apiKey = process.env.JSONBIN_API_KEY as string;
if (!apiKey) throw new Error('JSONBIN_API_KEY is missing!');

describe('CREATE bin tests', () => {

    const apiKey = process.env.JSONBIN_API_KEY as string;
    const api = new JsonBinController(apiKey);

it('check create bin with object and verify saved', async () => {
    const data = { name: 'Anna' };
    const createRes = await api.createBin(data);
    const binId = createRes.body.metadata.id;
    const getRes = await api.getBin(binId);
    expect(getRes.body.record.record).to.deep.equal(data);
});

it('check create bin with array and verify saved', async () => {
    const data = [1, 2, 3];
    const createRes = await api.createBin(data);
    const binId = createRes.body.metadata.id;
    const getRes = await api.getBin(binId);
    expect(getRes.body.record.record).to.deep.equal(data);
});

it('check create bin with string and verify saved', async () => {
    const data = 'test string';
    const createRes = await api.createBin(data);
    const binId = createRes.body.metadata.id;
    const getRes = await api.getBin(binId);
    expect(getRes.body.record.record).to.equal(data);
});

it('check create bin with empty object', async () => {
    const data = {};
    const createRes = await api.createBin(data);
    const binId = createRes.body.metadata.id;
    const getRes = await api.getBin(binId);
    expect(getRes.body.record.record).to.deep.equal(data);
});

it('check fail without API key', async () => {
        try {
            const badApi = new JsonBinController('');
            await badApi.createBin({ test: 1 });
        } catch (err: any) {
            expect(err.message).to.equal('API key is required');
        }
    });

});