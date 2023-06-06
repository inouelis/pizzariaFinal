import prismaClient from "../../prisma";

interface OrderRequest{
    id_pedido: string;
}

class UpdateOrderService{
    async execute({id_pedido}: OrderRequest){
        const order = await prismaClient.pedido.update({
            where:{
                id: id_pedido
            },
            data:{
                rascunho : false
            }
        })
        return order;
    }
}

export {UpdateOrderService}