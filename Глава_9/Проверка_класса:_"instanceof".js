// Но instanceof не учитывает саму функцию при проверке,
// а только prototype, который проверяется на совпадения в прототипной цепочке.

// И в данном примере a.__proto__ == B.prototype, так что instanceof возвращает true.