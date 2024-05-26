const Card = ({ icon, category }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        {icon}
        <h2 className="card-title">{category}</h2>
      </div>
    </div>
  );
};

export default Card;
