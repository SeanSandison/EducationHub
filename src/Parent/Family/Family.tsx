import React, { useState } from 'react';
import '../../Styles/FamilyStyle.css';

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

const StudentOverlay: React.FC<{ student: Student; onClose: () => void }> = ({ student, onClose }) => {
    return (
        <div className="overlay">
            <div className="overlay-content">
                <button className="overlay-close" onClick={onClose}>&times;</button>
                <h3>{student.name}</h3>
                <p>Email: {student.email}</p>
                {/* Add more info here if needed */}
            </div>
        </div>
    );
};

const Family: React.FC = () => {
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

    return (
        <div className="family-container">
            <div className={`family-content ${selectedStudent ? 'blurred' : ''}`}>
                <h2 className="family-title">Student Accounts</h2>
                <ul className="family-list">
                    {students.map(student => (
                        <li key={student.id} className="family-member" onClick={() => setSelectedStudent(student)}>
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

export default Family;
