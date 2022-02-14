import { useContext } from "react";
import { exampleContext } from "../../../../pages/21-04-context-api";

export default function BoardWriteContextUI() {
  const { isEdit } = useContext(exampleContext);
  return <>{isEdit ? "Edit" : "Submit"}</>;
}
