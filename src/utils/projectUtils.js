export function getProjects(projects, filters = {}) {
    let filteredProjects = [...projects];
    const searchName = (filters.name || "").trim().toLowerCase();

    if (searchName) {
        filteredProjects = filteredProjects.filter((project) =>
            (project.name || "").toLowerCase().includes(searchName)
        );
    }

    return filteredProjects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}
    