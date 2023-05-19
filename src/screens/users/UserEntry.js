export const UserEntry = ({user}) => {
    return (
        <tr className="UserEntry">
            <th>
                {user.username}
            </th>
            <th>
                {user.firstname}
            </th>
            <th>
                {user.lastname}
            </th>
            <th>
                {user.email}
            </th>
        </tr>
    )
}