                                --CURD operations in SQL
                                 --Creating a TABLE
CREATE TABLE products (
id INT NOT NULL,
name STRING,
price MONEY,
PRIMARY KEY (id)
);
           
                              --Insert a products

INSERT INTO products VALUES (1, 'pen', 1.20)

                            --leaving a vacent place in a row

INSERT INTO products(id, name) VALUES(2, 'apple')

//Reading
                        --Reading whole TABLE
SELECT *  FROM products;

                       --Reading specific COLUMN from the TABLE
SELECT price, id FROM products;

                      --Reading with WHERE clause
SELECT * FROM products WHERE id  = 1;

--Updating
UPDATE products SET price=5.99 WHERE id=1;

--Deleting
DELETE FROM products WHERE id=3;

--Adding new column in existing table 
ALTER TABLE products 
ADD stock int;
--updating the new column
UPDATE products
SET stocks = 12
WHERE  id = 1;

        --DELETE
DELETE FROM products
WHERE id = 2

/*
In CURD Operations:
-C stands for Create which is used to add new records or data into the database.
-U stands for Update which is used to modify existing records or data in the database.
-R stands for Read which is used to retrieve information from the database. This operation does not change any data but displays it on screen.
-R stands for Read which is used to fetch the record or data from the database.
-D stands for Delete which is used to remove records or data from the database.
*/



-- join 
 --creating a customer table
 











--inner join
SELECT order.order_no, cusomer.first_name, customers.last_name, customers.address
from 'order'
INNER join customer or order.customer_id = customer_id
