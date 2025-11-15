
interface ButtonProps {
  value: string;
  type?: "button" | "submit" | "reset";
  event?: React.MouseEventHandler<HTMLButtonElement>;
  addClassName?: string;
}
export default function PrimaryButton({value,type,event,addClassName}:ButtonProps) {
  return <button type={type} className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer ${addClassName}`} onClick={event}>{value}</button>;
}