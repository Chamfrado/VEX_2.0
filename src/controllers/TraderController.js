const Trader = require('../models/Trader')


module.exports = {
    async listAll(req, res){
        const trader = await Trader.findAll();

        return res.json(trader);
    },
    async store(req, res){
        const { name_trader, phone_trader, email_trader, pass_trader, date_acess, date_term  } = req.body;

        const trader = await Trader.create({ name_trader, phone_trader, email_trader, pass_trader, date_acess, date_term  });

        return res.json(trader);
    },

    async delete(req, res){

        const { trader_id } = req.params ;

        await Trader.destroy({where: {id: trader_id}});
        
        res.status(200).json({message: 'excluido com sucesso!'})

    },
    async update(req,res){
        const { name_trader, phone_trader, email_trader, pass_trader, date_acess, date_term  } = req.body;
        const {trader_id} = req.params;

        await Trader.update({name_trader, phone_trader, email_trader, pass_trader, date_acess, date_term},{where: {id: trader_id}})

        res.status(200).json({message: 'Atualizado com sucesso!'})
    }, 
    async getById(req, res){
        const trader_id = req.params;

        const trader = Trader.findByPk({where: {id: trader_id}});

        return res.json(trader);
    }
}