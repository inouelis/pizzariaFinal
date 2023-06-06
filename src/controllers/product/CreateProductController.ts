import { Request as ExpressRequest, Response } from 'express'
import { CreateProductService } from '../../services/product/CreateProductService'

interface Request extends ExpressRequest {
    file: any; // Altere 'any' para o tipo correto do arquivo que você espera receber
}

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { nome, preco, descricao, id_categoria } = req.body;
        const createProductService = new CreateProductService();

        if (!req.file) {
            throw new Error("Erro no upload da imagem!")
        } else {
            const { originalname, filename: banner } = req.file;

            const product = await createProductService.execute({
                nome, preco, descricao, banner, id_categoria,
            });
            return res.json(product);
        }
    }
}

export { CreateProductController };