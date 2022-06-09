const Product = require('../models/Product')


module.exports = {
    async listAll(req, res){
        const product = await Product.findAll();

        return res.json(product);
    },
    async store(req, res){
        const { name_product, price_product, quantity_product, description_product, trader_id  } = req.body;

        const product = await Product.create({ name_product, price_product, quantity_product, description_product, trader_id });

        return res.json(product);
    },

    async delete(req, res){

        const { product_id } = req.params ;

        await Product.destroy({where: {id: product_id}});
        
        res.status(200).json({message: 'excluido com sucesso!'})

    },
    async update(req,res){
        const {  name_product, price_product, quantity_product, description_product, trader_id  } = req.body;
        const {product} = req.params;

        await Product.update({ name_product, price_product, quantity_product, description_product, trader_id })

        res.status(200).json({message: 'Atualizado com sucesso!'})
    }, 
    async getById(req, res){
        const product_id = req.params;

        const product = Product.findByPk({where: {id: product_id}});

        return res.json(product);
    }
}