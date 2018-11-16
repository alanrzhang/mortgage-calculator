CREATE SCHEMA IF NOT EXISTS zillower ;

CREATE TABLE IF NOT EXISTS zillower.mortgage (
id INT NOT NULL,
address INT NOT NULL,
home_price INT NOT NULL,
property_tax INT NOT NULL,
home_insurance INT NOT NULL,
hoa_dues INT NOT NULL,
PRIMARY KEY (id)
);
