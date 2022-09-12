import Link from "next/link";

export const getStaticProps = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json(); //array of objects in data

    return {
        props: { users: data}
    }
}

const Users = ({ users }) => {
    return ( 
        <div>
            <h1>Route to this page must only be /testing</h1>
            {users.map(user => (
                <Link href={'/testing/' + user.id} key={user.id}>
                    <a>
                        <h3>{user.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Users;