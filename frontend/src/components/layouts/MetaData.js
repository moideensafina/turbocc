import { Helmet } from "react-helmet-async";

export default function MetaData({tittle}) {
    return(
        <Helmet>
            <title>{`${tittle} -Turbo`}</title>
        </Helmet>
    )
};