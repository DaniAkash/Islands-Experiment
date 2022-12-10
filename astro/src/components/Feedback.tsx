import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { ErrorComponent } from "./ErrorComponent";
import { ToastComponent } from "./ToastComponent";

export const Feedback = () => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      toast(() => <ToastComponent setShowError={setShowError} />);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Toaster position="bottom-center" />
      {showError ? <ErrorComponent /> : null}
    </>
  );
};
