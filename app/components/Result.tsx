import React from "react";
import Item from "./Item";

export default class Result extends React.Component {

    state = {
        loading: true,
        res: null
    }

    async componentDidMount() {
        const url = "http://localhost:3000/api/mineral/all";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({res: data.results})
        this.setState({loading: false})
    }

    render() {
        return (
            <div className="w-full h-full flex flex-wrap p-6 overflow-y-auto ease-in-out duration-700">
                {/*@ts-ignore*/}
                {this.state.loading ? (
                    <p>loading...</p>
                ) : (
                    <div key={this.state.res}>
                        {/*@ts-ignore*/}
                        <Item A_Code={this.state.res}/>
                    </div>
                )
                }
            </div>
        );
    };

}