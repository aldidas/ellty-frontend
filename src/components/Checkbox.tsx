import styles from "./Checkbox.module.css";

interface CheckboxProps {
  id: string;
  value: string;
  name: string;
  label: string;
  checked: boolean;
}

const Checkbox = ({ id, value, name, label, checked }: CheckboxProps) => {
  return (
    <label htmlFor={id} className={styles.label}>
      <span className={styles.text}>{label}</span>
      <input
        id={id}
        value={value}
        name={name}
        type="checkbox"
        checked={checked}
        className={styles.check}
      />
    </label>
  );
};

export default Checkbox;
