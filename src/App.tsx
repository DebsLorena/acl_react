import React from "react";
import PermissionGate from "./PermissionGate";

function App() {
  return (
    <PermissionGate
      permission={['canSeeTitle']}>
      <>
        <h1>Gerenciando permissões em aplicações React</h1>
      </>
    </PermissionGate>
  );
}

export default App;

