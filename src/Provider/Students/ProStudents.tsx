import React, { useState } from 'react';
import '../../Styles/ProStudentsStyle.css';

interface Student {
    id: number;
    name: string;
    email: string;
}

const students: Student[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
];

const StudentOverlay: React.FC<{ student: Student; onClose: () => void }> = ({ student, onClose }) => (
    <div className="overlay">
        <div className="overlay-content">
            <button className="overlay-close" onClick={onClose}>&times;</button>
            <h3>{student.name}</h3>
            <p>Email: {student.email}</p>
            {/* Add more info here if needed */}
        </div>
    </div>
);

const Students: React.FC = () => {
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

    return (
        <div className="students-container">
            <div className={`students-content ${selectedStudent ? 'blurred' : ''}`}>
                <h2 className="students-title">Students</h2>
                <ul className="students-list">
                    {students.map(student => (
                        <li
                            key={student.id}
                            className="students-member"
                            onClick={() => setSelectedStudent(student)}
                        >
                            <div className="member-avatar">{student.name.charAt(0)}</div>
                            <div className="member-info">
                                <div className="member-name">{student.name}</div>
                                <div className="member-role">{student.email}</div>
                            </div>
                        </li>
                    ))}
                </ul>
                <button className="add-member-btn">Add Student</button>
            </div>

            {selectedStudent && (
                <StudentOverlay student={selectedStudent} onClose={() => setSelectedStudent(null)} />
            )}
        </div>
    );
};

export default Students;
