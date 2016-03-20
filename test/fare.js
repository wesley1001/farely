import test from 'ava'
import fn from '../app/fare'

test('takes no data', t => {
  let amounts = fn(0, 0)

  t.is(amounts.length, 0)
})

test('takes $0 balance', t => {
  let amounts = fn(0, 40)

  t.is(amounts.length, 4)
  t.is(amounts[0].rides, 11)
  t.is(amounts[0].amount, '27.25')
  t.is(amounts[3].rides, 1)
  t.is(amounts[3].amount, '2.75')
})

test('calculates the bonus for amounts > the bonus minimum', t => {
  let amounts = fn(0.01, 20)

  t.ok(Number(amounts[0].amount) >= 5.5)
})

test('returns amounts without bonus when an amount would not receive a bonus', t => {
  let maxPurchaseAmountWithoutBonus = 5.5 * 11 / 10.0
  let amounts = fn(0, maxPurchaseAmountWithoutBonus)

  amounts.forEach(({amount, rides}) => {
    t.is(Number(amount), 2.75 * rides)
  })
})

test('takes a maximum-to-add value', t => {
  let maxToSpend = 20
  let amounts = fn(10, maxToSpend)

  t.ok(Number(amounts[0].amount) <= maxToSpend)
})

test('caps the max-to-add', t => {
  let amounts = fn(10, 80 + 15)

  t.ok(Number(amounts[0].amount) <= 80)
})
