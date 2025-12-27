import Profile from "../components/Profile";
function Home(props) {
  return (
    <>
      <div>
        <Profile
          url={props.imgurl}
          name={props.name}
          email={props.email}
          mode={props.mode}
        />
      </div>
    </>
  );
}

export default Home;
