import db from "../lib/db";

async function getUsers() {
  const user = await db.user.findMany({
    select: {
      userid: true,
      password : true,
      username: true,
      email: true,
      phone: true,
      address : true,
      created_at: true,
      updated_at: true
    },
  });
  return user;
}

export default async function Profile() {
  const user = await getUsers();
  return (
    <div className="p-5 flex flex-col gap-5">
      {user.map((u) => (
        <div key={u.userid}>
          {`ID : ${u.userid}`}<br/>
          {`PW : ${u.password}`}<br/>
          {`NAME : ${u.username}`}<br/>
          {`EMAIL : ${u.email}`}<br/>
          {`PHONE : ${u.phone}`}<br/>
          {`ADDRESS : ${u.address}`}<br/>
          {`CREATE : ${u.created_at}`}<br/>
          {`UPDATE : ${u.updated_at}`}<br/><br/>
        </div>
      ))}
    </div>
  );
}