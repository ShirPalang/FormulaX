export const calculate = (expression: string): number => {
  const tokens = expression.match(/\d+(\.\d+)?|[+\-*/]/g)

  if (!tokens) return 0

  let result = Number(tokens[0])

  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i]
    const number = Number(tokens[i + 1])

    switch (operator) {
      case "+":
        result += number
        break

      case "-":
        result -= number
        break

      case "*":
        result *= number
        break

      case "/":
        result /= number
        break
    }
  }

  return result
}