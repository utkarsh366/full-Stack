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
SELECT * FROM products WHERE price > 1.