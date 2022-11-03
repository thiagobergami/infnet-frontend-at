const Base = require('./base/base')

class Treatment extends Base{
    constructor({id, name, createdAt, treatmentType, description}){
        super({id, name})
        this.createdAt = createdAt,
        this.treatmentType = treatmentType,
        this.description = description
    }
}

module.exports = Treatment