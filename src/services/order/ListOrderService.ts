import prismaClient from "../../prisma";

interface OrderRequest {
    id_pedido: string;
}

class ListOrderService {
    async execute() {
        const pedido = await prismaClient.pedido.findMany({
            orderBy: {
                criado_em: 'asc'
            }
        })
        return pedido;
    }
}
export { ListOrderService }