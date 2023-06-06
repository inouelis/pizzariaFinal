import { Request, Response } from "express";
import { UpdateOrderService } from '../../services/order/UpdateOrderService'

class UpdateOrderController {
    async handle(req: Request, res: Response){
        const id_pedido = req.query.id_pedido as string;
        const updateOrderService = new UpdateOrderService();
        const order = await updateOrderService.execute({id_pedido});
        return res.json(order);
    }
}

export {UpdateOrderController}