class App extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount(){
        addEventListener("keypress", (e)=>{
            let button = document.getElementById(e.key.toUpperCase());
            button.style.backgroundColor = "red";
            let sound = button.childNodes[1];
            sound.pause();
            sound.currentTime = 0;
            sound.play();
            setTimeout(() => {
                button.style.backgroundColor = "gray";
            }, Math.floor(sound.duration)*1000);
        })
    }
    handleClick(e){
        let button = e.target;
        button.style.backgroundColor = "red";
        let sound = button.childNodes[1];
        sound.pause();
        sound.currentTime = 0;
        sound.play();
        setTimeout(() => {
            button.style.backgroundColor = "gray";
        }, Math.floor(sound.duration)*1000);
    }
    render(){
        return(
            <div className="container" id="drum-machine">
                <div className="container p-3 bg-dark border border-secondary rounded" id="display">
                    <div className="row">
                        <div className="col">
                            <button className="drum-pad btn border border-dark rounded w-100 m-1" 
                            id="Q" onClick={this.handleClick}>Q<audio className="clip" id="Q" src="./Damn-Son.mp3"></audio></button>
                        </div>
                        <div className="col">
                            <button className="drum-pad btn border border-dark rounded w-100 m-1" 
                            id="W" onClick={this.handleClick}>W<audio className="clip" id="W" src="./Damn-Son.mp3"></audio></button>
                        </div>
                        <div className="col">
                            <button className="drum-pad btn border border-dark rounded w-100 m-1" 
                            id="E" onClick={this.handleClick}>E<audio className="clip" id="E" src="./Damn-Son.mp3"></audio></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="drum-pad btn border border-dark rounded w-100 m-1" 
                            id="A" onClick={this.handleClick}>A<audio className="clip" id="A" src="./Damn-Son.mp3"></audio></button>
                        </div>
                        <div className="col">
                            <button className="drum-pad btn border border-dark rounded w-100 m-1" 
                            id="S" onClick={this.handleClick}>S<audio className="clip" id="S" src="./Damn-Son.mp3"></audio></button>
                        </div>
                        <div className="col">
                            <button className="drum-pad btn border border-dark rounded w-100 m-1" 
                            id="D" onClick={this.handleClick}>D<audio className="clip" id="D" src="./Damn-Son.mp3"></audio></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="drum-pad btn border border-dark rounded w-100 m-1" 
                            id="Z" onClick={this.handleClick}>Z<audio className="clip" id="Z" src="./Damn-Son.mp3"></audio></button>
                        </div>
                        <div className="col">
                            <button className="drum-pad btn border border-dark rounded w-100 m-1" 
                            id="X" onClick={this.handleClick}>X<audio className="clip" id="X" src="./Damn-Son.mp3"></audio></button>
                        </div>
                        <div className="col">
                            <button className="drum-pad btn border border-dark rounded w-100 m-1" 
                            id="C" onClick={this.handleClick}>C<audio className="clip" id="C" src="./Damn-Son.mp3"></audio></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));