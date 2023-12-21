import { Color } from "./Color";

export function Colors({ itemArray }){
    return (
        <ul>
            {itemArray.map((item) => (
                <Color key={item.id} color={{id: item.id, name: item.name}} />
            ))}
        </ul>
    )
}