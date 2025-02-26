import Spinner from "./Spinner"
import { useQuery } from "@apollo/client"
import Projectcard from "./Projectcard"
import { GET_PROJECTS } from "../queries/projectQueries"

const Projects = () => {
    const { loading, error, data } = useQuery(GET_PROJECTS);

    if (loading) return <Spinner />;
    if (error) return <p>Something Went Wrong.</p>;

    return (
        <>
            {data.projects.length > 0 ? (
                <div className="row mt-4">
                    {data.projects.map((project) => (
                        <Projectcard key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <p>No Projects</p>
            )}
        </>
    )
}
export default Projects