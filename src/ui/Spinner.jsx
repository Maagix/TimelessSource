function Spinner() {
  return (
    <div className="fixed right-0 top-0 z-50 flex h-screen w-screen items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
    </div>
  );
}

export default Spinner;
