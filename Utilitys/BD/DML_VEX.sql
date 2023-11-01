/*
-- Query: 
-- Date: 2022-10-01 17:08
*/
INSERT INTO trader (`id`,`name_trader`,`phone_trader`,`pass_trader`) VALUES (1,'Pedro','35999999999','123');
INSERT INTO trader (`id`,`name_trader`,`phone_trader`,`pass_trader`) VALUES (2,'Gabriel','35999998888','456');
INSERT INTO trader (`id`,`name_trader`,`phone_trader`,`pass_trader`) VALUES (3,'Felipe','35998989898','678');
INSERT INTO trader (`id`,`name_trader`,`phone_trader`,`pass_trader`) VALUES (4,'Luiz','35988998899','000');


/*
-- Query: 
-- Date: 2022-10-01 17:09
*/
INSERT INTO client (`id`,`name_client`,`phone_client`,`trader_id`) VALUES (1,'Carlos Alfredo','035999343434',2);
INSERT INTO client (`id`,`name_client`,`phone_client`,`trader_id`) VALUES (2,'Marcos Lopes','035988715672',3);
INSERT INTO client (`id`,`name_client`,`phone_client`,`trader_id`) VALUES (3,'Ana Amelia ','035991257256',1);

/*
-- Query: 
-- Date: 2022-10-01 17:08
*/
INSERT INTO product (`id`,`name_product`,`price_product`,`trader_id`) VALUES (1,'Camiseta',20.00,2);
INSERT INTO product (`id`,`name_product`,`price_product`,`trader_id`) VALUES (2,'Calça',40.00,2);
INSERT INTO product (`id`,`name_product`,`price_product`,`trader_id`) VALUES (3,'Computador ',1200.00,1);
INSERT INTO product (`id`,`name_product`,`price_product`,`trader_id`) VALUES (4,'Copo',2.00,3);
INSERT INTO product (`id`,`name_product`,`price_product`,`trader_id`) VALUES (5,'Monitor',1000.00,1);
INSERT INTO product (`id`,`name_product`,`price_product`,`trader_id`) VALUES (6,'Fralda ',36.90,4);


/*
-- Query: 
-- Date: 2022-10-01 17:20
*/
INSERT INTO sale (`id`,`date_sale`,`total_sale`,`client_id`) VALUES (1,'2022-09-01',20.0,1);
INSERT INTO sale (`id`,`date_sale`,`total_sale`,`client_id`) VALUES (2,'2022-09-01',1000.0,3);


/*
-- Query: 
-- Date: 2022-10-01 17:10
*/
INSERT INTO product_has_sale (`id`,`product_id`,`sale_id`,`quantity_sale_product`,`price_product_sale`) VALUES (1,1,1,1,20.00);
INSERT INTO product_has_sale (`id`,`product_id`,`sale_id`,`quantity_sale_product`,`price_product_sale`) VALUES (2,5,2,1,1000.00);
