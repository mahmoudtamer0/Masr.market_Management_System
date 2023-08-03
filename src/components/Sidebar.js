import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div>

            <ul>
                <li><Link to='products'>all products</Link></li>
                <li><a href='/'>all categories</a></li>
            </ul>
        </div>
    )
}

export default Sidebar;