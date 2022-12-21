import './App.css';


function Cell(props){
    let backg = 'white';
    if (props.value === 1) {
        backg = 'red';
    } else if (props.value === 2) {
        backg = 'yellow';

    }
    return(
        <td style = {{backgroundColor: backg}} onClick={() =>
            props.cellClicked(props.row, props.cell)}>

        </td>    )
}

export default Cell;