import React from "react";
import Item from "./Item";

export default class Result extends React.Component {

    state = {
        loading: true,
        query: null
    }

    async componentDidMount() {
        const url = "http://localhost:3000/api/mineral/search/Silber";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({query: data.results})
    }

    render () {
        // @ts-ignore
        return (
            <div className="w-full h-full flex flex-wrap p-6 overflow-y-auto ease-in-out duration-700">
                {/*@ts-ignore*/}
                {this.state.loading || !this.state.query ? (
                    <p>loading...</p>
                ) : (
                    <Item A_Code={this.state.query}/>
                )
                }
            </div>
        );
    };

}