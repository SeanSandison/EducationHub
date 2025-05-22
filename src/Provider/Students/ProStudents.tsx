import React, { useState } from 'react';
import '../../Styles/MembersStyle.css';

interface Student {
    id: number;
    name: string;
    email: string;
}

/* studnet information here */
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
        <div className="members-container">
            <div className={`members-content ${selectedStudent ? 'blurred' : ''}`}>
                <h2 className="members-title">Students</h2>
                <ul className="members-list">
                    {students.map(student => (
                        <li
                            key={student.id}
                            className="members-member"
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
            </div>

            {selectedStudent && (
                <StudentOverlay student={selectedStudent} onClose={() => setSelectedStudent(null)} />
            )}
        </div>
    );
};

export default Students;
