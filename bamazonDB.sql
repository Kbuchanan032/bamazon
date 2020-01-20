DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products
(
    id INT NOT NULL
    AUTO_INCREMENT,
    item_id INT NOT NULL,
    product_name VARCHAR
    (50) NOT NULL,
    department_name VARCHAR
    (50) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY
    (id)


);

    USE bamazon_db;



    INSERT INTO products
        (item_id, product_name, department_name,price,stock_quantity)
    VALUES
        (195, "CampChef Stove", "Camping", 150, 8);

    INSERT INTO products
        (item_id, product_name, department_name,price,stock_quantity)
    VALUES
        (158, "Canvas Cutter BedRoll", "Camping", 279, 4);

    INSERT INTO products
        (item_id, product_name, department_name,price,stock_quantity)
    VALUES
        (189, "SWARO 15x56 Bino", "Optics", 2500, 2);

    INSERT INTO products
        (item_id, product_name, department_name,price,stock_quantity)
    VALUES
        (173, "Badlands Pack", "Hiking", 250, 10);

    INSERT INTO products
        (item_id, product_name, department_name,price,stock_quantity)
    VALUES
        (145, "Danner Boot", "Hiking", 200, 15);

    INSERT INTO products
        (item_id, product_name, department_name,price,stock_quantity)
    VALUES
        (168, "Leupold Rangefinder", "Optics", 600, 6 );

    INSERT INTO products
        (item_id, product_name, department_name,price,stock_quantity)
    VALUES
        (184, "HOYTRX1", "Archery", 1500, 3);

    INSERT INTO products
        (item_id, product_name, department_name,price,stock_quantity)
    VALUES
        (135, "Spot Hogg Release", "Archery", 99, 11 );

    INSERT INTO products
        (item_id, product_name, department_name,price,stock_quantity)
    VALUES
        (129, "Manfrotto Tripod", "Optics", 150, 9);

    INSERT INTO products
        (item_id, product_name, department_name,price,stock_quantity)
    VALUES
        (156, "YETI Cooler", "Camping", 250, 5);
