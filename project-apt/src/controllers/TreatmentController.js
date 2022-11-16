const BaseRepository = require('../repository/baseRepository')

class TreatmentController {
    constructor() {
        this.treatmentsRepository = new BaseRepository()
    }
    createTreatment(request) {
        const { name, treatmentType, description } = request.body;
        //check if already exists this treatment
        const treatmentAlreadyExists = this.treatmentsRepository.findByName(name)

        if (treatmentAlreadyExists) {
            return { result: "Treatment already exists", statusCode: 400 }
        }
        const createdAt = new Date().toISOString()
        const result = this.treatmentsRepository.create({
            name,
            createdAt,
            treatmentType,
            description
        });

        return { result, statusCode: 201 }

    }
    editTreatment(request) {
        const { id, name, description, treatmentType } = request.body;
        //check if already exists this treatment
        const treatmentAlreadyExists = this.treatmentsRepository.find(id)

        if (!treatmentAlreadyExists) {
            return { result: "Treatment not founded", statusCode: 400 }
        }
        const updatedTreatment = this.treatmentsRepository.edit({ id, name, treatmentType, description })

        return { result: updatedTreatment, statusCode: 201 }
    }
    listTreatment(request) {
        const { id } = request.params;
        const response = this.treatmentsRepository.find(id)
        return response
    }
    deleteTreatment(request) {
        const { id } = request.params;
        //check if already exists this treatment
        const treatmentAlreadyExists = this.treatmentsRepository.find(id)

        if (!treatmentAlreadyExists) {
            return { result: "Treatment not founded", statusCode: 400 }
        }

        this.treatmentsRepository.delete({ id })

        return { result: "Deleted with success", statusCode: 202 }
    }
}


module.exports = new TreatmentController()