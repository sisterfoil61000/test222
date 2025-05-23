const { v4: uuid } = require('uuid');

module.exports = {
  /**
   * @param{import("sequelize").QueryInterface} queryInterface
   * @return {Promise<void>}
   */
  async up(queryInterface) {
    const createdAt = new Date();
    const updatedAt = new Date();

    /** @type {Map<string, string>} */
    const idMap = new Map();

    /**
     * @param {string} key
     * @return {string}
     */
    function getId(key) {
      if (idMap.has(key)) {
        return idMap.get(key);
      }
      const id = uuid();
      idMap.set(key, id);
      return id;
    }

    await queryInterface.bulkInsert('roles', [
      {
        id: getId('Administrator'),
        name: 'Administrator',
        createdAt,
        updatedAt,
      },

      {
        id: getId('SystemOverseer'),
        name: 'System Overseer',
        createdAt,
        updatedAt,
      },

      {
        id: getId('OperationsManager'),
        name: 'Operations Manager',
        createdAt,
        updatedAt,
      },

      {
        id: getId('InventorySpecialist'),
        name: 'Inventory Specialist',
        createdAt,
        updatedAt,
      },

      {
        id: getId('OrderFulfillment'),
        name: 'Order Fulfillment',
        createdAt,
        updatedAt,
      },

      {
        id: getId('CustomerService'),
        name: 'Customer Service',
        createdAt,
        updatedAt,
      },
    ]);

    /**
     * @param {string} name
     */
    function createPermissions(name) {
      return [
        {
          id: getId(`CREATE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `CREATE_${name.toUpperCase()}`,
        },
        {
          id: getId(`READ_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `READ_${name.toUpperCase()}`,
        },
        {
          id: getId(`UPDATE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `UPDATE_${name.toUpperCase()}`,
        },
        {
          id: getId(`DELETE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `DELETE_${name.toUpperCase()}`,
        },
      ];
    }

    const entities = [
      'users',
      'categories',
      'coffee_blends',
      'customers',
      'orders',
      'payments',
      'reports',
      'roles',
      'permissions',
      'category',
      ,
    ];
    await queryInterface.bulkInsert(
      'permissions',
      entities.flatMap(createPermissions),
    );
    await queryInterface.bulkInsert('permissions', [
      {
        id: getId(`READ_API_DOCS`),
        createdAt,
        updatedAt,
        name: `READ_API_DOCS`,
      },
    ]);
    await queryInterface.bulkInsert('permissions', [
      {
        id: getId(`CREATE_SEARCH`),
        createdAt,
        updatedAt,
        name: `CREATE_SEARCH`,
      },
    ]);

    await queryInterface.sequelize
      .query(`create table "rolesPermissionsPermissions"
(
"createdAt"           timestamp with time zone not null,
"updatedAt"           timestamp with time zone not null,
"roles_permissionsId" uuid                     not null,
"permissionId"        uuid                     not null,
primary key ("roles_permissionsId", "permissionId")
);`);

    await queryInterface.bulkInsert('rolesPermissionsPermissions', [
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('CREATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('UPDATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('DELETE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('CREATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('CREATE_CATEGORIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('READ_CATEGORIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('UPDATE_CATEGORIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('DELETE_CATEGORIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('CREATE_CATEGORIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('READ_CATEGORIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('UPDATE_CATEGORIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('InventorySpecialist'),
        permissionId: getId('CREATE_CATEGORIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('InventorySpecialist'),
        permissionId: getId('READ_CATEGORIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('InventorySpecialist'),
        permissionId: getId('UPDATE_CATEGORIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OrderFulfillment'),
        permissionId: getId('CREATE_CATEGORIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OrderFulfillment'),
        permissionId: getId('READ_CATEGORIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CustomerService'),
        permissionId: getId('CREATE_CATEGORIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CustomerService'),
        permissionId: getId('READ_CATEGORIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('CREATE_COFFEE_BLENDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('READ_COFFEE_BLENDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('UPDATE_COFFEE_BLENDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('DELETE_COFFEE_BLENDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('CREATE_COFFEE_BLENDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('READ_COFFEE_BLENDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('UPDATE_COFFEE_BLENDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('InventorySpecialist'),
        permissionId: getId('CREATE_COFFEE_BLENDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('InventorySpecialist'),
        permissionId: getId('READ_COFFEE_BLENDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('InventorySpecialist'),
        permissionId: getId('UPDATE_COFFEE_BLENDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OrderFulfillment'),
        permissionId: getId('CREATE_COFFEE_BLENDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OrderFulfillment'),
        permissionId: getId('READ_COFFEE_BLENDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CustomerService'),
        permissionId: getId('CREATE_COFFEE_BLENDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CustomerService'),
        permissionId: getId('READ_COFFEE_BLENDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('CREATE_CUSTOMERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('READ_CUSTOMERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('UPDATE_CUSTOMERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('DELETE_CUSTOMERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('CREATE_CUSTOMERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('READ_CUSTOMERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('UPDATE_CUSTOMERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('InventorySpecialist'),
        permissionId: getId('CREATE_CUSTOMERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('InventorySpecialist'),
        permissionId: getId('READ_CUSTOMERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OrderFulfillment'),
        permissionId: getId('CREATE_CUSTOMERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OrderFulfillment'),
        permissionId: getId('READ_CUSTOMERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CustomerService'),
        permissionId: getId('CREATE_CUSTOMERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CustomerService'),
        permissionId: getId('READ_CUSTOMERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CustomerService'),
        permissionId: getId('UPDATE_CUSTOMERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('CREATE_ORDERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('READ_ORDERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('UPDATE_ORDERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('DELETE_ORDERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('CREATE_ORDERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('READ_ORDERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('UPDATE_ORDERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('InventorySpecialist'),
        permissionId: getId('CREATE_ORDERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('InventorySpecialist'),
        permissionId: getId('READ_ORDERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OrderFulfillment'),
        permissionId: getId('CREATE_ORDERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OrderFulfillment'),
        permissionId: getId('READ_ORDERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OrderFulfillment'),
        permissionId: getId('UPDATE_ORDERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CustomerService'),
        permissionId: getId('CREATE_ORDERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CustomerService'),
        permissionId: getId('READ_ORDERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CustomerService'),
        permissionId: getId('UPDATE_ORDERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('CREATE_PAYMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('READ_PAYMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('UPDATE_PAYMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('DELETE_PAYMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('CREATE_PAYMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('READ_PAYMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('UPDATE_PAYMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('InventorySpecialist'),
        permissionId: getId('CREATE_PAYMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('InventorySpecialist'),
        permissionId: getId('READ_PAYMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OrderFulfillment'),
        permissionId: getId('CREATE_PAYMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OrderFulfillment'),
        permissionId: getId('READ_PAYMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CustomerService'),
        permissionId: getId('CREATE_PAYMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CustomerService'),
        permissionId: getId('READ_PAYMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('CREATE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('READ_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('UPDATE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('DELETE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('CREATE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('READ_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('UPDATE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('InventorySpecialist'),
        permissionId: getId('CREATE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('InventorySpecialist'),
        permissionId: getId('READ_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OrderFulfillment'),
        permissionId: getId('CREATE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OrderFulfillment'),
        permissionId: getId('READ_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CustomerService'),
        permissionId: getId('CREATE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CustomerService'),
        permissionId: getId('READ_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SystemOverseer'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OperationsManager'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('InventorySpecialist'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('OrderFulfillment'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CustomerService'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_CATEGORIES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_CATEGORIES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_CATEGORIES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_CATEGORIES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_COFFEE_BLENDS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_COFFEE_BLENDS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_COFFEE_BLENDS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_COFFEE_BLENDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_CUSTOMERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_CUSTOMERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_CUSTOMERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_CUSTOMERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_ORDERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_ORDERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_ORDERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_ORDERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_PAYMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_PAYMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_PAYMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_PAYMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_REPORTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_REPORTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_REPORTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_REPORTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_ROLES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_PERMISSIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_CATEGORY'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_CATEGORY'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_CATEGORY'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_CATEGORY'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_API_DOCS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_SEARCH'),
      },
    ]);

    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'SuperAdmin',
      )}' WHERE "email"='super_admin@flatlogic.com'`,
    );
    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'Administrator',
      )}' WHERE "email"='admin@flatlogic.com'`,
    );

    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'SystemOverseer',
      )}' WHERE "email"='client@hello.com'`,
    );
    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'OperationsManager',
      )}' WHERE "email"='john@doe.com'`,
    );
  },
};
