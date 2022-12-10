import type { Dispatch, SetStateAction } from "react";
import { Button } from "reactstrap";

export const ToastComponent = ({
  setShowError,
}: {
  setShowError: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <span>
      Hey! Can you add your feedback?
      <Button onClick={() => setShowError(true)}>Submit feedback</Button>
    </span>
  );
};
