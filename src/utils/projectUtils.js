export function getProjects(projects, filters = {}) {
    let filteredProjects = [...projects];

    // 1. Extract the name filter and remove accidental whitespace
    const searchName = filters.name ? filters.name.toLowerCase().trim() : "";

    // 2. Apply case-insensitive search filter if a query exists
    if (searchName) {
        filteredProjects = filteredProjects.filter(project => 
            project.name && project.name.toLowerCase().includes(searchName)
        );
    }

    // 3. Show a message in the console if a search was performed but yielded no results
    if (searchName && filteredProjects.length === 0) {
        console.warn(`No project matches the search: "${filters.name}"`);
    }

    // 4. Return the filtered array sorted by creation date (newest first)
    return filteredProjects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}
