import React from 'react';

const TeacherCard = props => {
  const { teachers } = props;

  // console.log('in teacherCard: ', teachers);
  return <div>{teachers.first_name}</div>;
};

export default TeacherCard;
