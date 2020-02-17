/**
 *
 * @param {string} operation
 */
export function calculator(operation) {
  const terms = operation.split('+')

  let acc = 0
  for (let i = 0; i < terms.length; i++) {
    acc += parseInt(terms[i])
  }

  return acc
}
