
class productHasSale {

    product_id;
    sale_id;
    quantity_sale_product;
    price_product_sale;

    constructor(product_id, sale_id, quantity_sale_product, price_product_sale) {
        this.product_id = product_id;
        this.sale_id = sale_id;
        this.quantity_sale_product = quantity_sale_product;
        this.price_product_sale = price_product_sale;
    }
}

module.exports = productHasSale;


