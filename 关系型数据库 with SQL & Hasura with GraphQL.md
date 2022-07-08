# 关系型数据库 with SQL & Hasura with GraphQL

 ## 关系型数据库

> 关系型数据库，是指采用了**关系模型**来组织数据的数据库，其以行和列的形式存储数据，以便于用户理解，关系型数据库这一系列的行和列被称为**表**，一组表组成了数据库。用户通过查询来检索数据库中的数据，而查询是一个用于限定数据库中某些区域的执行代码。

### 关系模型

关系模型由美国IBM公司的E.F.Codd 于1970年在《Communication of the ACM》上发表的里程碑式论文 [A relational model of data for large shared data banks ](https://dl.acm.org/doi/10.1145/362384.362685)中被系统而严格地提出。

#### 关系数据结构

关系模型的基本数据结构就是**二维表**，也称为**关系**。关系模型中，现实世界的**实体**和实体间的各种**联系**都通过**关系**来表示。

**元组**是一个表的一行，**属性**是一个表的一列。（元组非python但属性可C#

关系数据库是表的集合，即**关系的集合**。表是一个实体集，一行代表了一个实体，它由共同表示一个的有关联的若干**属性**的值所构成。

* 例：

  Class (**classNo**, className, institute, grade) ; <!--实体表-->

  Student (**StudentNo**, studentName, sex, birthday, nation, <u>classNo</u>) ; <!--实体表-->

  Course (**courseNo**, courseName, creditHour, priorCourse); <!--实体表-->

  Score ( **<u>studentNo</u>**,**<u> courseNo</u>**, term, score);<!--关系表-->

##### 主键

> 在关系模型中，我们一般讲主码（和外码），它们与主键（和外键）有琐碎的区别。需要完全解释主码和外码，需要引入笛卡尔积等数学工具，在此不多赘述，仅介绍主键与外键。



##### 外键

