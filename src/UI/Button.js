import styles from './Button.module.css';

const Button = (props) => {

    const classesCss = styles.button + props.className;

    return ( <button className={classesCss} type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>);
}
 
export default Button;