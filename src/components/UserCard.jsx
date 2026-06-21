const UserCard = ({user}) => {
   
  const{firstName,lastName,age,gender,about}=user;

  return (
    <div className="card bg-base-300 w-70 shadow-xl m-10">
      <figure>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOGlQ76SovrE7eSFw9Mpm_sK1_G9QwpiAzDk6pLuSNg&s=10"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName +" " + lastName}</h2>
        {age && gender && <p>{age + "" +gender}</p>}
        <p>
         {about}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Ignore</button>
              <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
