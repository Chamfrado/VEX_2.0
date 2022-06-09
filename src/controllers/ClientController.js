const Client = require('../models/Client')


module.exports = {
    async listAll(req, res){
        const client = await Client.findAll();

        return res.json(client);
    },
    async store(req, res){
        const { name_client, phone_client, sale_id, trader_id  } = req.body;

        const client = await Client.create({  name_client, phone_client, sale_id, trader_id  });

        return res.json(client);
    },

    async delete(req, res){

        const { client_id } = req.params ;

        await Client.destroy({where: {id: client_id}});
        
        res.status(200).json({message: 'excluido com sucesso!'})

    },
    async update(req,res){
        const {  name_client, phone_client, sale_id, trader_id  } = req.body;
        const {client} = req.params;

        await Client.update({ name_client, phone_client, sale_id, trader_id})

        res.status(200).json({message: 'Atualizado com sucesso!'})
    }, 
    async getById(req, res){
        const client_id = req.params;

        const client = Client.findByPk({where: {id: client_id}});

        return res.json(client);
    }
}
//TESTE