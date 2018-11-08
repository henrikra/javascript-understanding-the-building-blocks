const createStudent = name => {
  return {
    name: name,
    grade: null,
    courses: [],
    isGraduated: false,
  };
};

module.exports = createStudent;
