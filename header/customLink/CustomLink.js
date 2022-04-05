import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    marginRight: '5px',
                    textDecoration: 'none',
                    borderBottom: match ? '2px solid red' : '0',
                    fontWeight: '600',
                    fontSize: '1.2em',
                    padding: '5px 15px 5px 15px',
                    color: 'black'
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>

        </div>
    );
}
export { CustomLink }