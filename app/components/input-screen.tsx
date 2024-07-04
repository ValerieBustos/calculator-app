interface InputScreenProps {
  inputNumber: number | undefined;
  result: number | undefined;
}

export default function InputScreen({ inputNumber, result }: InputScreenProps) {
  function handleInputDisplay() {
    if (inputNumber === undefined && result === undefined) {
      return 0;
    }

    return inputNumber !== undefined ? inputNumber : result;
  }
  return (
    <input
      type="number"
      value={handleInputDisplay()}
      className="border-[2px] rounded-lg h-10 w-full text-2xl text-end border-zinc-400"
      readOnly
    />
  );
}
