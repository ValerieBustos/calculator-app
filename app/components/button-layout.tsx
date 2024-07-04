import { Operator } from "~/routes/_index";
import Button from "./button";

interface ButtonLayoutProps {
  inputNumber: number | undefined;
  setInputNumber: (num: number | undefined) => void;
  operation: Operator;
  setOperation: (op: Operator) => void;
  result: number | undefined;
  setResult: (num: number | undefined) => void;
  setErrorMessage: (message: string) => void;
}

export default function ButtonLayout({
  inputNumber,
  setInputNumber,
  operation,
  setOperation,
  result,
  setResult,
  setErrorMessage,
}: ButtonLayoutProps) {
  const buttonKeys = [
    ["AC", "+/-", "%", "/"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  const operators = ["/", "x", "-", "+", "="];

  function handleCalculateResult() {
    if (inputNumber === undefined || result === undefined) return;
    switch (operation) {
      case "+":
        setInputNumber(inputNumber + result);
        setOperation(undefined);
        setResult(inputNumber + result);
        break;
      case "x":
        setInputNumber(inputNumber * result);
        setOperation(undefined);
        setResult(inputNumber * result);
        break;
      case "-":
        setInputNumber(result - inputNumber);
        setOperation(undefined);
        setResult(result - inputNumber);
        break;
      case "/":
        if (inputNumber === 0) {
          setErrorMessage("Division by 0 is not allowed");
          setInputNumber(undefined);
          setOperation(undefined);
          setResult(undefined);
          return;
        }
        setInputNumber(inputNumber / result);
        setOperation(undefined);
        setResult(inputNumber / result);
        break;
    }
  }

  function handleButtonPress(key: string) {
    switch (key) {
      case "AC":
        setInputNumber(undefined);
        setOperation(undefined);
        setResult(undefined);
        break;
      case "-":
      case "/":
      case "x":
      case "+":
        setOperation(key);
        // Resturn saved result in case the user is pressing the operator without entering a new input
        setResult(
          result === undefined && inputNumber !== undefined
            ? inputNumber
            : result
        );
        setInputNumber(undefined);
        break;
      case "%":
        if (inputNumber) {
          setInputNumber(inputNumber / 100);
        }
        break;
      case "+/-":
        if (inputNumber) {
          setInputNumber(inputNumber * -1);
        }
        break;
      case "=":
        handleCalculateResult();
        break;
      default:
        setInputNumber(
          inputNumber ? inputNumber * 10 + parseInt(key) : parseInt(key)
        );
        break;
    }
  }

  return (
    <div className="grid grid-rows-5 grid-cols-4 gap-2">
      {buttonKeys.map((row: string[]) =>
        row.map((key: string) => (
          <Button
            variant={operators.includes(key) ? "operator" : undefined}
            inputKey={key}
            handleButtonPress={handleButtonPress}
          />
        ))
      )}
    </div>
  );
}
