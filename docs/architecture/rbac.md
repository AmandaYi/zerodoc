---
displayed_sidebar: Architecture
---

# nodejs实现后台管理系统权限管理RBAC

Nodejs中如何实现后台管理系统权限管理RBAC呢？

说明：基于角色的权限访问控制（Role-Based Access Control）。在RBAC中，权限与角色相关联，用户通过成为适当角色的成员而得到这些角色的权限。这就极大地简化了权限的管理。

## 1、Nodejs中RBAC实现流程
- 1、实现角色的增加修改删除
- 2、实现用户的增加修改删除，增加修改用户的时候需要选择角色
- 3、实现权限的增加修改删除 （页面菜单）
- 4、实现角色授权功能
- 5、判断当前登录的用户是否有访问菜单的权限
- 6、根据当前登录账户的角色信息动态显示左侧菜单

## 2、用户RBAC权限管理树形图
![用户RBAC权限管理树形图][1]


## 3、RBAC权限控制相关的数据库表

![RBAC权限控制相关的数据库表][2]


  [1]: /images/architecture/rbac01.png
  [2]: /images/architecture/rbac01.png