function Input({
  type = "text",
  placeholder = "",
  label,
  defaultValue = null,
  register = null,
  registerName,
  className = "",
  lableClassName = "",
  errors = {},
  validation = {},
  ...props
}) {
  const registerProp =
    register && registerName ? register(registerName, validation) : {};

  return (
    <div className="flex flex-col items-start gap-2 w-full">
      {label && (
        <div className="flex justify-between items-center w-full">
          <label htmlFor={registerName} className={lableClassName}>
            {label}
          </label>
        </div>
      )}
      <input
        defaultValue={defaultValue}
        {...registerProp}
        id={registerName}
        placeholder={placeholder}
        type={type}
        className={`${className} ${errors[registerName] ? "border-red-500" : ""}`}
        {...props}
      />
      {errors[registerName] && (
        <p className="mt-1 text-red-500 text-sm text-right">
          {errors[registerName]?.message}
        </p>
      )}
    </div>
  );
}

export default Input;
