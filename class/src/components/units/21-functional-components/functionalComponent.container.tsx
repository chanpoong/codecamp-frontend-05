import FunctionalComponentUI from "./functionalComponent.presenter";

export default function FunctionalComponent() {
  return <FunctionalComponentUI count={2000} />;
  //   return <div>{FunctionalComponentUI({ count: 100 })}</div>;
}
