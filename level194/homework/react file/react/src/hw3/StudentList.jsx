import React from 'react'
import StudentCard from './StudentCard'

function StudentList({ students }) {
  return (
    <div>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          age={student.age}
          grade={student.grade}
        />
      ))}
    </div>
  )
}

export default StudentList
