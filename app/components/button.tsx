import clsx from "clsx";

interface ButtonProps {
  handleButtonPress: (key: string) => void;
  inputKey: string;
  variant: "operator" | undefined;
}

export default function Button({
  handleButtonPress,
  inputKey,
  variant,
}: ButtonProps) {
  return (
    <button
      onClick={() => handleButtonPress(inputKey)}
      className={clsx(
        variant === "operator"
          ? "hover:bg-purple-300 bg-purple-200"
          : "hover:bg-zinc-300 bg-zinc-200",
        inputKey === "0" ? "col-span-2" : "",
        "p-1 rounded-full"
      )}
    >
      {inputKey}
    </button>
  );
}
