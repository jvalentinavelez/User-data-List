import styles from './Card.module.css';

const Card = (props) => {

    //props.children is used to output what's inside the component that is being wrapped by the Card component
    const classesCss = `${styles.card} + ${props.className}`;
    return ( <div className={classesCss}>{props.children}</div> );
}
 
export default Card;