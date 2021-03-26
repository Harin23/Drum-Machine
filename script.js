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
                    <button className="drum-pad btn btn-secondary border border-dark rounded w-100 m-1" 
                    id="Q">Q<audio className="clip" id="Q" src="./Damn-Son.mp3"></audio></button>
                </div>
                <div className="col">
                    <button className="drum-pad btn btn-secondary border border-dark rounded w-100 m-1" 
                    id="W">W<audio className="clip" id="W" src="./Damn-Son.mp3"></audio></button>
                </div>
                <div className="col">
                    <button className="drum-pad btn btn-secondary border border-dark rounded w-100 m-1" 
                    id="E">E<audio className="clip" id="E" src="./Damn-Son.mp3"></audio></button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="drum-pad btn btn-secondary border border-dark rounded w-100 m-1" 
                    id="A">A<audio className="clip" id="A" src="./Damn-Son.mp3"></audio></button>
                </div>
                <div className="col">
                    <button className="drum-pad btn btn-secondary border border-dark rounded w-100 m-1" 
                    id="S">S<audio className="clip" id="S" src="./Damn-Son.mp3"></audio></button>
                </div>
                <div className="col">
                    <button className="drum-pad btn btn-secondary border border-dark rounded w-100 m-1" 
                    id="D">D<audio className="clip" id="D" src="./Damn-Son.mp3"></audio></button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="drum-pad btn btn-secondary border border-dark rounded w-100 m-1" 
                    id="Z">Z<audio className="clip" id="Z" src="./Damn-Son.mp3"></audio></button>
                </div>
                <div className="col">
                    <button className="drum-pad btn btn-secondary border border-dark rounded w-100 m-1" 
                    id="X">X<audio className="clip" id="X" src="./Damn-Son.mp3"></audio></button>
                </div>
                <div className="col">
                    <button className="drum-pad btn btn-secondary border border-dark rounded w-100 m-1" 
                    id="C">C<audio className="clip" id="C" src="./Damn-Son.mp3"></audio></button>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));