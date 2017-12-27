var Remove = React.createClass({

    getInitialState() {
        return {
            findValue: '',
            data: {}
        }
    },

    FindMachineById(findValue) {
        this.setState({findValue});
        fetch("http://localhost:2490/api/laitteet/" + findValue)    
            .then(function (json) {
                this.setState({data: json.data});
            })
    },

    render() {
        const formdata = this.state.data.map(function(form) {
            return (
                <li>{form.kovalevykoko}</li>
            );
            
        });
        return(
            
            <div>
                <h2>Tällä sivulla voit etsiä ja poistaa laitteita</h2>
                <ul>{formdata}</ul>
                <FindMachine findValue={this.state.findValue} FindMachineById={this.FindMachineById.bind(this)}/>             
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