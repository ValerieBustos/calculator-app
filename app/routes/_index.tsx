import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import ButtonLayout from "~/components/button-layout";
import ErrorBanner from "~/components/error-banner";
import InputScreen from "~/components/input-screen";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export type Operator = "+" | "-" | "x" | "/" | "%" | "+/-" | undefined;

export default function Index() {
  const [inputNumber, setInputNumber] = useState<number | undefined>(undefined);
  const [operation, setOperation] = useState<Operator>(undefined);
  const [result, setResult] = useState<number | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  return (
    <div className="flex flex-col space-y-4 h-screen justify-center items-center">
      <div className="space-y-6 w-72 border-[2px] rounded-lg border-zinc-400 p-6">
        <InputScreen inputNumber={inputNumber} result={result} />
        <ButtonLayout
          operation={operation}
          setOperation={setOperation}
          setInputNumber={setInputNumber}
          inputNumber={inputNumber}
          result={result}
          setResult={setResult}
          setErrorMessage={setErrorMessage}
        />
      </div>
      <ErrorBanner
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
}
