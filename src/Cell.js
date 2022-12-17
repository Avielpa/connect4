function Cell(props) {
    return(
        <td style = {{backgroundColor: "white"}} onClick={() =>
            props.cellClicked(props.row, props.cell)}>
            {props.value}
        </td>
    )
}

export default Cell;