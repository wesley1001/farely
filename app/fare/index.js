const rates = {
  bonusPercent: 11,
  bonusMin: 5.5,
  rideCost: 2.75,
  transactionMax: 80
}

const getChange = cost => Number((cost - Math.trunc(cost)).toFixed(2) * 100)

const isValid = amount => !(getChange(amount) % 5) && (amount > 0)

const createFareMultiples = max => {
  const maxToSpend = (max > rates.transactionMax) ? rates.transactionMax : max

  let fares = []
  let fareMultiple = 0

  while (fareMultiple <= maxToSpend) {
    fareMultiple += rates.rideCost
    fares.push(fareMultiple)
  }

  return fares
}

const amountToAdd = (fare, balanceLeft) => {
  let amount = fare - balanceLeft
  let bonus = rates.bonusPercent * 0.01 + 1
  let amountWithBonus = (amount / bonus)

  let toAdd = (amountWithBonus < rates.bonusMin) ? amount : amountWithBonus

  return toAdd.toFixed(2)
}

const amountsToAdd = (balanceLeft, maxToSpend) => {
  if (balanceLeft === null || maxToSpend === null) return []
  if (balanceLeft === 0 && maxToSpend === 0) return []

  let purchases = []
  let fares = createFareMultiples(maxToSpend)

  for (let i = fares.length - 1; i >= 0; i--) {
    let toAdd = amountToAdd(fares[i], balanceLeft)

    if (isValid(toAdd)) {
      purchases.push({amount: toAdd, rides: fares[i] / rates.rideCost})
    }
  }

  return purchases
}

export default amountsToAdd
