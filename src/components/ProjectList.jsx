import React from 'react';

<<<<<<< HEAD
function ProjectList({ projects, searchQuery = '' }) {
    if (projects.length === 0) {
        const hasSearch = searchQuery.trim().length > 0;
        return (
            <p className="empty-message">
                {hasSearch ? `No project matches "${searchQuery}".` : 'No projects found.'}
            </p>
        );
=======
function ProjectList({ projects }) {
    if (projects.length === 0) {
        return <p className="empty-message">No projects found.</p>;
>>>>>>> 531d398efb1a17f74035e8ff2153ae5c8183a57f
    }

    return (
        <div className="list-container project-list">
            {projects.map(project => (
                <div key={project.id} className="list-item card">
                    <div className="card-header">
                        <h3>{project.name}</h3>
                        <span className={`badge status-${project.status.toLowerCase()}`}>
                            {project.status}
                        </span>
                    </div>
                    <div className="card-body">
                        <p><strong>Category:</strong> {project.category}</p>
                        <p><strong>Owner:</strong> {project.owner}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;
