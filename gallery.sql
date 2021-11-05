
-- DATABASE NAME: costco_shopping

CREATE TABLE shopping_list (
	id SERIAL PRIMARY KEY,
	item text,
	description text,
	price integer,
	purchased bollean
);
