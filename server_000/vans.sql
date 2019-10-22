#设置客户端连接服务器的编码为utf8
SET NAMES UTF8;
DROP DATABASE IF EXISTS vans;
#创建数据库，设置存储数据的编码为utf8
CREATE DATABASE vans CHARSET=UTF8;

#vans.sql创建表添加数据
#功能一：创建vans_login用户登录表
USE vans;
CREATE TABLE vans_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(50),
  upwd  VARCHAR(32)
);
#功能二:添加两条测试数据
INSERT INTO vans_login VALUES(null,'tom',md5('123'));
INSERT INTO vans_login VALUES(null,'jerry',md5('123'));



/**鞋图片**/
#功能三：
CREATE TABLE vans_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  price DECIMAL(10,2),        #价格
  title VARCHAR(128),         #主标题
  sm VARCHAR(128),            #小图片路径
  md VARCHAR(128)            #中图片路径
);
INSERT INTO vans_product VALUES
( 1,'765','Black Ball SF 男女运动板鞋','../img/1_sm.jpg','../img/1_md.jpg'),
( 2,'665','Old Skool 男女板鞋','../img/2_sm.jpg','../img/2_md.jpg'),
( 3,'465','Vans sports 男女款鞋 ','../img/3_sm.jpg','../img/3_md.jpg'),
( 4,'875','Vans sports 男女款板鞋','../img/4_sm.jpg','../img/4_md.jpg'),
( 5,'585','ComfyCush Slip 男女板鞋 ','../img/5_sm.jpg','../img/5_md.jpg'),
( 6,'865','Black Ball SF 男女板鞋','../img/6_sm.jpg','../img/6_md.jpg');

#功能四: 购物车
CREATE TABLE vans_cart(
  id INT PRIMARY KEY AUTO_INCREMENT,
  price DECIMAL(10,2), 
  count INT,
  lname VARCHAR(255)
);





