import { Request, Response } from "express";
import { ListByCategoryService } from '../../services/product/ListByCategoryService'

class ListByCategoryController{
    async handle(req: Request, res: Response){
        const id_categoria = req.query.id_categoria as string;
        const listByCategoryService = new ListByCategoryService();
        const product = await listByCategoryService.execute({id_categoria});
        return res.json(product);
    }

}

export{ListByCategoryController}