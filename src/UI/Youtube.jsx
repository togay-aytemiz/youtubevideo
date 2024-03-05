const Youtube = ({ embedId }) => {
  return (
    <>
      <div className=" rounded-xl overflow-hidden shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${embedId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          width={640}
          height={360}
          
        ></iframe>
      </div>
    </>
  );
};
export default Youtube;
