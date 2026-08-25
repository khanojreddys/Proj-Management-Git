export function getProjects(projects, filters = {}) {
    let filteredProjects = [...projects];
    const searchName = (filters.name || "").trim().toLowerCase();
    const selectedStatus = (filters.status || "").trim().toLowerCase();

    if (searchName) {
        filteredProjects = filteredProjects.filter((project) =>
            (project.name || "").toLowerCase().includes(searchName)
        );
    }

    if (selectedStatus) {
        filteredProjects = filteredProjects.filter(
            (project) => (project.status || "").toLowerCase() === selectedStatus
        );
    }

    return filteredProjects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}
