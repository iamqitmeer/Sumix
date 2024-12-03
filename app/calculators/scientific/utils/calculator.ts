export function evaluateExpression(expression: string): number {
  // Replace mathematical constants
  expression = expression.replace(/π/g, Math.PI.toString());

  // Handle basic operations
  const evaluate = (expr: string): number => {
    // Parse parentheses first
    while (expr.includes("(")) {
      expr = expr.replace(/\(([^()]+)\)/g, (_, group) => evaluate(group).toString());
    }

    // Handle scientific functions
    expr = expr.replace(/sin\(([\d.]+)\)/g, (_, num) => Math.sin(parseFloat(num)).toString());
    expr = expr.replace(/cos\(([\d.]+)\)/g, (_, num) => Math.cos(parseFloat(num)).toString());
    expr = expr.replace(/tan\(([\d.]+)\)/g, (_, num) => Math.tan(parseFloat(num)).toString());
    expr = expr.replace(/log\(([\d.]+)\)/g, (_, num) => Math.log10(parseFloat(num)).toString());
    expr = expr.replace(/ln\(([\d.]+)\)/g, (_, num) => Math.log(parseFloat(num)).toString());
    expr = expr.replace(/√\(([\d.]+)\)/g, (_, num) => Math.sqrt(parseFloat(num)).toString());

    // Split into terms
    const terms = expr.split(/([+\-×÷^])/);
    
    // Handle exponents first
    for (let i = 1; i < terms.length; i += 2) {
      if (terms[i] === "^") {
        const base = parseFloat(terms[i - 1]);
        const exponent = parseFloat(terms[i + 1]);
        terms.splice(i - 1, 3, Math.pow(base, exponent).toString());
        i -= 2;
      }
    }

    // Handle multiplication and division
    for (let i = 1; i < terms.length; i += 2) {
      if (terms[i] === "×" || terms[i] === "÷") {
        const left = parseFloat(terms[i - 1]);
        const right = parseFloat(terms[i + 1]);
        const result = terms[i] === "×" ? left * right : left / right;
        terms.splice(i - 1, 3, result.toString());
        i -= 2;
      }
    }

    // Handle addition and subtraction
    let result = parseFloat(terms[0]);
    for (let i = 1; i < terms.length; i += 2) {
      const operator = terms[i];
      const operand = parseFloat(terms[i + 1]);
      result = operator === "+" ? result + operand : result - operand;
    }

    return result;
  };

  try {
    return evaluate(expression);
  } catch (error) {
    return NaN;
  }
}