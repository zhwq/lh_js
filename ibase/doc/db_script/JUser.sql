--建表
drop table JUser;
create table JUser(
       id varchar2(32),
       accounts varchar2(32),
       username varchar2(32),
       password varchar2(32),
       extra varchar2(200)
);
--插入记录
insert into JUser(id,accounts,username,password,extra) 
            values('root','admin','镇南关','a','手动插入的记录');
--查询出所有记录
select * from JUser;
delete from JUser where id = 'j001';
commit;
