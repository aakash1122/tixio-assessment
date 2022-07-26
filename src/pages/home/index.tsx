import ProductList from "./components/ProductList";
import Productslider from "./components/ProductSlider";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Productslider />
      <ProductList />
    </div>
  );
};

export default Home;
