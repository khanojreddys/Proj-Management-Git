import React, { useState } from 'react';

function TaskList({ tasks, onCreateTask, projects, users }) {
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskProjectId, setNewTaskProjectId] = useState('');
    
    // Developer C: Added search query state
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateTask({
            title: newTaskTitle,
            projectId: newTaskProjectId,
            priority: "Medium",
            status: "Active"
        });
        setNewTaskTitle('');
        setNewTaskProjectId('');
    };

    // Developer C: Modified getTasks() helper function for case-insensitive search
    const getTasks = () => {
        return tasks.filter(task => {
            const matchesSearch = task.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
            return matchesSearch;
        });
    };

    const displayedTasks = getTasks();

    return (
        <div className="task-section">
             {/* Developer C: Visual Search Input Bar Control Component */}
            <div className="task-search-bar card" style={{ margin: "20px 0", padding: "15px" }}>
                <h3>Search Tasks</h3>
                <input 
                    type="text"
                    placeholder="Search by task title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
            </div>
            <div className="task-creation-form card">
                <h3>Create New Task</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Task Title..." 
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                    />
                    <select 
                        value={newTaskProjectId} 
                        onChange={(e) => setNewTaskProjectId(e.target.value)}
                    >
                        <option value="">Select Project</option>
                        {projects.map(p => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                    </select>
                    <button type="submit" className="btn-primary">Create Task</button>
                </form>
            </div>

            {displayedTasks.length === 0 ? (
                <p className="empty-message">No tasks found.</p>
            ) : (
                <div className="list-container task-list">
                    {displayedTasks.map(task => (
                        <div key={task.id} className="list-item card">
                            <div className="card-header">
                                <h4>{task.title}</h4>
                                <div className="badges">
                                    <span className={`badge priority-${(task.priority || 'medium').toLowerCase()}`}>
                                        {task.priority || 'Medium'}
                                    </span>
                                    <span className={`badge status-${task.status.toLowerCase()}`}>
                                        {task.status}
                                    </span>
                                </div>
                            </div>
                            <div className="card-body">
                                <p><strong>Project:</strong> {projects.find(p => p.id === task.projectId)?.name || 'Unknown'}</p>
                                <p><strong>Assignee:</strong> {task.assignee || 'Unassigned'}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TaskList;
