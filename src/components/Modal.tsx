interface ModalProps {
  children: React.ReactNode;
  title?: string;
  isOpen: boolean;
  handleClose: () => void;
}

function Modal({ children, title = "", isOpen, handleClose }: ModalProps) {
  return (
    <>
      {isOpen ? (
        <div className="absolute top-0 left-0 size-full bg-neutral-900/70 flex items-center justify-center">
          <div className="bg-neutral-800 rounded-md p-4 flex flex-col">
            <div className="flex items-center text-white">
              <button
                className="size-8 mr-8 bg-neutral-900 font-bold rounded-full"
                onClick={() => handleClose()}
              >
                X
              </button>
              <h2 className="w-full overflow-hidden overflow-ellipsis">
                {title}
              </h2>
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
