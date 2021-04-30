import React from 'react';

class Forms extends React.Component {
  constructor() {
    super();
    
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      estadoFavorito: '',
    };
  }

  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form action="">
          <label htmlFor="">
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
            <textarea 
              name="estadoFavorito" 
              value={this.state.estadoFavorito}
              onChange={(event) => this.handleChange(event)}
              cols="30" 
              rows="10" 
            />
          </label>
          <input 
            type="number"
            name="idade"
            placeholder="idade"
          />
          <input 
            type="checkbox"
            name="vaiComparecer"
          />
        </form>
      </div>
    );
  }
}
export default Forms;