import {Outlet, Link } from "react-router-dom";

const Team= ()=> {
    return <div>
    <h2>Meet our Team</h2>
    <nav>
        <Link to="TeamMember">Team Member</Link>
    </nav>
    <Outlet />
    </div>
}
export default Team;
