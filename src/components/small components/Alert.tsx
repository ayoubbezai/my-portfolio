import { createPortal } from "react-dom";

// Define the type for the props
interface AlertProps {
  showMessage: boolean;
}

const Alert: React.FC<AlertProps> = ({ showMessage }) => {
  const rootElement = document.querySelector("#alert") ;

  if (!rootElement) {
    console.error("Root element not found");
    return null;
  }

  return createPortal(
    <div>
      { showMessage &&(
        <div
          className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-3 py-2 shadow-md self-center  fixed z-50  right-1 top-3"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="fill-current h-5 w-5 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Success</p>
              <p className="text-sm">Thank you! The CV has been downloaded.</p>
            </div>
          </div>
        </div>
      )}
    </div>,
    rootElement
  );
};

export default Alert;
