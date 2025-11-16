import styles from './Button.module.css';

interface ButtonProps {
  id: string;
  type: 'submit' | 'reset' | 'button';
  label: string;
}

const Button = ({ id, type, label }: ButtonProps) => {
  return (
    <button
      id={id}
      type={type}
      className={styles.button}
    >
      {label}
    </button>
  );
};

export default Button;
