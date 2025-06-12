import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
function About () {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/Bigbongzhong')
            .then(response => response.json())
            .then(data => setData(data))
            
    }, [])
    return <div>
        <h2>About Page</h2>
        <h3>followers: {data.followers}</h3>
        <img src={data.avatar_url} alt="git_pfp" />
        <nav>
            <ul>
                <li>
                    <Link to="team">Our Team</Link>
                </li>
                <li>
                    <Link to="company">Our Company</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
};
export default About;