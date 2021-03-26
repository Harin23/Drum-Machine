class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container" id="drum-machine">
                <div id="display">
                    
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));