import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getEntityData(req, res){
    const entity = await prisma.entity.findFirst({
        select: {
            id: 'default',
        },
        select: {
            name: true,
            smallName: true
        }
    });
    res.status(200).json(entity);
}