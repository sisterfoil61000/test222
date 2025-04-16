const db = require('../models');
const Users = db.users;

const Categories = db.categories;

const CoffeeBlends = db.coffee_blends;

const Customers = db.customers;

const Orders = db.orders;

const Payments = db.payments;

const Reports = db.reports;

const Category = db.category;

const CategoriesData = [
  {
    name: 'Organic',

    type: 'Organic',
  },

  {
    name: 'Fair Trade',

    type: 'Organic',
  },

  {
    name: 'Seasonal',

    type: 'Seasonal',
  },

  {
    name: 'Decaf',

    type: 'Seasonal',
  },
];

const CoffeeBlendsData = [
  {
    name: 'Ethiopian Yirgacheffe',

    price: 12.99,

    stock_level: 100,

    // type code here for "relation_many" field

    // type code here for "relation_many" field
  },

  {
    name: 'Colombian Supremo',

    price: 10.99,

    stock_level: 150,

    // type code here for "relation_many" field

    // type code here for "relation_many" field
  },

  {
    name: 'Espresso Roast',

    price: 14.99,

    stock_level: 200,

    // type code here for "relation_many" field

    // type code here for "relation_many" field
  },

  {
    name: 'Guatemalan Antigua',

    price: 11.99,

    stock_level: 120,

    // type code here for "relation_many" field

    // type code here for "relation_many" field
  },
];

const CustomersData = [
  {
    full_name: 'John Doe',

    email: 'john.doe@example.com',

    // type code here for "relation_many" field
  },

  {
    full_name: 'Jane Smith',

    email: 'jane.smith@example.com',

    // type code here for "relation_many" field
  },

  {
    full_name: 'Emily Johnson',

    email: 'emily.johnson@example.com',

    // type code here for "relation_many" field
  },

  {
    full_name: 'Michael Brown',

    email: 'michael.brown@example.com',

    // type code here for "relation_many" field
  },
];

const OrdersData = [
  {
    order_date: new Date('2023-10-01T10:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_many" field

    status: 'Shipped',
  },

  {
    order_date: new Date('2023-10-02T11:30:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_many" field

    status: 'Pending',
  },

  {
    order_date: new Date('2023-10-03T14:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_many" field

    status: 'Shipped',
  },

  {
    order_date: new Date('2023-10-04T09:15:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_many" field

    status: 'Delivered',
  },
];

const PaymentsData = [
  {
    amount: 25.98,

    // type code here for "relation_one" field

    status: 'Refunded',
  },

  {
    amount: 14.99,

    // type code here for "relation_one" field

    status: 'Refunded',
  },

  {
    amount: 26.98,

    // type code here for "relation_one" field

    status: 'Processed',
  },

  {
    amount: 23.98,

    // type code here for "relation_one" field

    status: 'Refunded',
  },
];

const ReportsData = [
  {
    generated_at: new Date('2023-10-06T08:00:00Z'),

    // type code here for "relation_many" field
  },

  {
    generated_at: new Date('2023-10-07T08:00:00Z'),

    // type code here for "relation_many" field
  },

  {
    generated_at: new Date('2023-10-08T08:00:00Z'),

    // type code here for "relation_many" field
  },

  {
    generated_at: new Date('2023-10-09T08:00:00Z'),

    // type code here for "relation_many" field
  },
];

const CategoryData = [{}, {}, {}, {}];

// Similar logic for "relation_many"

// Similar logic for "relation_many"

// Similar logic for "relation_many"

// Similar logic for "relation_many"

async function associateOrderWithCustomer() {
  const relatedCustomer0 = await Customers.findOne({
    offset: Math.floor(Math.random() * (await Customers.count())),
  });
  const Order0 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Order0?.setCustomer) {
    await Order0.setCustomer(relatedCustomer0);
  }

  const relatedCustomer1 = await Customers.findOne({
    offset: Math.floor(Math.random() * (await Customers.count())),
  });
  const Order1 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Order1?.setCustomer) {
    await Order1.setCustomer(relatedCustomer1);
  }

  const relatedCustomer2 = await Customers.findOne({
    offset: Math.floor(Math.random() * (await Customers.count())),
  });
  const Order2 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Order2?.setCustomer) {
    await Order2.setCustomer(relatedCustomer2);
  }

  const relatedCustomer3 = await Customers.findOne({
    offset: Math.floor(Math.random() * (await Customers.count())),
  });
  const Order3 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Order3?.setCustomer) {
    await Order3.setCustomer(relatedCustomer3);
  }
}

// Similar logic for "relation_many"

async function associatePaymentWithOrder() {
  const relatedOrder0 = await Orders.findOne({
    offset: Math.floor(Math.random() * (await Orders.count())),
  });
  const Payment0 = await Payments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Payment0?.setOrder) {
    await Payment0.setOrder(relatedOrder0);
  }

  const relatedOrder1 = await Orders.findOne({
    offset: Math.floor(Math.random() * (await Orders.count())),
  });
  const Payment1 = await Payments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Payment1?.setOrder) {
    await Payment1.setOrder(relatedOrder1);
  }

  const relatedOrder2 = await Orders.findOne({
    offset: Math.floor(Math.random() * (await Orders.count())),
  });
  const Payment2 = await Payments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Payment2?.setOrder) {
    await Payment2.setOrder(relatedOrder2);
  }

  const relatedOrder3 = await Orders.findOne({
    offset: Math.floor(Math.random() * (await Orders.count())),
  });
  const Payment3 = await Payments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Payment3?.setOrder) {
    await Payment3.setOrder(relatedOrder3);
  }
}

// Similar logic for "relation_many"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Categories.bulkCreate(CategoriesData);

    await CoffeeBlends.bulkCreate(CoffeeBlendsData);

    await Customers.bulkCreate(CustomersData);

    await Orders.bulkCreate(OrdersData);

    await Payments.bulkCreate(PaymentsData);

    await Reports.bulkCreate(ReportsData);

    await Category.bulkCreate(CategoryData);

    await Promise.all([
      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      await associateOrderWithCustomer(),

      // Similar logic for "relation_many"

      await associatePaymentWithOrder(),

      // Similar logic for "relation_many"
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});

    await queryInterface.bulkDelete('coffee_blends', null, {});

    await queryInterface.bulkDelete('customers', null, {});

    await queryInterface.bulkDelete('orders', null, {});

    await queryInterface.bulkDelete('payments', null, {});

    await queryInterface.bulkDelete('reports', null, {});

    await queryInterface.bulkDelete('category', null, {});
  },
};
