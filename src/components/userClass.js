import React from "react";


class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " Child Cons");

    this.state = {
      userInfo: {
        name: "Dum",
        id: "1223",
      },
    };
  }
  componentDidMount() {
    console.log(this.props.name + " Child Mount");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/IrfanKoya");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { login, id, updated_at,avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {login}</h2>
        <h3>Location: {id}</h3>
        <h3>LastUpdate: {updated_at}</h3>
        <img src={avatar_url}/>

        <h4>Contact: 8113086818</h4>
      </div>
    );
  }
}
export default UserClass;
