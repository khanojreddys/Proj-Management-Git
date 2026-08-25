export function getProjects(projects, filters = {}) {
    let filteredProjects = [...projects];
<<<<<<< HEAD
    const searchName = (filters.name || "").trim().toLowerCase();

    if (searchName) {
        filteredProjects = filteredProjects.filter((project) =>
            (project.name || "").toLowerCase().includes(searchName)
        );
    }

    return filteredProjects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}
    
=======

    // TODO: Apply filters here based on the filters object
    // Developers will add search, status filters, etc. in this section.

    return filteredProjects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}
>>>>>>> 531d398efb1a17f74035e8ff2153ae5c8183a57f
