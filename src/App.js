import React, {Component} from 'react'
import Table from "./Table";

class App extends Component{

    state = {
        characters: [
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
        ],

    }

    removeCharacter = index =>{

        const {characters} = this.state;

        this.setState({
                characters: characters.filter(
                    (character, i) => {
                        return i !== index
                    }
                )
            });
    }

    render(){

        return (
            <div className="container">
                <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
            </div>)

    }
}

export default App;