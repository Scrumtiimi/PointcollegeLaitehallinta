var Remove = React.createClass({

    getInitialState() {
        return {
            findValue: '',
            data: []
        }
    },

    FindMachineById(findValue) {
        fetch("http://pointcollegelaitehallinta20180111075203.azurewebsites.net/api/laitteet/" + findValue)    
        .then(response => response.json())
        .then(json => {
            this.setState({data: json.Laitetyypit});
        })
    },


    render() {
        const getComps = 
                        Object.keys(this.state.data).map(function(key, index) {
                            return (
                                <div className="form-group">
                                    <label key={index}>{this.state.data[key]}</label>
                                </div>
                            )
                        }, this)

                       
                        
    
        return (            
            <div>
                <h2>Tällä sivulla voit etsiä ja poistaa laitteita</h2>
                <FindMachine findValue={this.state.findValue} FindMachineById={this.FindMachineById.bind(this)}/>             
                <form>
                   {getComps}                   
                </form>
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