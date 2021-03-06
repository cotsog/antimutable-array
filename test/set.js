/* @flow */

import * as AntimutableArray from '../'
import test from 'tape'

test('test noop', test => {
  const array = [1, 2, 3, 4, 5]

  // Positive index is resolved from front.
  test.equal(AntimutableArray.set(0, 1, array), array)
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.equal(AntimutableArray.set(1, 2, array), array)
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.equal(AntimutableArray.set(2, 3, array), array)
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.equal(AntimutableArray.set(3, 4, array), array)
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.equal(AntimutableArray.set(4, 5, array), array)
  test.deepEqual(array, [1, 2, 3, 4, 5])

  // Negative index resolved from rear.
  test.equal(AntimutableArray.set(-1, 5, array), array)
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.equal(AntimutableArray.set(-2, 4, array), array)
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.equal(AntimutableArray.set(-3, 3, array), array)
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.equal(AntimutableArray.set(-4, 2, array), array)
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.equal(AntimutableArray.set(-5, 1, array), array)
  test.deepEqual(array, [1, 2, 3, 4, 5])

  // Ignored if off-bounds.
  test.equal(AntimutableArray.set(-6, 1, array), array)
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.equal(AntimutableArray.set(-7, 7, array), array)
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.equal(AntimutableArray.set(5, 5, array), array)
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.equal(AntimutableArray.set(6, 1, array), array)
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.equal(AntimutableArray.set(7, 1, array), array)
  test.deepEqual(array, [1, 2, 3, 4, 5])

  test.end()
})

test('test set from front', test => {
  const array = [1, 2, 3, 4, 5]

  test.deepEqual(AntimutableArray.set(0, 7, array), [7, 2, 3, 4, 5])
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.set(1, 7, array), [1, 7, 3, 4, 5])
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.set(2, 7, array), [1, 2, 7, 4, 5])
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.set(3, 7, array), [1, 2, 3, 7, 5])
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.set(4, 7, array), [1, 2, 3, 4, 7])
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.set(5, 7, array), [1, 2, 3, 4, 5])
  test.deepEqual(array, [1, 2, 3, 4, 5])

  test.end()
})

test('test set from rear', test => {
  const array = [1, 2, 3, 4, 5]

  test.deepEqual(AntimutableArray.set(-6, 7, array), [1, 2, 3, 4, 5])
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.set(-5, 7, array), [7, 2, 3, 4, 5])
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.set(-4, 7, array), [1, 7, 3, 4, 5])
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.set(-3, 7, array), [1, 2, 7, 4, 5])
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.set(-2, 7, array), [1, 2, 3, 7, 5])
  test.deepEqual(array, [1, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.set(-1, 7, array), [1, 2, 3, 4, 7])
  test.deepEqual(array, [1, 2, 3, 4, 5])

  test.end()
})
