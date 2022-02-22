import React from "react";
import Item from "./Item";

export default class Result extends React.Component {

    state = {
        loading: true
    }

    componentDidMount() {
    }

    render () {
        return (
            <div className="w-full h-full flex flex-wrap p-6 overflow-y-auto ease-in-out duration-700">
            </div>
        );
    };

}