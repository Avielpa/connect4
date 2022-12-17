import './App.css';


function Cell(props){
    let bg = 'white';
    if (props.value === 1) {
        bg = 'red';
    } else if (props.value === 2) {
        bg = 'yellow';
    }
    return(
        <td style = {{backgroundColor: bg}} onClick={() =>
            props.cellClicked(props.cell)}>

        </td>
    )
}

export default Cell;