import './InputField.css';

export default function InputField({
  type,
  id,
  name,
  minLength,
  required,
  placeholder,
}: InputFieldType) {
  return (
    <input
      className="input-field"
      type={type}
      id={id}
      name={name}
      minLength={minLength}
      required={required}
      placeholder={placeholder}
    />
  );
}

interface InputFieldType {
  type: string;
  id: string;
  name: string;
  minLength: number;
  required: boolean;
  placeholder: string;
}
