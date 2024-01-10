import Modal from "./Modal";

function ConfirmDelete({ action, confirmFn, declineFn, isConfirmDelete }) {
  return (
    <Modal scrollFn={isConfirmDelete} closeFn={declineFn}>
      <div className="flex h-full w-full flex-col  gap-5 rounded-sm bg-white p-6">
        <p className="py-6 text-center text-2xl tracking-wide">
          Are you sure you want to {action}
        </p>
        <div className="flex justify-center gap-6">
          <button
            className="w-1/4 bg-main-red py-2 text-xl text-white"
            onClick={confirmFn}
          >
            Yes
          </button>
          <button
            className="w-1/4 bg-main-bg-gray text-xl text-main-red"
            onClick={declineFn}
          >
            No
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmDelete;
