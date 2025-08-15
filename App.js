import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [students, setStudents] = useState([]);

  const addStudent = () => {
    if (name.trim() === "" || course.trim() === "") {
      alert("Please enter both Name and Course");
      return;
    }
    const newStudent = { id: Date.now(), name, course };
    setStudents([...students, newStudent]);
    setName("");
    setCourse("");
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Student Directory</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", margin: "5px" }}
      />
      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        style={{ padding: "8px", margin: "5px" }}
      />
      <button
        onClick={addStudent}
        style={{
          padding: "8px 15px",
          marginLeft: "10px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Add
      </button>

      <div style={{ marginTop: "20px" }}>
        {students.map((student) => (
          <div
            key={student.id}
            style={{
              display: "inline-block",
              background: "#f2f2f2",
              padding: "15px",
              margin: "10px",
              borderRadius: "10px",
              width: "200px",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)"
            }}
          >
            <h4>{student.name}</h4>
            <p>{student.course}</p>
            <button
              onClick={() => deleteStudent(student.id)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
