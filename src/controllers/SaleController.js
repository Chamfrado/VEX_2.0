const Sale = require('../models/Sale')


module.exports = {
    async listAll(req, res){
        const sale = await Sale.findAll();

        return res.json(sale);
    },
    async store(req, res){
        const { date_sale, status_sale, price_sale, trader_id, purchase_in_installments, payment_control, total_sale  } = req.body;

        const sale = await Sale.create({ date_sale, status_sale, price_sale, trader_id, purchase_in_installments, payment_control, total_sale   });

        return res.json(sale);
    },

    async delete(req, res){

        const { sale_id } = req.params ;

        await Sale.destroy({where: {id: sale_id}});
        
        res.status(200).json({message: 'excluido com sucesso!'})

    },
    async update(req,res){
        const { date_sale, status_sale, price_sale, trader_id, purchase_in_installments, payment_control, total_sale   } = req.body;
        const {sale} = req.params;

        await Sale.update({date_sale, status_sale, price_sale, trader_id, purchase_in_installments, payment_control, total_sale })

        res.status(200).json({message: 'Atualizado com sucesso!'})
    }, 
    async getById(req, res){
        const sale_id = req.params;

        const sale = Sale.findByPk({where: {id: sale_id}});

        return res.json(sale);
    }
}