var Get = React.createClass ({

    getInitialState() {
        return {
            data: []
        }
    },

    componentWillMount() {
        fetch("http://localhost:2490/api/laitteet")
        .then(response => response.json())
        .then(json => {
            this.setState({data: json});

        })
    },

    render() {
        const allPcs = 
            this.state.data.map(function(key) {
                return (
                    <div>
                        <div className="form-group">
                            <label key={key.Laite_uid}>Laitenimi: {key.Laitenimi}</label>
                        </div>
                        <div className="form-group">
                            <label  key={key.Laite_uid}>Sarjanumero: {key.Sarjanumero}</label>
                        </div>
                        <div className="form-group">
                            <label key={key.Laite_uid}>Merkki{key.Merkki}</label>
                        </div>
                        <div className="form-group">
                            <label key={key.Laite_uid}>Malli: {key.Malli}</label>
                        </div>
                        <div className="form-group">
                            <label key={key.Laite_uid}>Hankintapäivä: {key.Hankintapaiva}</label>
                        </div>
                        <div className="form-group">
                            <label key={key.Laite_uid}>Muisti: {key.Muisti}</label>
                        </div>
                        <div className="form-group">
                            <label key={key.Laite_uid}>Kovalevynkoko: {key.Kovalevynkoko}</label>
                        </div>
                        <div className="form-group">
                            <label key={key.Laite_uid}>Varastopaikka UID: {key.Varastopaikka_uid}</label>
                        </div>
                        <div className="form-group">
                            <label key={key.Laite_uid}>Lisätietoja: {key.Lisatietoja}</label>
                        </div>
                        <div className="form-group">
                            <label key={key.Laite_uid}>Laitetyyppi UID{key.Laitetyyppi_uid}</label>
                        </div>
                    </div>
                )   
            }, this)

        return (
            <div>
                <h1>Alla listattu kaikki laitteet:</h1>
                <form>
                    { allPcs }
                </form>
            </div>
        )
    }
});

ReactDOM.render(
    <Get />,
    document.getElementById('AllItems')
); 