// CLIENT


//List All Client
    const sqlQuery = 'SELECT * FROM client';

//Get by Id

    const sqlQuery = 'SELECT * FROM client WHERE id = ?';

//Add Client

        const sqlQuery = 'INSERT INTO client SET ?';

//Delete Client

        const sqlQuery = 'DELETE FROM client WHERE id = ?';


//Update Client

        const sqlQuery = 'UPDATE client SET name_client = ?, phone_client = ? WHERE id = ?';





//SALE


//List All Sale
    const sqlQuery = 'SELECT * FROM sale';

//Get by Id

    const sqlQuery = 'SELECT * FROM sale WHERE id = ?';

//Add Sale

        const sqlQuery = 'INSERT INTO sale SET ?';

//Delete Sale

        const sqlQuery = 'DELETE FROM sale WHERE id = ?';


//Update Sale

        const sqlQuery = 'UPDATE sale SET date_sale = ?, status_sale = ?, installment = ?, total_installment = ?, payment_control = ?, total_sale = ?, payment_date = ?, tax_value = ?, trader_receivement_value = ?,  WHERE id = ?';




//TRADER


//List All Trader
    const sqlQuery = 'SELECT * FROM trader';

//Get by Id

    const sqlQuery = 'SELECT * FROM trader WHERE id = ?';

//Add Trader

        const sqlQuery = 'INSERT INTO trader SET ?';

//Delete Trader

        const sqlQuery = 'DELETE FROM trader WHERE id = ?';


//Update Trader

        const sqlQuery = 'UPDATE trader SET name_trader = ?, phone_trader = ?, pass_trader = ?, date_acess = ? date_term = ?, status_trader = ? WHERE id = ?';




//PRODUCT


//List All Product
    const sqlQuery = 'SELECT * FROM product';

//Get by Id

    const sqlQuery = 'SELECT * FROM product WHERE id = ?';

//Add Product

        const sqlQuery = 'INSERT INTO product SET ?';

//Delete Product

        const sqlQuery = 'DELETE FROM product WHERE id = ?';


//Update Product

        const sqlQuery = 'UPDATE product SET name_product = ?, price_product = ?, quantity_product = ?, description_product = ? WHERE id = ?';




//PRODUCT_AS_SALE


//List All Product_As_Sale
    const sqlQuery = 'SELECT * FROM product_as_sale';

//Get by Id

    const sqlQuery = 'SELECT * FROM product_as_sale WHERE id = ?';

//Add Product_As_Sale

        const sqlQuery = 'INSERT INTO product_as_sale SET ?';

//Delete Product_As_Sale

        const sqlQuery = 'DELETE FROM product_as_sale WHERE id = ?';


//Update Product_As_Sale

        const sqlQuery = 'UPDATE product_as_sale SET name_product = ?, price_product = ?, quantity_product = ?, description_product = ? WHERE id = ?';
