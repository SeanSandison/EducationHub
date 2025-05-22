import React, { useState } from "react";
import "../../../Styles/ProfileFamilyStyle.css"

interface FamilyMember {
  id: number;
  name: string;
  relation: string;
}

const initialFamily: FamilyMember[] = [
  { id: 1, name: "Alice Johnson", relation: "Mother" },
  { id: 2, name: "Bob Johnson", relation: "Father" },
  { id: 3, name: "Charlie Johnson", relation: "Child" },
];

const Family: React.FC = () => {
  const [family, setFamily] = useState<FamilyMember[]>(initialFamily);
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");

  const addMember = () => {
    if (name.trim() && relation.trim()) {
      setFamily([
        ...family,
        { id: Date.now(), name, relation }
      ]);
      setName("");
      setRelation("");
    }
  };

  const removeMember = (id: number) => {
    setFamily(family.filter(member => member.id !== id));
  };

  return (
    <div className="info-container">
      <h1>Family Members</h1>
      <ul className="family-list">
        {family.map(member => (
          <li key={member.id} className="family-member">
            <span>{member.name} ({member.relation})</span>
            <button onClick={() => removeMember(member.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="add-family-form">
        <h2>Add Family Member</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Relation"
          value={relation}
          onChange={e => setRelation(e.target.value)}
        />
        <button onClick={addMember}>Add Member</button>
      </div>
    </div>
  );
};

export default Family;