import DefaultProps from "../props/DefaultLayoutProps";
import Header from "../../../Header";

const DefaultLayout = (props: DefaultProps) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};
export default DefaultLayout;
