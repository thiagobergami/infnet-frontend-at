const { Router } = require('express')

const router = Router()
const treatmentController = require('./controllers/TreatmentController')

router.get(
    '/treatments', (request, response) => {
        console.log('getted')
        const treatments = treatmentController.listTreatment()
        response.send(treatments)
    })

router.post("/treatments", (request, response) => {
    const { result, statusCode } = treatmentController.createTreatment(request)
    response.status(statusCode).json({ result })
})

router.put("/treatments", (request, response) => {
    const { result, statusCode } = treatmentController.editTreatment(request)
    response.status(statusCode).json({ result })
})

router.delete("/treatments/:id", (request, response) => {
    const { result, statusCode } = treatmentController.deleteTreatment(request)
    
    response.status(statusCode).json({ result })
})

module.exports = router