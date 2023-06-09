import React from 'react';

import styles from '../../styles/ButtonHero.module.css';

interface ButtonHeroProps {
  onClick: () => void;
  backgroundColor: string;
  border: string;
  color: string;
  width: string;
  text: string;
  height: string;
}
const ButtonHero: React.FC<ButtonHeroProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={styles.heroBtn}
      type="submit"
      style={{
        backgroundColor: props.backgroundColor,
        borderColor: props.border,
        color: props.color,
        width: props.width,
        height: props.height,
      }}
    >
      {props.text}
    </button>
  );
};
export default ButtonHero;
