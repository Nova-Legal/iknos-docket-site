import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

type BaseProps = {
  label: string;
  name: string;
  required?: boolean;
  helpText?: string;
};

export function TextField({ label, name, required, helpText, ...props }: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="field">
      <span className="field-label">
        {label}
        {required ? <span className="text-[var(--accent)]"> *</span> : null}
      </span>
      <input name={name} required={required} className="field-input" {...props} />
      {helpText ? <span className="field-help">{helpText}</span> : null}
    </label>
  );
}

export function SelectField({
  label,
  name,
  required,
  helpText,
  children,
  ...props
}: BaseProps & InputHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) {
  return (
    <label className="field">
      <span className="field-label">
        {label}
        {required ? <span className="text-[var(--accent)]"> *</span> : null}
      </span>
      <select name={name} required={required} className="field-input" {...(props as any)}>
        {children}
      </select>
      {helpText ? <span className="field-help">{helpText}</span> : null}
    </label>
  );
}

export function TextAreaField({
  label,
  name,
  required,
  helpText,
  ...props
}: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="field">
      <span className="field-label">
        {label}
        {required ? <span className="text-[var(--accent)]"> *</span> : null}
      </span>
      <textarea name={name} required={required} className="field-input min-h-36 resize-y" {...props} />
      {helpText ? <span className="field-help">{helpText}</span> : null}
    </label>
  );
}
