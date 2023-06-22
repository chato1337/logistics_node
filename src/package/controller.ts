import { PackageService } from './service'
const service = new PackageService();

export const create = async (req: any, res: any) => {
    try { 
        const response = await service.create(req.body);
        res.json({ success: true, data: response});
    } catch (error: any) {
        res.status(500).send({ success: false, message: error.message });
    }
}

export const get = async (req: any, res: any) => {
    console.log(req)
    try {
        const response = await service.find();
        res.json(response);
    } catch (error: any) {
        res.status(500).send({ success: false, message: error.message });
    }
}

export const getById = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const response = await service.findOne(id);
        res.json(response);
    } catch (error: any) {
        res.status(500).send({ success: false, message: error.message });
    }
}

export const update = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id,body);
        res.json(response);
    } catch (error: any) {
        res.status(500).send({ success: false, message: error.message });
    }
}

export const _delete = async (req: any, res: any) => {
    try {
        const { id } = req.params; 
        const response = await service.delete(id);
        res.json(response);
    } catch (error: any) {
        res.status(500).send({ success: false, message: error.message });
    }
}
