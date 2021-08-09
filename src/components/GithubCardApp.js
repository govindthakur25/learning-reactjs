const CardList = (props) => {
  return <div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
  </div>
}

class Card extends React.Component {
  render() {
    const profile = this.props;
    return <div class="github-profiles">
      <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    </div>;
  }
}

class Form extends React.Component {
  // unameInput = React.createRef();
  state = { userName: '' }
  handleSubmit = async (event) => {
    event.preventDefault();
   const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
     this.props.onSubmit(response.data);
    this.setState({userName: ''});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          required />
        <button>Add Profile</button>
      </form>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    }
  }
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }
  render() {
    return (
      <div>
        <div class="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
      );
  }
}

ReactDOM.render(
  <App title="The GitHub Cards App"/>,
  mountNode
)