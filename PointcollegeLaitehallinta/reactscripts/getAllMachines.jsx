const styles = {

    float: 'left',
    background: '#e6ffe6',
    border: '1px solid blue',
    margin: '5px',
    fontSize: 11
};



var Get = React.createClass({

    getInitialState() {
        return {
            data: []
        }
    },

    componentWillMount() {
        fetch("http://localhost:2490/api/laitteet/")
        .then(response => response.json())
        .then(json => {
            this.setState({data: json});

        })
    },

    render() {
        
        const allPcs = this.state.data.map(function(key) {

                return (
                    <table style={styles}>

                        <tr>
                            <td><label key={key.Laite_uid}>Laitenimi: {key.Laitenimi}</label></td>
                        </tr>
                        <tr>
                            <label key={key.Laite_uid}>Sarjanumero: {key.Sarjanumero}</label>
                        </tr>
                        <tr>
                            <label key={key.Laite_uid}>Merkki: {key.Merkki}</label>
                        </tr>
                        <tr>
                            <label key={key.Laite_uid}>Malli: {key.Malli}</label>
                        </tr>
                        <tr>
                            <label key={key.Laite_uid}>Hankintapäivä: {key.Hankintapaiva}</label>
                        </tr>
                        <tr>
                            <label key={key.Laite_uid}>Muisti: {key.Muisti}</label>
                        </tr>
                        <tr>
                            <label key={key.Laite_uid}>Kovalevynkoko: {key.Kovalevynkoko}</label>
                        </tr>
                        <tr>
                            <label key={key.Laite_uid}>Varastopaikka UID: {key.Varastopaikka_uid}</label>
                        </tr>
                        <tr>
                            <label key={key.Laite_uid}>Lisätietoja: {key.Lisatietoja}</label>
                        </tr>
                        <tr>
                            <label key={key.Laite_uid}>Laitetyyppi UID{key.Laitetyyppi_uid}</label>
                        </tr>

                    </table>
                )
            }, this)

        return (
            <div>
                <h1>Alla listattu kaikki laitteet:</h1>


                {allPcs}
                <div><br/></div>
                
            </div>
        )
    }
});

ReactDOM.render(
    <Get />,
    document.getElementById('AllItems')
); 