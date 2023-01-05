CREATE TABLE balances(
	id int NOT NULL,
	address VARCHAR(320),
	denom VARCHAR(20),
	amount float NOT NULL,
	block_height float NOT NULL
);

select * from balances;

CREATE TABLE trades(
	id int NOT NULL,
	address VARCHAR(320),
	denom VARCHAR(20),
	amount float NOT NULL,
	block_height float NOT NULL
);

select * from trades;


select trades.address from trades inner join balances
on trades.address = balances.address where trades.block_height > 730000;


select b.balances from balances b left join trades t on t.address = b.address
where t.block_height > 730000 group by b.address,b.denom 

create view denom2(denom,value) as (select denom,amount from balances);
insert into denom2 values ('usdc',0.000001);

CREATE TABLE denom3(
	denom VARCHAR(20),
	value float NOT NULL
);

insert into denom3 values ('usdc',0.000001);
insert into denom3 values ('swth',0.00000005);
insert into denom3 values ('tmz',0.003);

select * from denom3;

DROP TABLE denom3;

create view final1 as (select b.address,sum(b.amount * d.value) as conversion
from balances b left join denom3 d on b.denom = d.denom group by b.address);

select f.address from (select b.address,sum(b.amount * d.value) as conversion
from balances b left join denom3 d on b.denom = d.denom group by b.address) f join trades t on f.address = t.address WHERE
t.block_height >= 730000 and f.conversion >= 500; /*final query*/










