class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container" id="drum-machine">
                <Pad/>
            </div>
        )
    }
}

const Pad=(props)=>{
    return(
        <div className="container p-3 bg-dark border border-secondary rounded" id="display">
            <div className="row">
                <div className="col">
                    <button className="drum-pad btn btn-secondary border border-dark rounded w-100 m-1" id="Q">Q</button>
                </div>
                <div className="col">
                    <button className="drum-pad btn btn-secondary border border-dark rounded w-100 m-1" id="W">W</button>
                </div>
                <div className="col">
                    <button className="drum-pad btn btn-secondary border border-dark rounded w-100 m-1" id="E">E</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="drum-pad btn btn-secondary border border-dark rounded w-100 m-1" id="A">A</button>
                </div>
                <div className="col">
                    <button className="drum-pad btn btn-secondary border border-dark rounded w-100 m-1" id="S">S</button>
                </div>
                <div className="col">
                    <button className="drum-pad btn btn-secondary border border-dark rounded w-100 m-1" id="D">D</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="drum-pad btn btn-secondary border border-dark rounded w-100 m-1" id="Z">Z</button>
                </div>
                <div className="col">
                    <button className="drum-pad btn btn-secondary border border-dark rounded w-100 m-1" id="X">X</button>
                </div>
                <div className="col">
                    <button className="drum-pad btn btn-secondary border border-dark rounded w-100 m-1" id="C">C</button>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));