import React, {Component} from 'react'

//Simple component
const TableHeader = () => {

    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )

}
//Simple component
const TableBody = () => {

    return(
        <tbody>
        <tr>
            <td>Simon</td>
            <td>Elbrink</td>
        </tr>
        <tr>
            <td>Mac</td>
            <td>Bouncer</td>
        </tr>
        <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
        </tr>
        <tr>
            <td>Dennis</td>
            <td>Bartender</td>
        </tr>
        </tbody>
    )
}



// Class component
class Table extends Component{

    render() {

        return(
            <table>
                <TableHeader/>
                <TableBody/>
            </table>
        )
    }
}

export default Table;