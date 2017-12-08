var Layout = React.createClass({
    getInitialState() {
        return {
            title: "Lisää laite varastohallintaan",
            data: {
                Laitenimi: '',
                Hankitapaiva: '',
                Varastopaikat: '',
                Sarjanumero: '',
                Merkki: '',
                Malli: '',
                Muisti: '',
                Lisatietoja: ''
            }           
        };
    },

    changeTitle(title) {
        this.setState({title});
    },

    handleChange(e) {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    },

    postNewMachine(e) {
        e.preventDefault();
        var data = {
            Laitenimi: this.state.Laitenimi,
            Hankitapaiva: this.state.Hankitapaiva,
            Varastopaikat: this.state.Varastopaikat,
            Sarjanumero: this.state.Sarjanumero,
            Merkki: this.state.Merkki,
            Malli: this.state.Malli,
            Muisti: this.state.Muisti,
            Lisatietoja: this.state.Lisatietoja
        }

        fetch("http://localhost:2490/api/laitteet", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(data)
        }).then(function(res) {
            console.log(res.ok);
            Laitenimi.value = "";
            Hankitapaiva.value = "",
            Varastopaikat.value = "",
            Sarjanumero.value = "",
            Merkki.value = "",
            Malli.value = "",
            Muisti.value = "",
            Lisatietoja.value = ""
        });
    },

    render() {
        return (
            <div>
            <Header title={this.state.title} />
                <form onSubmit={this.postNewMachine}>
                    <div className="form-group">
                        <label htmlFor="Laitenimi">Laite</label>
                        <input type="text" name="Laitenimi" className="form-control" id="Laitenimi" placeholder="Läppäri" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Hankitapaiva">Hankittu</label>
                        <input type="text" name="Hankitapaiva"  className="form-control" id="Hankitapaiva"  onChange={this.handleChange}/>
                    </div>           
                    <div className="form-group">
                        <label htmlFor="Varastopaikat">Varastopaikka</label>
                        <input type="text" name="Varastopaikat"  className="form-control" id="Varastopaikat" placeholder="varastopaikka" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Sarjanumero">Sarjanumero</label>
                        <input type="text" name="Sarjanumero"  className="form-control" id="Sarjanumero" placeholder="Sarjanumero" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Merkki">Merkki</label>
                        <input type="text" name="Merkki"  className="form-control" id="Merkki" placeholder="Merkki" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Malli">Malli</label>
                        <input type="text" name="Malli"  className="form-control" id="Malli" placeholder="Malli" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Muisti">Muisti</label>
                        <input type="text" name="Muisti"  className="form-control" id="Muisti" placeholder="Muisti" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Lisatietoja">Lisatietoja</label>
                        <textarea type="text" name="Lisatietoja"  className="form-control" id="Lisatietoja" placeholder="Lisatietoja" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-success">Lisää laite</button>
                </form>
            <Footer />
            </div>
        );
    }
});

var Header = React.createClass({
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    },

    render() {
        return (
            <div>
            <Title title={this.props.title} />            
            </div>
        );
    }
});

var Title = React.createClass({
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
});

var Footer = React.createClass({
    render() {
        return (
            <footer></footer>
        );
    }
});



ReactDOM.render(
    <Layout/>, 
    document.getElementById('welcome')
    
);


