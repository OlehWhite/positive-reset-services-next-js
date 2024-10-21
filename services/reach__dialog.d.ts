import * as React from "react";

declare module "@reach/dialog" {
  import * as React from "react";

  export interface DialogProps {
    isOpen: boolean;
    onDismiss: () => void;
  }

  export const Dialog: React.FC<DialogProps>;
}
