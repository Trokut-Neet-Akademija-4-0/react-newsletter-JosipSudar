import PropTypes from "prop-types";

const MainComponent = ({ title, desc }) => {
  return (
    <main className=" bg-green-500 text-white h-[83vh] p-10">
      <h1 className=" font-bold text-3xl">{title}</h1>
      <p className=" mt-3">{desc}</p>
    </main>
  );
};

MainComponent.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default MainComponent;
