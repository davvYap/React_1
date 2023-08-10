function Profile(props) {
  //   console.log(props);
  return (
    <h3>
      Name: {props.name} <br />
      Age: {props.age} <br />
      {props.children}
    </h3>
  );
}

export default Profile;
