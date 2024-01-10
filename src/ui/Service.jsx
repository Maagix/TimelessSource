function Service({ image, text, title, linkTo = null }) {
  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row">
      <img src={image} />
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{text}</p>
        {linkTo}
      </div>
    </div>
  );
}

export default Service;
