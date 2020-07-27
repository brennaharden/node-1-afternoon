const products = require('../products.json')

const getProduct =  (req, res) => {
    const oneProduct = products.find(elem => elem.id === +req.params.id)
    if (!oneProduct) {
        return res.status(500).send("Item not on list")
    }
    res.status(200).send(oneProduct)
}

module.exports = getProduct