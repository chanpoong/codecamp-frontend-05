import { createContext } from "react";
import BoardWriteContext from "../../src/components/units/21-context-api/BoardWrite.container";

export const exampleContext = createContext(null);

export default function ContextAPIPage() {
  return (
    <exampleContext.Provider
      value={{
        isEdit: false,
      }}
    >
      <BoardWriteContext />
    </exampleContext.Provider>
  );
}
