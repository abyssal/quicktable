import { Component } from "react";
import './Root.css';
import './App.css';
import TodaySection from "./app/TodaySection";
import Timetable from "./app/timetable/Timetable";
import SchoolResourceSection from "./app/SchoolResourceSection";

export default class App extends Component {
    constructor(props) {
        super(props)
        this.id = props.match.params.id
    }
    render() {
        return <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm panel">
                        {<TodaySection />}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm panel">
                        {<Timetable id={this.id} />}
                    </div>
                    <div className="col-sm panel">
                        {<SchoolResourceSection />}
                    </div>
                </div>
            </div>
        </div>
    }
}