let data = {
    shops: [
      { shopId: 1, name: "Sector 25, Gurgaon", rent: 28500 },
      { shopId: 2, name: "Sector 53, Gurgaon", rent: 37400 },
      { shopId: 3, name: "Greater Kailash, Delhi", rent: 63100 },
      { shopId: 4, name: "Mall of India, Noida", rent: 54200 },
    ],
    products: [
      {
        productId: 1,
        productName: "Pepsi Can",
        category: "Soft Drinks",
        description: "300ml",
      },
      {
        productId: 2,
        productName: "Pepsi PET",
        category: "Soft Drinks",
        description: "500ml",
      },
      {
        productId: 3,
        productName: "Diet Coke",
        category: "Soft Drinks",
        description: "300ml Can",
      },
      {
        productId: 4,
        productName: "Mazaa",
        category: "Soft Drinks",
        description: "500ml bottle",
      },
      {
        productId: 5,
        productName: "Dairy Milk",
        category: "Chocolate",
        description: "25 g",
      },
      {
        productId: 6,
        productName: "Fruit & Nut",
        category: "Chocolate",
        description: "60 g",
      },
      {
        productId: 7,
        productName: "Silk - Crackles",
        category: "Chocolate",
        description: "100g",
      },
      {
        productId: 8,
        productName: "Perk",
        category: "Chocolate",
        description: "40 g",
      },
    ],
    purchases: [
      {
        purchaseId: 1,
        shopId: 1,
        productid: 1,
        quantity: 10,
        price: 25,
      },
      {
        purchaseId: 2,
        shopId: 1,
        productid: 2,
        quantity: 15,
        price: 32,
      },
      {
        purchaseId: 3,
        shopId: 1,
        productid: 3,
        quantity: 5,
        price: 27,
      },
      {
        purchaseId: 4,
        shopId: 1,
        productid: 4,
        quantity: 20,
        price: 31,
      },
      {
        purchaseId: 5,
        shopId: 2,
        productid: 5,
        quantity: 10,
        price: 8,
      },
      {
        purchaseId: 6,
        shopId: 2,
        productid: 5,
        quantity: 15,
        price: 8,
      },
      {
        purchaseId: 7,
        shopId: 2,
        productid: 5,
        quantity: 10,
        price: 8,
      },
      {
        purchaseId: 8,
        shopId: 2,
        productid: 5,
        quantity: 5,
        price: 8,
      },
      {
        purchaseId: 9,
        shopId: 2,
        productid: 8,
        quantity: 20,
        price: 12,
      },
      {
        purchaseId: 10,
        shopId: 2,
        productid: 8,
        quantity: 15,
        price: 11,
      },
      {
        purchaseId: 11,
        shopId: 2,
        productid: 8,
        quantity: 10,
        price: 12,
      },
      {
        purchaseId: 12,
        shopId: 2,
        productid: 6,
        quantity: 5,
        price: 40,
      },
      {
        purchaseId: 13,
        shopId: 1,
        productid: 1,
        quantity: 20,
        price: 25,
      },
      {
        purchaseId: 14,
        shopId: 1,
        productid: 2,
        quantity: 20,
        price: 32,
      },
      {
        purchaseId: 15,
        shopId: 1,
        productid: 3,
        quantity: 30,
        price: 27,
      },
      {
        purchaseId: 16,
        shopId: 1,
        productid: 4,
        quantity: 40,
        price: 31,
      },
      {
        purchaseId: 17,
        shopId: 3,
        productid: 8,
        quantity: 20,
        price: 12,
      },
      {
        purchaseId: 18,
        shopId: 3,
        productid: 8,
        quantity: 15,
        price: 11,
      },
      {
        purchaseId: 19,
        shopId: 4,
        productid: 8,
        quantity: 10,
        price: 12,
      },
      {
        purchaseId: 20,
        shopId: 4,
        productid: 6,
        quantity: 5,
        price: 40,
      },
      {
        purchaseId: 21,
        shopId: 3,
        productid: 1,
        quantity: 10,
        price: 25,
      },
      {
        purchaseId: 22,
        shopId: 3,
        productid: 2,
        quantity: 15,
        price: 32,
      },
      {
        purchaseId: 23,
        shopId: 4,
        productid: 3,
        quantity: 5,
        price: 27,
      },
      {
        purchaseId: 24,
        shopId: 1,
        productid: 4,
        quantity: 20,
        price: 31,
      },
      {
        purchaseId: 25,
        shopId: 2,
        productid: 5,
        quantity: 10,
        price: 8,
      },
      {
        purchaseId: 26,
        shopId: 4,
        productid: 5,
        quantity: 15,
        price: 8,
      },
      {
        purchaseId: 27,
        shopId: 2,
        productid: 5,
        quantity: 10,
        price: 8,
      },
      {
        purchaseId: 28,
        shopId: 1,
        productid: 5,
        quantity: 5,
        price: 8,
      },
      {
        purchaseId: 29,
        shopId: 3,
        productid: 8,
        quantity: 20,
        price: 12,
      },
      {
        purchaseId: 30,
        shopId: 1,
        productid: 8,
        quantity: 15,
        price: 11,
      },
      {
        purchaseId: 31,
        shopId: 2,
        productid: 8,
        quantity: 10,
        price: 12,
      },
      {
        purchaseId: 32,
        shopId: 2,
        productid: 6,
        quantity: 5,
        price: 40,
      },
      {
        purchaseId: 33,
        shopId: 2,
        productid: 1,
        quantity: 20,
        price: 25,
      },
      {
        purchaseId: 34,
        shopId: 1,
        productid: 2,
        quantity: 20,
        price: 32,
      },
      {
        purchaseId: 35,
        shopId: 3,
        productid: 3,
        quantity: 30,
        price: 27,
      },
      {
        purchaseId: 36,
        shopId: 4,
        productid: 4,
        quantity: 40,
        price: 31,
      },
      {
        purchaseId: 37,
        shopId: 2,
        productid: 8,
        quantity: 20,
        price: 12,
      },
      {
        purchaseId: 38,
        shopId: 3,
        productid: 8,
        quantity: 15,
        price: 11,
      },
      {
        purchaseId: 39,
        shopId: 4,
        productid: 8,
        quantity: 15,
        price: 12,
      },
      {
        purchaseId: 40,
        shopId: 4,
        productid: 6,
        quantity: 5,
        price: 40,
      },
      {
        purchaseId: 41,
        shopId: 3,
        productid: 1,
        quantity: 10,
        price: 25,
      },
      {
        purchaseId: 42,
        shopId: 3,
        productid: 2,
        quantity: 15,
        price: 32,
      },
      {
        purchaseId: 43,
        shopId: 1,
        productid: 3,
        quantity: 5,
        price: 27,
      },
      {
        purchaseId: 44,
        shopId: 1,
        productid: 4,
        quantity: 20,
        price: 31,
      },
      {
        purchaseId: 45,
        shopId: 3,
        productid: 5,
        quantity: 10,
        price: 8,
      },
      {
        purchaseId: 46,
        shopId: 2,
        productid: 5,
        quantity: 15,
        price: 8,
      },
      {
        purchaseId: 47,
        shopId: 2,
        productid: 5,
        quantity: 10,
        price: 8,
      },
      {
        purchaseId: 48,
        shopId: 4,
        productid: 5,
        quantity: 5,
        price: 8,
      },
      {
        purchaseId: 49,
        shopId: 2,
        productid: 8,
        quantity: 20,
        price: 12,
      },
      {
        purchaseId: 50,
        shopId: 2,
        productid: 8,
        quantity: 15,
        price: 11,
      },
      {
        purchaseId: 51,
        shopId: 2,
        productid: 8,
        quantity: 10,
        price: 12,
      },
      {
        purchaseId: 52,
        shopId: 4,
        productid: 6,
        quantity: 5,
        price: 40,
      },
      {
        purchaseId: 53,
        shopId: 3,
        productid: 1,
        quantity: 20,
        price: 25,
      },
      {
        purchaseId: 54,
        shopId: 1,
        productid: 2,
        quantity: 20,
        price: 32,
      },
      {
        purchaseId: 55,
        shopId: 1,
        productid: 3,
        quantity: 30,
        price: 27,
      },
      {
        purchaseId: 56,
        shopId: 1,
        productid: 4,
        quantity: 40,
        price: 31,
      },
      {
        purchaseId: 57,
        shopId: 3,
        productid: 8,
        quantity: 20,
        price: 12,
      },
      {
        purchaseId: 58,
        shopId: 3,
        productid: 8,
        quantity: 15,
        price: 11,
      },
      {
        purchaseId: 59,
        shopId: 4,
        productid: 8,
        quantity: 10,
        price: 12,
      },
      {
        purchaseId: 60,
        shopId: 4,
        productid: 6,
        quantity: 5,
        price: 40,
      },
      {
        purchaseId: 61,
        shopId: 3,
        productid: 1,
        quantity: 10,
        price: 25,
      },
      {
        purchaseId: 62,
        shopId: 4,
        productid: 2,
        quantity: 15,
        price: 32,
      },
      {
        purchaseId: 63,
        shopId: 1,
        productid: 3,
        quantity: 5,
        price: 27,
      },
      {
        purchaseId: 64,
        shopId: 3,
        productid: 4,
        quantity: 20,
        price: 31,
      },
      {
        purchaseId: 65,
        shopId: 3,
        productid: 5,
        quantity: 10,
        price: 8,
      },
      {
        purchaseId: 66,
        shopId: 4,
        productid: 5,
        quantity: 15,
        price: 8,
      },
      {
        purchaseId: 67,
        shopId: 2,
        productid: 5,
        quantity: 10,
        price: 8,
      },
      {
        purchaseId: 68,
        shopId: 1,
        productid: 5,
        quantity: 5,
        price: 8,
      },
      {
        purchaseId: 69,
        shopId: 3,
        productid: 8,
        quantity: 20,
        price: 12,
      },
      {
        purchaseId: 70,
        shopId: 1,
        productid: 8,
        quantity: 15,
        price: 11,
      },
      {
        purchaseId: 71,
        shopId: 2,
        productid: 8,
        quantity: 10,
        price: 12,
      },
      {
        purchaseId: 72,
        shopId: 2,
        productid: 6,
        quantity: 5,
        price: 40,
      },
      {
        purchaseId: 73,
        shopId: 2,
        productid: 1,
        quantity: 20,
        price: 25,
      },
      {
        purchaseId: 74,
        shopId: 1,
        productid: 2,
        quantity: 20,
        price: 32,
      },
      {
        purchaseId: 75,
        shopId: 3,
        productid: 3,
        quantity: 30,
        price: 27,
      },
      {
        purchaseId: 76,
        shopId: 4,
        productid: 4,
        quantity: 40,
        price: 31,
      },
      {
        purchaseId: 77,
        shopId: 2,
        productid: 8,
        quantity: 20,
        price: 12,
      },
      {
        purchaseId: 78,
        shopId: 3,
        productid: 8,
        quantity: 15,
        price: 11,
      },
      {
        purchaseId: 79,
        shopId: 4,
        productid: 8,
        quantity: 15,
        price: 12,
      },
      {
        purchaseId: 80,
        shopId: 1,
        productid: 6,
        quantity: 5,
        price: 40,
      },
    ],
  };
  module.exports.data=data;