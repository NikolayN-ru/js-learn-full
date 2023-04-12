class Item {
  constructor(id, name, price, discount) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.discount = discount;
  }
}

class SeasonalDiscount {
  constructor(id, name, startDate, endDate, discount) {
    this.id = id;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.discount = discount;
  }
}

class TotalDiscount {
  constructor(id, minPrice, discount) {
    this.id = id;
    this.minPrice = minPrice;
    this.discount = discount;
  }
}

class Purchase {
  constructor(item, amount) {
    this.item = item;
    this.amount = amount;
  }
}

class ItemDiscount {
  constructor(itemId, discountId) {
    this.itemId = itemId;
    this.discountId = discountId;
  }
}

class Cart {
  constructor() {
    this.purchases = [];
    this.itemDiscounts = [];
    this.seasonalDiscounts = [];
    this.totalDiscounts = [];
  }

  addPurchase(purchase) {
    this.purchases.push(purchase);
  }

  removePurchase(purchase) {
    const index = this.purchases.indexOf(purchase);
    if (index !== -1) {
      this.purchases.splice(index, 1);
    }
  }

  addItemDiscount(itemDiscount) {
    this.itemDiscounts.push(itemDiscount);
  }

  removeItemDiscount(itemDiscount) {
    const index = this.itemDiscounts.indexOf(itemDiscount);
    if (index !== -1) {
      this.itemDiscounts.splice(index, 1);
    }
  }

  addSeasonalDiscount(seasonalDiscount) {
    this.seasonalDiscounts.push(seasonalDiscount);
  }

  removeSeasonalDiscount(seasonalDiscount) {
    const index = this.seasonalDiscounts.indexOf(seasonalDiscount);
    if (index !== -1) {
      this.seasonalDiscounts.splice(index, 1);
    }
  }

  addTotalDiscount(totalDiscount) {
    this.totalDiscounts.push(totalDiscount);
  }

  removeTotalDiscount(totalDiscount) {
    const index = this.totalDiscounts.indexOf(totalDiscount);
    if (index !== -1) {
      this.totalDiscounts.splice(index, 1);
    }
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    let totalAmount = 0;
    for (const purchase of this.purchases) {
      let itemPrice = purchase.item.price;
      for (const itemDiscount of this.itemDiscounts) {
        if (itemDiscount.itemId === purchase.item.id) {
          for (const seasonalDiscount of this.seasonalDiscounts) {
            if (seasonalDiscount.id === itemDiscount.discountId) {
              itemPrice *= 1 - seasonalDiscount.discount / 100;
            }
          }
          itemPrice *= 1 - purchase.item.discount / 100;
        }
      }
      totalPrice += itemPrice * purchase.amount;
      totalAmount += purchase.amount;
    }
    for (const totalDiscount of this.totalDiscounts) {
      if (totalPrice >= totalDiscount.minPrice) {
        totalPrice *= 1 - totalDiscount.discount / 100;
        break;
      }
    }
    return totalPrice;
  }
}

const items = [
  { id: 1, name: "мяч", price: 1000, discount: "10%" },
  { id: 2, name: "футболка", price: 2000, discount: "25%" },
];
const discounts = [
  {
    id: 1,
    name: "весенняя распродажа",
    startDate: "01.04",
    endDate: "01.07",
    discount: 20,
  },
  {
    id: 2,
    name: "новогодние скидки",
    startDate: "10.12",
    endDate: "20.05",
    discount: 30,
  },
];
const totalDiscounts = [
  { id: 1, minPrice: 1000, discount: "5%" },
  { id: 2, minPrice: 5000, discount: "6%" },
];
const purchases = [
  { item: 1, amount: 10 },
  { item: 2, amount: 5 },
];
const itemsDiscounts = [
  { itemId: 1, discountId: 1 },
  { itemId: 2, discountId: 1 },
  { itemId: 2, discountId: 2 },
];

const cart = new Cart();
for (const itemData of items) {
  const item = new Item(
    itemData.id,
    itemData.name,
    itemData.price,
    parseFloat(itemData.discount)
  );
  cart.addPurchase(new Purchase(item, 0));
}
for (const discountData of discounts) {
  const discount = new SeasonalDiscount(
    discountData.id,
    discountData.name,
    discountData.startDate,
    discountData.endDate,
    discountData.discount
  );
  for (const itemData of items) {
    if (itemData.name.toLowerCase().includes(discountData.name.toLowerCase())) {
      const itemDiscount = new ItemDiscount(itemData.id, discountData.id);
      cart.addItemDiscount(itemDiscount);
    }
  }
  cart.addSeasonalDiscount(discount);
}
for (const totalDiscountData of totalDiscounts) {
  const totalDiscount = new TotalDiscount(
    totalDiscountData.id,
    totalDiscountData.minPrice,
    parseFloat(totalDiscountData.discount)
  );
  cart.addTotalDiscount(totalDiscount);
}
for (const purchaseData of purchases) {
  const purchase = cart.purchases.find((p) => p.item.id === purchaseData.item);
  if (purchase) {
    purchase.amount = purchaseData.amount;
  }
}
for (const itemDiscountData of itemsDiscounts) {
  const itemDiscount = new ItemDiscount(
    itemDiscountData.itemId,
    itemDiscountData.discountId
  );
  cart.addItemDiscount(itemDiscount);
}

let totalWithoutDiscount = 0;
let totalWithDiscount = 0;
for (const purchase of cart.purchases) {
  const itemPrice = purchase.item.price * (1 - purchase.item.discount / 100);
  const itemDiscounts = cart.itemDiscounts.filter(
    (id) => id.itemId === purchase.item.id
  );
  let itemDiscount = 0;
  for (const itemDiscountId of itemDiscounts) {
    const seasonalDiscount = cart.seasonalDiscounts.find(
      (d) => d.id === itemDiscountId.discountId
    );
    if (seasonalDiscount) {
      itemDiscount += seasonalDiscount.discount;
    }
  }
  const totalPrice = itemPrice * purchase.amount * (1 - itemDiscount / 100);
  totalWithoutDiscount += itemPrice * purchase.amount;
  totalWithDiscount += totalPrice;
  console.log(
    `${purchase.item.name} - ${purchase.amount} штук, ${totalPrice.toFixed(
      2
    )} рублей (${(itemPrice * purchase.amount).toFixed(2)} рублей без скидки)`
  );
}
console.log(
  `Итого: ${totalWithDiscount.toFixed(
    2
  )} рублей (${totalWithoutDiscount.toFixed(2)} рублей без скидки)`
);
const totalDiscount = cart.totalDiscounts.reduce((maxDiscount, discount) => {
  if (
    totalWithDiscount >= discount.minPrice &&
    discount.discount > maxDiscount
  ) {
    return discount.discount;
  }
  return maxDiscount;
}, 0);
if (totalDiscount > 0) {
  const totalWithTotalDiscount = totalWithDiscount * (1 - totalDiscount / 100);
  console.log(`Итого со скидкой: ${totalWithTotalDiscount.toFixed(2)} рубля`);
} else {
  console.log(`Итого со скидкой: ${totalWithDiscount.toFixed(2)} рублей`);
}
