const { faker } = require('@faker-js/faker')
const { join } = require('path')
const { writeFileSync } = require('fs')

const Treatment = require('../../src/entities/treatment')
const seederBaseFolder = join(__dirname, "../")
const ITEMS_AMOUNT = 4

const treatments = []

for (let index = 0; index <= ITEMS_AMOUNT; index++) {
    const treatment = new Treatment({
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
        createdAt: faker.date.between(),
        treatmentType: faker.commerce.productAdjective(),
        description: faker.commerce.productDescription()
    });
    treatments.push(treatment)
}

const write = (filename, data) => writeFileSync(join(seederBaseFolder, filename), JSON.stringify(data));

; (() => {
    write('treatments.json', treatments)

    console.log('treatments', treatments)
})()