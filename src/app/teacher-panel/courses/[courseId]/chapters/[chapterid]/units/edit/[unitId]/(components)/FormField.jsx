export function FormField({ label, htmlFor, hint, error, children }) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={htmlFor} className="form-label">
        {label}
      </label>

      {children}

      {hint && <p className="text-xs text-slate-500">{hint}</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
