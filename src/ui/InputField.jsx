function InputField({
  type,
  label,
  placeholder,
  onChange,
  errMessage,
  pattern,
  styles,
  value,
}) {
  return (
    <div className="w-full">
      <p className="font-semibold">{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full p-1 tracking-wide ${styles}`}
        onChange={onChange}
        pattern={pattern}
        title={errMessage}
        required
        value={value}
      />
    </div>
  );
}

export default InputField;
