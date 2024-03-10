import 'style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
import 'style-loader!css-loader!bootstrap/dist/css/bootstrap-utilities.css';
import { defineCustomElements } from "react-library";

defineCustomElements();

export default ({ children }) => {
    return (
        <>
            <main>{children}</main>
        </>
    )
};
