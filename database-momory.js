import { randomUUID } from "node:crypto"
export class DatabaseMemory {
#motos = new Map()

list(search){
    return Array.from(this.#motos.entries()).map((motoArray) => {
        const id = motoArray[0]

        const data = motoArray[1]

        return{
            id,
            ...data,
        }
        
    })
    .filter(moto => {
        if (search){
            return moto.marca.includes(search)
        }
        return true
    })
}
    create(moto){
        const motoId = randomUUID()
        this.#motos.set(motoId, moto)
    }
    
    update(id, moto){
        this.#motos.set(id, moto)
    }

    delete(id){
        this.#motos.delete(id)
    }
}