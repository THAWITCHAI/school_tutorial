import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getAllRole = async () => {
    const roles = await prisma.role.findMany()
    return roles
};

const getUniqueRole = async(id:number)=>{
    const roles = await prisma.role.findUnique({
        where: {
            id: id
        }
    })
    return roles
}

const createData = async (name: string) => {
    const roles = await prisma.role.create(
        {
            data: {
                name: name
            }
        }
    )
    return roles
};

const allFunc = {
    getAllRole,
    getUniqueRole,
    createData,
 };
export default allFunc;
