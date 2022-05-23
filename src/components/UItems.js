const UItems = (prop) => {
    const listItems = Object.keys(prop).map((d) => <li key={d}> ID user: {prop[d].id}</li>);
    
    return(
        <div>
            Componente User List
            {listItems}
        </div>
    )
}


export {UItems};