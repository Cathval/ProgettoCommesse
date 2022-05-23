const OItems = (prop) => {

    const listItems = Object.keys(prop).map((d) => <li key={d}>{prop[d].orderCode}</li>);
    //return (<li key={d}>{[d].orderCode}</li>)

    return(
        <div>
            Componente ListItem
            <p>Order Code: {prop[0].orderCode}</p>
            {listItems}
            
        </div>
    )
}


export {OItems};