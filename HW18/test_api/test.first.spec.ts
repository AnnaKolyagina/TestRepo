import { ApiController } from "../helper/api-controller";
import { baseUrl } from "../../config/constants";


describe("HW18 API tests", () => {
    const api = new ApiController(baseUrl);
    let id: string;

    it("POST object", async () => {
        const res = await api.createObject({ name: "Test 1 create" });

        expect(res.status).toBe(200);
        expect(res.body.id).toBeDefined();

        id = res.body.id;
    });

    it("GET objects", async () => {
        const res = await api.getObjects();
        expect(res.status).toBe(200);
    });

    it("GET objects by id", async () => {
        const res = await api.getObject(id);
        expect(res.status).toBe(200);
        expect(res.body.id).toBe(id);
    });

    it("PUT (update) object", async () => {
        const res = await api.updateObject(id, { name: "Test update" });
        expect(res.status).toBe(200);
        expect(res.body.name).toBe("Test update");
    });

    it("PATCH object", async () => {
        const patchData = { data: { price: 4554 } }; 
    const res = await api.patchObject(id, patchData);

    expect(res.status).toBe(200);
    expect(res.body.data?.price).toBe(4554);
    });

    it("DELETE object", async () => {
        const res = await api.deleteObject(id);
        expect(res.status).toBe(200);
    });
      it("GET objects", async () => {
        const res = await api.getObjects();
        expect(res.status).toBe(200);
    });
});
