import styles from "./Checkbox.module.css";
import type { ChangeEvent } from "react";

interface CheckboxProps {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ id, name, label, checked, onChange }: CheckboxProps) => {
  return (
    <label htmlFor={id} className={styles.label}>
      <span className={styles.text}>{label}</span>
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        className={styles.check}
        onChange={onChange}
      />
    </label>
  );
};

export default Checkbox;
