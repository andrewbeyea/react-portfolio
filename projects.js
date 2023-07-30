function Project({data}) {
    return (
        <div className="card">
            <h5 className="card-header">{data.name}</h5>
            <div className="card-body">
                <table className="table">
                    <tbody>
                    <tr>
                        <td className="text-success font-weight-bold">Thumbnail:</td>
                        <td><img src={data.thumbnail}></img></td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Name:</td>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Project Type:</td>
                        <td>{data.type}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Description:</td>
                        <td>{data.description}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Repository:</td>
                        <td><a href={data.repoLink}>{data.repoLink}</a></td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}
