import { Request, Response } from 'express';
import { DeliveryService } from './service'
const service = new DeliveryService();

export const create = async (req: Request, res: Response) => {
    console.log(req)
    try { 
        const response = await service.create(req.body);
        res.json({ success: true, data: response});
    } catch (error: any) {
        res.status(500).send({ success: false, message: error.message });
    }
}

export const get = async (req: Request, res: Response) => {
    try {
        const response = await service.find();
        res.json(response);
    } catch (error: any) {
        res.status(500).send({ success: false, message: error.message });
    }
}

export const getById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await service.findOne(id);
        res.json(response);
    } catch (error: any) {
        res.status(500).send({ success: false, message: error.message });
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id,body);
        res.json(response);
    } catch (error: any) {
        res.status(500).send({ success: false, message: error.message });
    }
}

export const _delete = async (req: Request, res: Response) => {
    try {
        const { id } = req.params; 
        const response = await service.delete(id);
        res.json(response);
    } catch (error: any) {
        res.status(500).send({ success: false, message: error.message });
    }
}
