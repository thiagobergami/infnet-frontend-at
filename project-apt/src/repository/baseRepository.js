const { v4: uuidv4 } = require("uuid")
class BaseRepository {
    constructor() {
        this.database = []
    }
    find(itemId) {
        if (!itemId) return this.database

        return this.database.find(({ id }) => id === itemId)
    }

    findByName(itemName) {
        if (!itemName) return this.database
        return this.database.find(({ name }) => name === itemName)
    }

    create({ name, createdAt, treatmentType, description }) {
        const data = {
            id: uuidv4(),
            name,
            createdAt,
            treatmentType,
            description
        }
        this.database.push(data)

        return data

    }
    edit({ id, name, treatmentType, description }) {
        let newElement
        let index = 0
        for (const element of this.database) {
            if (element.id === id) {
                newElement = {
                    id: element.id,
                    name: name ? name : element.name,
                    createdAt: element.createdAt,
                    treatmentType: treatmentType ? treatmentType : element.treatmentType,
                    description: description ? description : element.description
                }
                break;
            }

            index++;
        }
        this.database[index] = newElement
        return newElement
    }

    delete({ id }) {
        let index = 0
        for (const element of this.database) {
            if (element.id === id) {  
                break;
            }
            index++;
        }
        console.log(index)
        this.database.splice(index, 1)

        return
    }
}

module.exports = BaseRepository