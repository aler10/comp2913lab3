export default function User(props) {
    let styles = { borderRadius: "180px",
                   width: "40px"};
    return (
        <div>
            <img style ={styles} src={props.coverImg} alt={props.name} />
            <span>{props.name}</span>
        </div>
    ); 
}