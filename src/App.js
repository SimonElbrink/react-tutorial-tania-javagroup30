import React, {Component} from 'react'
import Table from "./Table";

class App extends Component{

    render(){

        const characters = [

            {
                name: 'Simon',
                job: 'Teacher Java '
            },
            {
                name: 'Erik',
                job: 'Teacher Java'
            },
            {
                name: 'Ulf',
                job: 'Teacher Java C#'
            },
        ]


        return (
            <div className="container">
                <Table characterData={characters} />
            </div>)

    }
}

export default App;