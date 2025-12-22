export function BarraProgreso (props){
    return(
        <div style={{border: "1px solid #000", width: "100%", height:"20px"}}>
            <div style={{backgroundColor: "#080", width: `${props.valor}%`}}>
                {props.valor}%
            </div>
        </div>
    )
}