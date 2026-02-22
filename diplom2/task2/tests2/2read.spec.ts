import { expect } from 'chai';
import dotenv from 'dotenv';
import { JsonBinController } from '../api/jsonbincontroller';

dotenv.config({ path: '/Users/hannak/TestRepo/.env' });

const apiKey = process.env.JSONBIN_API_KEY as string;
if (!apiKey) throw new Error('JSONBIN_API_KEY is missing!');

describe('READ bin tests', () => {
    const api = new JsonBinController(apiKey);
    let binId: string;

    before(async () => {
        // создаём тестовый bin
        const res = await api.createBin({ name: 'ReadTest' });
        binId = res.body.metadata.id;
        if (!binId) throw new Error('Failed to create bin in before hook');
        console.log('Created bin:', JSON.stringify(res.body, null, 2));
    });

    after(async () => {
        // удаляем bin после всех тестов
        if (binId) {
            await api.deleteBin(binId);
        }
    });

    it('check return correct data with metadata and status 200', async () => {
        const res = await api.getBin(binId);
        console.log('GET bin response:', JSON.stringify(res.body, null, 2));
        expect(res.status).to.equal(200);

        const recordData = res.body.record.record ?? res.body.record;
        expect(recordData.name).to.equal('ReadTest');
        expect(res.body.metadata).to.exist;
        expect(res.type).to.include('json');
    });

    it('check fail for wrong id', async () => {
        try {
            await api.getBin('wrongid');
        } catch (err: any) {
            expect(err.status).to.equal(400);
        }
    });

    it('check return metadata when query param meta=true', async () => {
        const res = await api.getBin(`${binId}?meta=true`);
        expect(res.body.metadata).to.exist;
    });

    it('check have record as object with correct type', async () => {
        const res = await api.getBin(binId);
        const recordData = res.body.record.record ?? res.body.record;
        expect(recordData).to.be.an('object');
        expect(recordData.name).to.be.a('string');
    });

    it('check return data correctly after creation', async () => {
        const res = await api.getBin(binId);
        const recordData = res.body.record.record ?? res.body.record;
        expect(recordData.name).to.equal('ReadTest');
    });
});