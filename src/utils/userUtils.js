export function getUsers(users, searchTerm = '') {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    return users.filter(user =>
        user.name.toLowerCase().includes(normalizedSearchTerm)
    );
}