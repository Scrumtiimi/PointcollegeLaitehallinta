var Remove = React.createClass({

    getInitialState() {
        return {
            findValue: '',
            data: []
        }
    },

    FindMachineById(findValue) {
        this.setState({findValue});        
    },

    componentDidMount() {
        fetch("http://localhost:2490/api/laitteet/" + this.state.findValue)    
            .then(response => response.json())
            .then(data => this.setState({data: data}));
    },    

    render() {
        const { data } = this.state;

        return (            
            <div>
                <h2>Tällä sivulla voit etsiä ja poistaa laitteita</h2>
                <FindMachine findValue={this.state.findValue} FindMachineById={this.FindMachineById.bind(this)}/>             
                <ul>
                    {data.map(d => 
                        <li>{data.kovalevykoko}</li>
                    )}    
                </ul>
            </div>
        );
    }
});

var FindMachine = React.createClass({

    handleChange(e) {
        const id = e.target.value;
        this.props.FindMachineById(id);
    },

    render() {
        return(
            <div>
                <div>Anna laitteen nimi tai id</div>
                <input type="text" onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
});

ReactDOM.render(
    <Remove/>, 
    document.getElementById('remove')
    
);